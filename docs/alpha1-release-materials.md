# Alpha 1 Release Materials Draft

Date: 2026-06-06

This draft separates Alpha 1 launch materials into three usage levels:

- A. Public Copy: safe to show directly on the landing page or to users.
- B. Store / Permission Copy: Chrome Web Store, permissions, and privacy wording.
- C. Internal Release Notes: internal audit notes and Codex guardrails. Do not
  copy these directly into public marketing surfaces.

## A. Public Copy

### Positioning

Primary English line:

`Color on what you don't want to lose.`

Primary zh_CN line:

`给 AI 对话里不想丢的内容上色。`

Landing hero:

`Colooon it.`

`Color on what you don't want to lose.`

### Short Explanation

EN:

`colooon is a Chrome extension for keeping the useful parts of AI conversations.
Use Color On to keep a line, Capture QA to save a question-and-answer moment,
read your Colored Moments later, jump back to the source conversation, send a
moment back to chat, and export it as a clean image.`

zh_CN:

`colooon 是一个 Chrome 插件，用来留下 AI 对话里不想丢掉的部分。你可以用 Color On
留下一句话，用收整问 QA 保存一次问答，稍后在 Colored Moments 里阅读，回到原对话现场，
把片段送回聊天继续思考，也可以导出成干净的图片。`

### Chrome Web Store Listing — Alpha 1 Public Copy

Use the copy below for Chrome Web Store fields. Do not paste the section title
or internal version label into the public listing.

#### Extension Name

English:

`colooon`

Chinese:

`colooon`

#### Short Summary / Short Description

Final recommendation, EN:

`Color on the parts of AI conversations you don't want to lose.`

Alternative EN 1:

`Save the AI conversation moments you want to keep.`

Alternative EN 2:

`Keep highlights, notes, and QA moments from ChatGPT.`

Chinese:

`给 AI 对话里不想丢的内容上色。`

#### Long Description — English

colooon is an AI conversation spark collector. Use it to Color On the parts of
ChatGPT conversations that light something up, keep them while the spark is
still warm, and return when the moment becomes useful again.

What you can do:

- Color On selected AI conversation text.
- Capture QA when a question and answer should stay together.
- Review saved items in Colored Moments.
- Organize moments with Collections and Tags.
- Open READ for a quieter reading view.
- Use BACK / Back to the Scene to return to the source conversation.
- Use TO CHAT to send a saved moment back into ChatGPT.
- Export as MD, PDF through the browser print window, or IMAGE / QAN IMAGE.
- Works on ChatGPT at chatgpt.com and chat.openai.com.

Local and privacy note:

Saved highlights, notes, QA, collections, tags, source anchors, and export
preferences are stored locally in your browser. There is no account sync or
cross-device cloud archive in this release. Saved conversation text, notes,
questions, answers, collections, tags, and exported content are not sent to a
colooon server. Exports are generated locally by user action.

Known limits:

Saved items live in the browser's local extension storage. PDF export uses the
browser print window. colooon does not claim that content is never sent anywhere:
you may still manually submit text back into ChatGPT or manually export/share
files.

#### Long Description — Chinese

colooon 是一个 AI 对话火花收集器。你可以在 ChatGPT 里给心动的内容 Color On /
上色，趁热收下它们，让灵光一现不再一闪而过。需要的时候，再回看、回到现场，或者
把这些片段送回聊天继续想。

你可以做这些事：

- Color On / 上色选中的 AI 对话文本。
- 用收整问 QA 保存一组值得留下的问题和回答。
- 在 Colored Moments 里回看保存过的内容。
- 用收藏夹和标签整理 moments。
- 打开 READ，用更安静的方式阅读。
- 用 BACK / 回到现场回到原来的对话位置。
- 用 TO CHAT 把保存的片段送回 ChatGPT。
- 导出 MD、通过浏览器打印窗口导出 PDF，或导出 IMAGE / QAN IMAGE。
- 支持 chatgpt.com 和 chat.openai.com 上的 ChatGPT 页面。

