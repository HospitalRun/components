# HospitalRun Components

<div align="center">

[![NPM Version](https://badgen.net/npm/v/@hospitalrun/components)](https://www.npmjs.com/package/@hospitalrun/components) [![GitHub CI](https://github.com/HospitalRun/components/workflows/GitHub%20CI/badge.svg)](https://github.com/HospitalRun/components/actions) [![Coverage Status](https://coveralls.io/repos/github/HospitalRun/components/badge.svg?branch=master)](https://coveralls.io/github/HospitalRun/components?branch=master) [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/HospitalRun/components.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/HospitalRun/components/context:javascript)
[![Bundlephobia](https://badgen.net/bundlephobia/min/@hospitalrun/components)](https://bundlephobia.com/result?p=@hospitalrun/components) ![Code scanning](https://github.com/HospitalRun/components/workflows/Code%20scanning/badge.svg?branch=master) [![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FHospitalRun%2Fcomponents.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FHospitalRun%2Fcomponents?ref=badge_shield)
![dependabot](https://api.dependabot.com/badges/status?host=github&repo=HospitalRun/components) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) [![Netlify Status](https://api.netlify.com/api/v1/badges/70c843de-c1b2-4e7d-abb5-61939f21f8cb/deploy-status)](https://app.netlify.com/sites/hospitalrun-components/deploys) [![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/HospitalRun/components) [![Slack](https://hospitalrun-slackin.herokuapp.com/badge.svg)](https://hospitalrun-slackin.herokuapp.com) 

</div>

This repository will host reusable react components made for the HospitalRun frontend. It's a place for designers and developers alike to collaborate quickly. This library makes up the text inputs, labels, etc of HospitalRun Frontend.

---

# Install

Install components:

```
npm install @hospitalrun/components
```

Install react-bootstrap:

```
npm install react-bootstrap
```

[Optional] You may need `node-sass` if you want to import components' `.scss` files:

```
npm install node-sass --save-dev
```

# Contributing

Contributions are always welcome. Before contributing please read our [contributor guide](https://github.com/HospitalRun/components/blob/master/.github/CONTRIBUTING.md).

1. Fork this repository to your own GitHub account and then clone it to your local device
2. Navigate to the cloned folder: `cd components`
3. Install the dependencies: `npm install`
4. Run `npm run dev` to build and watch for code changes
5. In another window, run storybook `npm run storybook`. Story book should open in a your default browser at http://localhost:6006.
6. You will be able to test components with storybook and enjoy live reloading!

## Online one-click setup for contributing

Contribute to HospitalRun using a fully featured online development environment that will automatically: clone the repo, install the dependencies and start the webserver.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/HospitalRun/components)

## Working on an Issue

In order to optimize the workflow and to prevent multiple contributors working on the same issue without interactions, a contributor must ask to be assigned to an issue by one of the core team members: it's enough to ask it inside the specific issue.

## How to commit

This repo uses [Conventional Commits](https://www.conventionalcommits.org/). [Commitizen](https://github.com/commitizen/cz-cli) is recommended for development. Once you have changes staged
you can run `git cz` from the root directory in order to commit to the proper standards.

Alternatively, if you are using NPM 5.2+ you can use [npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) instead of installing globally:
`npx git-cz`

# License

Released under the [MIT license](LICENSE).
