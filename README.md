# HospitalRun Components

<div align="center">

[![NPM Version](https://badgen.net/npm/v/@hospitalrun/components)](https://www.npmjs.com/package/@hospitalrun/components) [![Build Status](https://travis-ci.com/HospitalRun/components.svg?branch=master)](https://travis-ci.com/HospitalRun/components)
[![Build Status](https://dev.azure.com/HospitalRun/components/_apis/build/status/HospitalRun.components?branchName=master)](https://dev.azure.com/HospitalRun/components/_build?definitionId=1) [![GitHub CI](https://github.com/HospitalRun/components/workflows/GitHub%20CI/badge.svg)](https://github.com/HospitalRun/components/actions) [![Coverage Status](https://coveralls.io/repos/github/HospitalRun/components/badge.svg?branch=master)](https://coveralls.io/github/HospitalRun/components?branch=master)
[![Bundlephobia](https://badgen.net/bundlephobia/min/@hospitalrun/components)](https://bundlephobia.com/result?p=@hospitalrun/components) [![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FHospitalRun%2Fcomponents.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FHospitalRun%2Fcomponents?ref=badge_shield)
![dependabot](https://api.dependabot.com/badges/status?host=github&repo=HospitalRun/components) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) [![Slack](https://hospitalrun-slackin.herokuapp.com/badge.svg)](https://hospitalrun-slackin.herokuapp.com) [![Join the community on Spectrum](https://withspectrum.github.io/badge/badge.svg)](https://spectrum.chat/hospitalrun) [![Netlify Status](https://api.netlify.com/api/v1/badges/70c843de-c1b2-4e7d-abb5-61939f21f8cb/deploy-status)](https://app.netlify.com/sites/hospitalrun/deploys)

</div>

This repository will host reusable react components made for the HospitalRun frontend.

---

# Install

Install components:

```
yarn add @hospitalrun/components
```

Install react-bootstrap:

```
yarn add react-bootstrap
```

[Optional] You may need `node-sass` if you want to import components' `.scss` files:

```
yarn add -D node-sass
```

# Contributing

Contributions are always welcome. Before contributing please read our [contributor guide](https://github.com/HospitalRun/components/blob/master/.github/CONTRIBUTING.md).

1. Fork this repository to your own GitHub account and then clone it to your local device
2. Navigate to the cloned folder: `cd components`
3. Install the dependencies: `yarn`
4. Run `yarn dev` to build and watch for code changes
5. In another window, run storybook `yarn storybook`. Story book should open in a your default browser at localhost:6006.
6. You will be able to test components with storybook and enjoy live reloading!

## Working on an Issue
In order to optimize the workflow and to prevent multiple contributors working on the same issue without interactions, a contributor must ask to be assigned to an issue by one of the core team members: it's enough to ask it inside the specific issue.

## How to commit

This repo uses [Conventional Commits](https://www.conventionalcommits.org/). [Commitizen](https://github.com/commitizen/cz-cli) is recommended for development. Once you have changes staged
you can run `git cz` from the root directory in order to commit to the proper standards.

Alternatively, if you are using NPM 5.2+ you can use [npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) instead of installing globally:
`npx git-cz`

<hr />

# Behind HospitalRun

## Hosted by

[<img src="https://github.com/openjs-foundation/cross-project-council/blob/master/logos/openjsf-color.png?raw=true" width="120px;"/>](https://openjsf.org/projects/#atlarge)

## Sponsors

[![Sponsors](https://opencollective.com/hospitalrun/sponsors.svg?width=890)](https://opencollective.com/hospitalrun/contribute/sponsors-336/checkout)

### Big Thanks

Cross-browser Testing Platform and Open Source <3 Provided by [Sauce Labs][homepage]

[homepage]: https://saucelabs.com

## Backers

[![Backers](https://opencollective.com/hospitalrun/backers.svg?width=890)](https://opencollective.com/hospitalrun/contribute/backers-335/checkout)

## Lead Maintainer

[<img src="https://avatars2.githubusercontent.com/u/1620916?s=460&v=4" width="100px;"/><br /><sub><b>Maksim Sinik</b></sub>](https://github.com/fox1t)<br />

## Core Team

<!-- prettier-ignore -->
| [<img src="https://avatars3.githubusercontent.com/u/25089405?s=460&v=4" width="100px;"/><br /><sub><b>Stefano Casasola</b></sub>](https://github.com/irvelervel) |[<img src="https://avatars2.githubusercontent.com/u/8914893?s=460&v=4" width="100px;"/><br /><sub><b>Michael Daly</b></sub>](https://github.com/MichaelDalyDev)|[<img src="https://avatars1.githubusercontent.com/u/25009192?s=460&v=4" width="100px;"/><br /><sub><b>Riccardo Gulin</b></sub>](https://github.com/bazuzu666) | [<img src="https://avatars3.githubusercontent.com/u/603924?s=460&v=4" width="100px;"/><br /><sub><b>Grace Lau</b></sub>](https://github.com/lauggh) | [<img src="https://avatars3.githubusercontent.com/u/18731800?s=460&v=4" width="100px;"/><br /><sub><b>Jack Meyer</b></sub>](https://github.com/jackcmeyer) | [<img src="https://avatars0.githubusercontent.com/u/6388707?s=460&v=4" width="100px;"/><br /><sub><b>Matteo Vivona</b></sub>](https://github.com/tehKapa) |
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
