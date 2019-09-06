# HospitalRun Components

<div align="center">

[![Build Status](https://travis-ci.com/HospitalRun/components.svg?branch=master)](https://travis-ci.com/HospitalRun/components)
[![Build Status](https://dev.azure.com/HospitalRun/components/_apis/build/status/HospitalRun.components?branchName=master)](https://dev.azure.com/HospitalRun/components/_build/latest?definitionId=1&branchName=master)
[![Bundlephobia](https://badgen.net/bundlephobia/min/@hospitalrun-org/components)](https://bundlephobia.com/result?p=@hospitalrun-org/components)
[![dependabot](https://badgen.net/dependabot/dependabot/dependabot-core/?icon=dependabot)](https://github.com/HospitalRun/components) [![MIT](https://badgen.net/github/license/HospitalRun/components)](https://github.com/HospitalRun/components/blob/master/LICENSE) [![Join the community on Spectrum](https://withspectrum.github.io/badge/badge.svg)](https://spectrum.chat/hospitalrun) [![Netlify Status](https://api.netlify.com/api/v1/badges/70c843de-c1b2-4e7d-abb5-61939f21f8cb/deploy-status)](https://app.netlify.com/sites/hospitalrun/deploys) [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

</div>

This repository will host reusable react components made for the HospitalRun frontend.

### Big Thanks

Cross-browser Testing Platform and Open Source <3 Provided by [Sauce Labs][homepage]

[homepage]: https://saucelabs.com

---

# Install

Install components:

```
npm install @hospitalrun-org/components
```

Install react-bootstrap:

```
npm install react-bootstrap
```

[Optional] You may need `node-sass` if you want to import components' `.scss` files:

```
npm install -D node-sass
```

# Contributing

Contributions are always welcome. Before contributing please read our [contributor guide](https://github.com/HospitalRun/components/blob/WIP-updates-readme/.github/CONTRIBUTING.md).

1. Fork this repository to your own GitHub account and then clone it to your local device
2. Navigate to the cloned folder: `cd components`
3. Install the dependencies: `npm install`
4. Run `npm link` to link the local repo to the global npm folder
5. Run `npm run dev` to build and watch for code changes
6. In another terminal window create a [new react project](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app) with `npx create-react-app my-app`‌
7. Navigate (`cd my-app`) to your react project and install [node-sass](https://www.npmjs.com/package/node-sass): `npm install -D node-sass`. Components styles are coded using scss and you need this dependency in order to successfully import components' `.scss` files
8. Link the components repo inside your newly created react project with `npm link components`
9. Start your react project with `npm start` and enjoy hot reloading when applying changes in the components repo

## How to commit

The [Conventional Commits](https://www.conventionalcommits.org) specification is a lightweight convention on top of commit messages. It provides an easy set of rules for creating an explicit commit history; which makes it easier to write automated tools on top of. This convention dovetails with SemVer, by describing the features, fixes, and breaking changes made in commit messages.

The commit message should be structured as follows `<type>[optional scope]: <description>`

```
feat: allow provided config object to extend other configs

fix: correct minor typos in code

BREAKING CHANGE: dropping Node 6 which hits end of life in April

docs: correct spelling of CHANGELOG
```

Common types can be:

- build: Changes that affect the build system or external dependencies (example scopes: fastify, react, npm)
- ci: Changes to our CI configuration files and scripts (example scopes: Travis, Azure DevOps, SauceLabs)
- docs: Documentation only changes
- feat: A new feature
- fix: A bug fix
- perf: A code change that improves performance
- refactor: A code change that neither fixes a bug nor adds a feature
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- test: Adding missing tests or correcting existing tests

## How to release a new version

We use [standard-version](https://github.com/conventional-changelog/conventional-changelog) to automate versioning and CHANGELOG generation, with semver and conventional commit messages.

`standard-version` does the following:

1. bumps the version in metadata files (package.json, composer.json, etc).
2. uses [conventional-changelog](https://github.com/conventional-changelog/conventional-changelog) to update _CHANGELOG.md_
3. commits _package.json (et al.)_ and _CHANGELOG.md_
4. tags a new release

To generate your changelog for a new release, simply do:

```sh
# npm run script
npm run release
```

As long as your git commit messages are conventional and accurate, you no longer need to specify the semver type - and you get CHANGELOG generation for free!

After you cut a release, you can push the new git tag and `npm publish` (or `npm publish --tag next`) when you're ready.

#### Release as a pre-release

Use the flag `--prerelease` to generate pre-releases:

Suppose the last version of your code is `1.0.0`, and your code to be committed has patched changes. Run:

```bash
# npm run script
npm run release -- --prerelease
```

you will get version `1.0.1-0`.

If you want to name the pre-release, you specify the name via `--prerelease <name>`.

For example, suppose your pre-release should contain the `alpha` prefix:

```bash
# npm run script
npm run release -- --prerelease alpha
```

this will tag the version `1.0.1-alpha.0`

#### Release as a target type imperatively like `npm version`

To forgo the automated version bump use `--release-as` with the argument `major`, `minor` or `patch`:

Suppose the last version of your code is `1.0.0`, you've only landed `fix:` commits, but
you would like your next release to be a `minor`. Simply do:

```bash
# npm run script
npm run release -- --release-as minor
# Or
npm run release -- --release-as 1.1.0
```

you will get version `1.1.0` rather than the auto generated version `1.0.1`.

> **NOTE:** you can combine `--release-as` and `--prerelease` to generate a release. This is useful when publishing experimental feature(s).

<hr />

# Behind HospitalRun

## Hosted by

[<img src="https://github.com/openjs-foundation/cross-project-council/blob/master/logos/openjsf-color.png?raw=true" width="120px;"/>](https://openjsf.org/projects/#atlarge)

## Sponsors

[![Sponsors](https://opencollective.com/hospitalrun/sponsors.svg?width=890)](https://opencollective.com/hospitalrun/contribute/sponsors-336/checkout)

## Backers

[![Backers](https://opencollective.com/hospitalrun/backers.svg?width=890)](https://opencollective.com/hospitalrun/contribute/backers-335/checkout)

## Lead Maintainer

[<img src="https://avatars2.githubusercontent.com/u/1620916?s=460&v=4" width="100px;"/><br /><sub><b>Maksim Sinik</b></sub>](https://github.com/fox1t)<br />

## Core Team

<!-- prettier-ignore -->
|[<img src="https://avatars1.githubusercontent.com/u/11684?s=460&v=4" width="100px;"/><br /><sub><b>Travis Boudreaux</b></sub>](https://github.com/tjboudreaux) | [<img src="https://avatars3.githubusercontent.com/u/25089405?s=460&v=4" width="100px;"/><br /><sub><b>Stefano Casasola</b></sub>](https://github.com/irvelervel) | [<img src="https://avatars3.githubusercontent.com/u/3400442?s=460&v=4" width="100px;"/><br /><sub><b>Michael J Feher</b></sub>](https://github.com/PhearZero) | [<img src="https://avatars1.githubusercontent.com/u/25009192?s=460&v=4" width="100px;"/><br /><sub><b>Riccardo Gulin</b></sub>](https://github.com/bazuzu666) | [<img src="https://avatars3.githubusercontent.com/u/18731800?s=460&v=4" width="100px;"/><br /><sub><b>Jack Meyer</b></sub>](https://github.com/jackcmeyer) | [<img src="https://avatars0.githubusercontent.com/u/6388707?s=460&v=4" width="100px;"/><br /><sub><b>Matteo Vivona</b></sub>](https://github.com/tehKapa) |
|---|---|---|---|---|---|

## Medical Supervisor

[<img src="https://avatars2.githubusercontent.com/u/24660474?s=460&v=4" width="100px;"/><br /><sub><b>M.D. Daniele Piccolo</b></sub>](https://it.linkedin.com/in/danielepiccolo)<br />

## Contributors

[![Contributors](https://opencollective.com/hospitalrun/contributors.svg?width=960&button=false)](https://github.com/HospitalRun/hospitalrun-frontend/graphs/contributors)

## Founders

<!-- prettier-ignore -->
| [<img src="https://avatars0.githubusercontent.com/u/609052?s=460&v=4" width="100px;"/><br /><sub><b>John Kleinschmidtr</b></sub>](https://github.com/jkleinsc) | [<img src="https://avatars0.githubusercontent.com/u/929261?s=400&v=4" width="100px;"/><br /><sub><b>Joel Worrall</b></sub>](https://github.com/tangollama)  | [<img src="https://avatars0.githubusercontent.com/u/1319791?s=460&v=4" width="100px;"/><br /><sub><b>Joel Glovier</b></sub>](https://github.com/jglovier)  |
|---|---|---|

# License

Released under the [MIT license](LICENSE).
