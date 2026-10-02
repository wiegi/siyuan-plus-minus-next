# Release process

1. Update `CHANGELOG.md` and the version in `package.json` and `plugin.json`.
2. Run `npm ci`, `npm test`, `npm run typecheck` and `npm run build`.
3. Commit and push the release changes.
4. Create and push a matching tag, for example `git tag v0.1.0 && git push origin v0.1.0`.
5. The **Release** workflow builds `package.zip` and attaches it to a GitHub release.
6. First release only: add `wiegi/siyuan-plus-minus-next` to `plugins.txt` in a
   fork of `siyuan-note/bazaar` and open a pull request. Later releases are
   picked up by the bazaar automatically.

The workflow rejects tags that do not match the version in `plugin.json` and
`package.json`.
