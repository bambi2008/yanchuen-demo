# Yan Chuen redesign presentation

## Deliverable

- `deliverables/YanChuen_官網重構成果演示_20261007.html` is the responsive email-attachment edition.
- `deliverables/YanChuen_官網重構成果演示_會議室16比9版_20261007.html` is the landscape meeting-room edition for 16:9 displays at 1280×720 or above. Its autoplay pace is slower (15 seconds per scene).

Both are single, self-contained HTML files: images, CSS and JavaScript are embedded and they do not load external resources.

The current edition contains 22 scenes. After the cover, eight animated full-interface tours show the homepage, product overview, silicone product detail, engineering guide, company/factory content, trade shows, contact page, RFQ, AI support and the sample operations dashboard before the strategy analysis begins.

The presentation contains the presenter contact details supplied for this version: `maoqin1979@gmail.com`, phone `+852 5418 7719`, and WhatsApp on the same number. No agency or studio name is shown.

## Rebuild

Edit `presentation/yanchuen-redesign-story.source.html`, then run:

```bash
node scripts/build-presentation.mjs
```

The build script inlines the five selected files from `public/assets/` and overwrites the deliverable.

## Controls

- `←` / `→`: previous or next scene
- `Space`: pause or resume autoplay
- `M` or the music-note button: mute or resume the built-in ambient soundtrack
- `Home` / `End`: first or final scene
- `F`: fullscreen
- Swipe left or right on a touch screen

The soundtrack is a real MP3 track embedded directly in each standalone HTML file, so no external audio file or network request is used. Browser autoplay policies may keep audio silent until the first click, key press or fullscreen action.

## Content boundary

The presentation distinguishes implemented Demo work, production-launch tasks and results that still require live measurement. It does not claim achieved rankings, AI citations, traffic growth, enquiries or revenue.
