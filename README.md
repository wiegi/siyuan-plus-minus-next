# Plus Minus Next for SiYuan

A simple three-column reflection board for SiYuan, based on the
**Plus / Minus / Next** method:

- **Plus** — What worked well and should be repeated?
- **Minus** — What caused friction or did not work?
- **Next** — What will you change, try, or prioritise next?

The plugin presents these prompts from left to right while keeping every entry
as a normal SiYuan block. Sibling of
[logseq-plus-minus-next](https://github.com/wiegi/logseq-plus-minus-next).

## Usage

1. In an empty block, type `/pmn` (or `/plus minus next`).
2. Choose **Plus Minus Next: Insert reflection board**.
3. Add your reflections as bullets in Plus, Minus, and Next.

Hover over the small note icon beside a heading to see its reflection prompt.

## Features

- Three dedicated Plus, Minus and Next columns
- Columns grow automatically with their content
- The board is made of ordinary SiYuan blocks (a column super block with three
  rows, headings and lists), so it stays readable and editable — and keeps its
  layout — if the plugin is disabled or removed
- Drag the dividers to resize the columns, as with any SiYuan column layout
- Works in the desktop app and in the browser version
- No network requests

## Installation

The plugin is not in the SiYuan marketplace yet. To install it manually:

1. `npm install && npm run build`
2. `npm run deploy:local` copies `dist/` to `~/SiYuan/data/plugins/siyuan-plus-minus-next/`.
   For another workspace use `npm run deploy:local -- <workspace path>` or set
   `SIYUAN_WORKSPACE`. The folder must be a real copy, not a link.
3. Reload SiYuan (`Ctrl+R`) and enable the plugin under
   `Settings → Marketplace → Downloaded → Plugins`.

## Project

See [CHANGELOG.md](CHANGELOG.md) for release notes and
[CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidance.

## Support

If you like this plugin, you can support me here:

<a href="https://www.buymeacoffee.com/wiegi"> <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" width="217" height="60"> </a>