本地与隐私说明：

保存的上色内容、笔记、QA、收藏夹、标签、来源锚点和导出偏好会保存在浏览器本地。
这个版本不包含账号同步，也不提供跨设备云端归档。已保存的对话正文、笔记、问题、
回答、收藏夹、标签和导出内容不会发送到 colooon 服务器。导出由用户主动触发，并在本地生成。

已知限制：

保存的内容存在浏览器的本地插件存储中。PDF 导出使用浏览器打印窗口。colooon 不会
宣称内容“永远不会发送到任何地方”：你仍然可以手动把文本送回 ChatGPT，或手动导出 /
分享文件。

Chrome Web Store privacy line, EN:

`This release does not include analytics or telemetry uploads of your saved conversation content.`

Chrome Web Store privacy line, zh_CN:

`这个版本不包含会上传已保存对话内容的分析或遥测功能。`

#### Known Limits, User Version

- This release does not include account sync.
- This release does not include a cross-device cloud archive.
- Saved items live in the browser's local extension storage.
- PDF export uses the browser print window.
- If ChatGPT page structure changes significantly, source return may require an
  update.

#### Screenshot Captions

1. Color On the parts you want to keep.
2. Review saved sparks in Colored Moments.
3. Capture QA as one saved moment.
4. Back to the Scene, or send it TO CHAT.
5. Export MD, PDF, or IMAGE.

#### Store Listing Checklist

- Name: `colooon`
- Short summary: `Color on the parts of AI conversations you don't want to lose.`
- Long description: Use the English and Chinese drafts above.
- Existing item update: update `COLON for ChatGPT`
  (`khenfhbjoefjfkhpjefmnjlkdonehfok`) to `colooon`; do not create a new item.
- Package zip needed: build a complete release zip for upload to the existing
  Chrome Web Store item.
- Version bump needed before release upload.
- Category suggestion: Productivity.
- Language/locales: English and zh_CN.
- Screenshots needed: Color On, Colored Moments, Capture QA, Back to the Scene /
  TO CHAT, Export MD / PDF / IMAGE.
- Icon check: current manifest icons exist; review exact pixel dimensions before
  final package upload.
- Website URL: TODO deploy `website/`.
- Privacy policy URL: TODO deploy `website/privacy/`.
- Support URL: TODO deploy `website/support/`.
- Support email: [support@colooon.com](mailto:support@colooon.com).
- Version: Use the manifest version.
- No analytics in this release.
- No custom telemetry in this release.
- Known limits: local storage, no account sync, no cross-device cloud archive,
  PDF through browser print window.

### Chrome Web Store Assets — Existing Item Update

#### Existing Item Update Plan

- Current item: `COLON for ChatGPT`
- Target name: `colooon`
- Existing extension ID: `khenfhbjoefjfkhpjefmnjlkdonehfok`
- Release action: update the existing Chrome Web Store item; do not create a new
  item.
- Upload a complete new release zip to the existing item.
- Keep current users on the existing extension ID, install base, store history,
  and update path.

#### Screenshot Specs

- Recommended screenshot size: `1280 x 800`.
- Acceptable smaller size: `640 x 400`.
- Use a `16:10` ratio.
- Use PNG unless there is a clear reason to use JPEG.
- Use real product UI.
- Avoid too much text.
- Do not include private or real user conversation content.
- Use staged/sample conversations only.
- Prefer full-bleed product screenshots with minimal overlay text.

#### Five-Screenshot Plan

1. Color On
   - Product surface: ChatGPT page with colooon floating actions.
   - User action shown: selecting AI conversation text and showing Color On /
     Note actions.
   - Overlay caption: `Color On the parts you want to keep.`
   - Language: English primary; bilingual optional only if it stays quiet.
   - Staging notes: use a short sample ChatGPT conversation written for the
     screenshot; avoid real prompts, account names, private URLs, and personal
     content.

