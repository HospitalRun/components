# components

[![NPM Version](https://badgen.net/npm/v/@hospitalrun-org/components)](https://www.npmjs.com/package/@hospitalrun-org/components) [![Build Status](https://travis-ci.com/HospitalRun/components.svg?branch=master)](https://travis-ci.com/HospitalRun/components)
 [![Bundlephobia](https://badgen.net/bundlephobia/@hospitalrun-org/components)](https://bundlephobia.com/result?p=@hospitalrun-org/components) [![NPM Downloads](https://badgen.net/npm/dt/@hospitalrun-org/components)](https://www.npmjs.com/package/@hospitalrun-org/components)
[![Build Status](https://dev.azure.com/HospitalRun/components/_apis/build/status/HospitalRun.components?branchName=master)](https://dev.azure.com/HospitalRun/components/_build/latest?definitionId=1&branchName=master) [![MIT](https://badgen.net/github/license/HospitalRun/components)](https://github.com/HospitalRun/components/blob/master/LICENSE)
[![Dependents](https://badgen.net/npm/dependents/@hospitalrun-org/components)](https://www.npmjs.com/package/@hospitalrun-org/components)
[![Last commit](https://badgen.net/github/last-commit/hospitalrun/components)](https://github.com/HospitalRun/components/commits/master) [![dependabot](https://badgen.net/dependabot/dependabot/dependabot-core/?icon=dependabot)](https://github.com/HospitalRun/components)

This repository will host reusable react components made for the HospitalRun frontend.

---

## Install

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

## Docs

### Spinner

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
