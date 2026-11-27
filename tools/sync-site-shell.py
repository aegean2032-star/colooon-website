"""Regenerate or check the shared static site header and footer."""
from pathlib import Path
import argparse
import re

store = 'https://chromewebstore.google.com/detail/khenfhbjoefjfkhpjefmnjlkdonehfok'

def zhroute(route,zh):
    return ('/zh' if zh else '')+'/'+(route+'/' if route else '')

def chrome(zh,route):
    home,journey,purchase=(zhroute(r,zh) for r in ('','journey','purchase'))
    other=zhroute(route,not zh)
    label='首页' if zh else 'Home'
    buy='试用与购买' if zh else 'Trial &amp; Purchase'
    install='添加到 Chrome' if zh else 'Add to Chrome'
    home_link=f'<a class="site-chrome-logo notranslate" translate="no" href="{home}" aria-label="colooon · {label}"><span class="site-chrome-dots" aria-hidden="true"></span><img src="/colooon-wordmark.svg" alt="colooon" width="126"></a>'
    def link(url,title,r):
        return f'<a href="{url}"'+(' aria-current="page"' if route==r else '')+f'>{title}</a>'
    language='en' if zh else 'zh'
    header=f'''<!-- site-header -->
<header class="site-chrome site-chrome-header">
  <div class="site-chrome-inner">
    {home_link}
    <nav class="site-chrome-links" aria-label="{'主导航' if zh else 'Primary navigation'}">
      {link(home,label,'')}
      {link(journey,'<span class="notranslate" translate="no">Journey</span>','journey')}
      {link(purchase,buy,'purchase')}
      <a href="{other}" data-language-choice="{language}" lang="{'en' if zh else 'zh-CN'}">{'EN' if zh else '中文'}</a>
      <a class="site-chrome-install" href="{store}">{install}</a>
    </nav>
  </div>
</header>
<!-- /site-header -->'''
    labels=('服务条款','退款政策','隐私政策','找回许可证','支持') if zh else ('Terms','Refunds','Privacy','Recover license','Support')
    legal='\n      '.join(link(zhroute(r,zh),t,r) for r,t in zip(('terms','refunds','privacy','recover','support'),labels))
    positioning = '你的 AI 对话随行笔记本' if zh else 'Your AI conversation notebook.'
    chrome_store = 'Chrome 网上应用店' if zh else 'Chrome Web Store'
    footer=f'''<!-- site-footer -->
<footer class="site-chrome site-chrome-footer">
  <div class="site-chrome-inner">
    <div class="site-chrome-brand">
      {home_link}
      <p>{positioning}</p>
    </div>
    <nav class="site-chrome-links" aria-label="{'网站服务' if zh else 'Site services'}">
      {legal}
      <a href="mailto:support@colooon.com">support@colooon.com</a>
      <a href="{store}">{chrome_store}<span aria-hidden="true" class="site-external-arrow">↗</span></a>
    </nav>
  </div>
</footer>
<!-- /site-footer -->'''
    return header,footer

def main():
    args = argparse.ArgumentParser()
    args.add_argument('--check', action='store_true')
    options = args.parse_args()
    root = Path(__file__).resolve().parents[1]
    changed = []
    for zh in (False, True):
        directory = root / ('zh' if zh else '')
        articles = (directory / 'journal').glob('*/index.html')
        routes = ['', 'journey', 'purchase', 'recover', 'terms', 'refunds', 'privacy', 'support']
        routes += [p.parent.relative_to(directory).as_posix() for p in articles]
        for route in routes:
            page = directory / route / 'index.html'
            original = updated = page.read_text(encoding='utf-8')
            for name, markup in zip(('header', 'footer'), chrome(zh, route)):
                pattern = rf'<!-- site-{name} -->.*?<!-- /site-{name} -->'
                updated, count = re.subn(pattern, lambda _: markup, updated, flags=re.S)
                if count != 1:
                    raise SystemExit(f'{page}: expected one site {name}, found {count}')
            if original != updated:
                changed.append(str(page.relative_to(root)))
                if not options.check:
                    page.write_text(updated, encoding='utf-8')
    if options.check and changed:
        raise SystemExit('Outdated site chrome: ' + ', '.join(changed))

if __name__ == '__main__':
    main()