2. Colored Moments
   - Product surface: Colored Moments panel with saved items.
   - User action shown: reviewing saved highlights, notes, and QA moments.
   - Overlay caption: `Review saved sparks in Colored Moments.`
   - Language: English primary; bilingual optional.
   - Staging notes: populate several sample moments with neutral invented text;
     keep names, collections, and tags generic.

3. Capture QA
   - Product surface: ChatGPT or Colored Moments showing a saved question +
     answer moment, or the Capture QA action.
   - User action shown: saving a question and answer together.
   - Overlay caption: `Capture QA as one saved moment.`
   - Language: English primary; bilingual optional.
   - Staging notes: use a concise staged Q/A pair; avoid screenshots of actual
     user conversations.

4. Back to the Scene / TO CHAT
   - Product surface: saved item controls with BACK / Back to the Scene and TO
     CHAT visible.
   - User action shown: returning to the original conversation or sending a
     saved moment back into ChatGPT.
   - Overlay caption: `Back to the Scene, or send it TO CHAT.`
   - Language: English primary; bilingual optional.
   - Staging notes: use a sample conversation where the source location is easy
     to see; avoid exposing real browser history or private tab titles.

5. Export
   - Product surface: export surface with MD / PDF / IMAGE / QAN IMAGE.
   - User action shown: choosing an export format.
   - Overlay caption: `Export MD, PDF, or IMAGE.`
   - Language: English primary; bilingual optional.
   - Staging notes: show local export controls only; do not show private file
     paths, downloaded personal files, or real saved content.

#### Visual Direction

- Black / white.
- Paper-like.
- Quiet.
- Light atmospheric.
- Archive-like.
- Not SaaS dashboard.
- Not productivity-suite style.
- Avoid busy marketing graphics.
- Avoid too much text.
- Use real product UI as much as possible.

#### Icon / Image Asset Audit

- Manifest icon references are valid files:
  - `16`: `icon16.png`
  - `32`: `icon32.png`
  - `48`: `icon48.png`
  - `128`: `icon128.png`
- Existing icon files detected:
  - `icon16.png` — PNG, `16 x 16`
  - `icon32.png` — PNG, `32 x 32`
  - `icon48.png` — PNG, `48 x 48`
  - `icon128.png` — PNG, `128 x 128`
  - `colon-icon-128-gap-v4.png` — PNG, `128 x 128`
  - `colon-icon-preview-512-gap-v4.png` — PNG, `512 x 512`
- Visual icon audit: the 512 preview is a black square with a white colon mark;
  no visible `COLON` text appears in the icon.
- Naming audit: source filenames still use `colon-icon-*`; this is not visible
  to users, but final packaging should verify whether the public asset names or
  uploaded store art should be renamed/normalized to `colooon`.
- Size audit: manifest-referenced icon files have been regenerated as exact-size
  PNGs for their manifest slots.
- New colooon icon needed: not strictly required for text branding because the
  icon does not show `COLON`; current exact-size manifest icons can be used for
  the extension package.
- Store 512 icon: `colon-icon-preview-512-gap-v4.png` exists as a `512 x 512`
  black/white colon mark and can be used as a store/source asset. Consider
  renaming a copied upload asset to `colooon-icon-512.png` outside the extension
  package for store housekeeping.
- Small promotional image: no dedicated small promotional image file found.
- Marquee/promotional image: no dedicated marquee or promotional image file
  found.
- Files to upload/use for Chrome Web Store:
  - Extension package zip built from release files only.
  - Exact-size extension icons from the manifest.
  - Five new screenshots at `1280 x 800` PNG.
  - Optional promotional images only if created specifically for store upload;
    do not include them in the extension package unless required by runtime.

#### Package Exclusion Notes

- `snapshots/` must not be included in the final package.
- `website/` provides the static public site, privacy page, and support page;
  it should not be included in the extension zip unless explicitly required.
