# HospitalRun Components

<div align="center">

[![NPM Version](https://badgen.net/npm/v/@hospitalrun-org/components)](https://www.npmjs.com/package/@hospitalrun-org/components) [![Build Status](https://travis-ci.com/HospitalRun/components.svg?branch=master)](https://travis-ci.com/HospitalRun/components) [![NPM Downloads](https://badgen.net/npm/dt/@hospitalrun-org/components)](https://www.npmjs.com/package/@hospitalrun-org/components)
[![Build Status](https://dev.azure.com/HospitalRun/components/_apis/build/status/HospitalRun.components?branchName=master)](https://dev.azure.com/HospitalRun/components/_build/latest?definitionId=1&branchName=master)
[![Last commit](https://badgen.net/github/last-commit/hospitalrun/components)](https://github.com/HospitalRun/components/commits/master) 
[![dependabot](https://badgen.net/dependabot/dependabot/dependabot-core/?icon=dependabot)](https://github.com/HospitalRun/components) [![Bundlephobia](https://badgen.net/bundlephobia/@hospitalrun-org/components)](https://bundlephobia.com/result?p=@hospitalrun-org/components) [![Join the community on Spectrum](https://withspectrum.github.io/badge/badge.svg)](https://spectrum.chat/hospitalrun) [![MIT](https://badgen.net/github/license/HospitalRun/components)](https://github.com/HospitalRun/components/blob/master/LICENSE)

</div>

This repository will host reusable react components made for the HospitalRun frontend.

## Important note: the following documentation is still in draft.

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

# Examples

## Spinner

Spinner it's a customizable spinner component. It's a wrapper component built upon react-spinners.

Example:

```
import React from "react";
import { Spinner } from "components";
import "components/scss/main.scss";

class App extends React.Component {
  render() {
    return (
      <Spinner
        type="ScaleLoader"
        loading={true}
        color={"orange"}
        size={[5, 25]}
        sizeUnit={["px", "px"]}
      />
    );
  }
}

export default App;

```

**MANDATORY PARAMETERS**

`type: string`  
Choose the spinner type. You can choose from:


* BarLoader 
* BeatLoader 
* BounceLoader 
* ClimbingBoxLoader 
* ClipLoader 
* DotLoader 
* FadeLoader 
* PulseLoader 
* RotateLoader 
* ScaleLoader 
* SyncLoader 


`loading: boolean`  
This prop tells Spinner when to show itself. It should be linked to something dynamic, like a property in the parent component's state.


**OPTIONAL PARAMETERS**

`color: string`  
Choose the spinner color.


`margin: string`  
Adds a margin to the Spinner component.


`size: number | [number, number]`  
Declares the size of the spinner. If you choose to declare it, in the following spinners it must be an array of two numbers (for width & height):

* BarLoader 
* FadeLoader 
* ScaleLoader 


`sizeUnit: "px" | "%" | "em" | ["px" | "%" | "em", "px" | "%" | "em"]`  
Declares the unit of measure for the previous size parameter. If you choose to declare it, in the following spinners it must be an array of two strings (respectively for width & height):

* BarLoader 
* FadeLoader 
* ScaleLoader 

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

|[<img src="https://avatars1.githubusercontent.com/u/25009192?s=460&v=4" width="100px;"/><br /><sub><b>Riccardo Gulin</b></sub>](https://github.com/bazuzu666)  | [<img src="https://avatars0.githubusercontent.com/u/6388707?s=460&v=4" width="100px;"/><br /><sub><b>Matteo Vivona</b></sub>](https://github.com/tehKapa)  |  [<img src="https://avatars3.githubusercontent.com/u/25089405?s=460&v=4" width="100px;"/><br /><sub><b>Stefano Casasola</b></sub>](https://github.com/irvelervel) | [<img src="https://avatars1.githubusercontent.com/u/26657904?s=460&v=4" width="100px;"/><br /><sub><b>Stefano Miceli</b></sub>](https://github.com/StefanoMiC) |
|---|---|---|---|


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
