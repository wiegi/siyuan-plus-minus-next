# Contributing

Issues and pull requests are welcome.

## Development

Requirements:

- Node.js 20 or newer
- npm
- SiYuan (desktop app or a self-hosted instance)

```sh
npm ci
npm test
npm run typecheck
npm run build
npm run deploy:local
```

`npm run dev` rebuilds `dist/` on every change; run `npm run deploy:local` and
reload SiYuan (`Ctrl+R`) to try it.

Please keep the plugin local-first, avoid network access, and preserve the
native-block data model.