- Screenshots and source design files should not be included in the extension
  zip unless required by the extension.
- `studio-agent-report.md` should not be included in the release package.
- Website files should not be included in the extension zip unless explicitly
  required.

## B. Store / Permission Copy

### Store Listing Basics

Extension name:

`colooon`

Public version label:

Use the manifest version. Do not use `Alpha 1`, `Beta`, or `Experimental` as
public store-listing copy.

Suggested screenshot set:

1. Color On inside ChatGPT.
2. Colored Moments.
3. Capture QA.
4. Back to the Scene / TO CHAT.
5. Export MD / PDF / IMAGE.

### Permission Wording

Current manifest permissions:

- `storage`
- `tabs`
- `contextMenus`
- `unlimitedStorage`
- `scripting`

Current host permissions:

- `https://chatgpt.com/*`
- `https://chat.openai.com/*`

Permission wording, EN:

- `storage`: Stores your saved highlights, notes, QA captures, collections, and
  tags locally in the extension.
- `unlimitedStorage`: Allows larger local collections of saved moments without
  the small default extension storage limit.
- `tabs`: Finds and returns to the relevant ChatGPT tab for BACK / Back to the
  Scene and TO CHAT flows.
- `contextMenus`: Adds the right-click Capture QA action.
- `scripting`: Allows colooon to add Color On, Capture QA, BACK, and TO CHAT
  controls on supported ChatGPT pages.
- Host permissions for ChatGPT domains: Allows colooon to run only on ChatGPT
  pages where you save, return to, or export selected conversation content.

Permission wording, zh_CN:

- `storage`：在插件本地保存你的高亮、笔记、QA 收整、收藏夹和标签。
- `unlimitedStorage`：允许在本地保存更多 moments，不受默认插件存储上限影响。
- `tabs`：用于找到并回到相关 ChatGPT 标签页，支持 BACK / 回到现场 和 TO CHAT
  链路。
- `contextMenus`：提供右键 Capture QA / 收整问 QA 动作。
- `scripting`：允许 colooon 在支持的 ChatGPT 页面添加 Color On、收整问 QA、
  BACK 和 TO CHAT 控件。
- ChatGPT 域名权限：只允许 colooon 在 ChatGPT 页面运行，用于保存、回到或导出选中的
  对话内容。

### Privacy Summary

Privacy summary, EN:

`colooon stores saved highlights, notes, QA, collections, tags, source anchors,
and export preferences locally in your browser. This release does not include
account sync or a cross-device cloud archive. Saved conversation text, notes,
questions, answers, collections, tags, and exported content are not sent to a
colooon server. Exports are generated locally by user action. colooon does not
claim that content is never sent anywhere: users may manually submit text back
into ChatGPT or manually export/share files.`

Privacy summary, zh_CN:

`colooon 会把保存的上色内容、笔记、QA、收藏夹、标签、来源锚点和导出偏好保存在
浏览器本地。这个版本不包含账号同步，也不提供跨设备云端归档。已保存的对话正文、
笔记、问题、回答、收藏夹、标签和导出内容不会发送到 colooon 服务器。导出由用户主动
触发，并在本地生成。colooon 不会宣称内容“永远不会发送到任何地方”：用户仍然可以
手动把文本送回 ChatGPT，或手动导出 / 分享文件。`

## C. Internal Release Notes

### Alpha 1 Public / Hidden Boundary

Public Alpha 1 surfaces:

- Color On
- Capture QA
- Colored Moments
- Collections
- Tags
- Home
- Workshop
- Read
- BACK
- TO CHAT
- EXPORT / image export
- Q / A / N / QA filters

Do not expose as Alpha 1 product entrances:

- QAN Editor
- QAN Library
- Studio
- Studio Projects
- Field
- Mini Spring
- Canvas
- Studio Source
- Collection Landscape / Panorama / advanced landscape views
- QAN IMAGE as an independent product entrance

Boundary notes:

- Q / A / N / QA filters remain visible. They are filters, not a QAN product
  entrance.
- The landing draft can keep the idea of image export, but should say
  `Export Image` / `image export` for Alpha 1 rather than presenting `QAN Image`
  as a main product area.
- QAN IMAGE export surface may appear as part of image export, but QAN IMAGE
  should not be presented as an independent Alpha 1 product entrance.
- Use `Capture QA`, not `Capture Q&A`, for the Alpha 1 product action.

### Landing Draft Alignment Notes

Useful lines from the current landing draft:

- `Color on what you don't want to lose.`
- `Color on the parts of AI conversations you don't want to lose.`
- `Read what you colored.`
- `Turn moments into images.`
- `Back to the Scene`
- `TO CHAT`
- `Q / A / N / QA`

Lines / labels to revise before adapting the landing draft:

- Use layered positioning:
  - Hero: `Colooon it.` + `Color on what you don't want to lose.`
  - Chrome Web Store short: `Color on the parts of AI conversations you don't
    want to lose.`
  - zh_CN primary: `给 AI 对话里不想丢的内容上色。`
- Change `Capture Q&A` to `Capture QA`.
- Avoid presenting `QAN Image` as a first-class Alpha 1 surface. Use
  `Export Image` or `image export`.
- QAN IMAGE 的导出表面可以作为图片导出流程出现，但不要把 QAN IMAGE 当作
  Alpha 1 的独立产品入口展示。
- Avoid navigation or sections that imply QAN Library, QAN Editor, Studio,
  Field, Canvas, Panorama, or Mini Spring are available in Alpha 1.
- Keep the landing page focused on the loop:
  Color On -> Colored Moments -> Read -> BACK / TO CHAT -> Export Image.

Avoid screenshots that show hidden Alpha 1 worlds:

- Studio / Studio Projects
- QAN Library / QAN Editor
- Field / Mini Spring
- Canvas / Panorama / Landscape

### Removed / Not Requested Permissions

- `activeTab` was removed during permission minimization.
- `commands` is not present in the manifest.
- `debugger` and `downloads` are not requested in the manifest.
- Mini Spring commands and permission copy should not appear in Alpha 1
  materials.

### Data Handling Audit Notes

- User-saved text is stored locally.
- Notes, QA captures, collections, and tags are local extension data.
- Alpha 1 is designed to store saved content locally and does not send saved
  conversation text, notes, questions, answers, collections, or tags to a
  colooon server.
- colooon stores saved highlights, notes, captured questions and answers,
  collections, tags, source anchors, and export preferences locally in your
  browser. Alpha 1 does not provide account sync or a cross-device cloud archive.
  Saved conversation text, notes, questions, answers, collections, tags, and
  exported content are not sent to a colooon server. Exports are generated
  locally by user action as Markdown, PDF through the browser print window, or
  images rendered in the browser. Permissions are used to save and organize
  selected ChatGPT conversation content, return to the original source location,
  and export selected content.
- Do not overclaim "never sent anywhere": users may manually submit text back
  into ChatGPT or manually export/share files.
- If analytics are added later, they must be metadata-only and must not include
  conversation text, note text, question text, answer text, collection names, or
  tag names.

### Analytics Decision

Internal release note only. Do not include the detailed event list in the
landing page or Chrome Web Store main description.

Current Alpha 1 audit:

- No active analytics upload path was found.
- No `fetch`, `sendBeacon`, or telemetry endpoint is used for saved content.

Allowed future event names, metadata-only:

- `highlight_created`
- `qa_capture_created`
- `read_opened`
- `jump_to_source`
- `to_chat_clicked`
- `to_chat_success`
- `to_chat_failed`
- `export_image_clicked`
- `rehydrate_success`
- `rehydrate_failed`

Analytics rule:

`Only event metadata is allowed. Never include conversation text, note text,
question text, answer text, collection names, tag names, source URLs with private
content, or exported content.`
