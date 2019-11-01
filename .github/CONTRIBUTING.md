# Contributing

HospitalRun is a community project. We invite your participation through
financial contributions, issues, and pull requests!

Contributions are always welcome. Before contributing please read the [JS Foundation's
code of conduct](https://js.foundation/community/code-of-conduct) and
[search the issue tracker](https://github.com/HospitalRun/components/issues); your issue
may have already been discussed or fixed in `master`. If you're new to the project,
maybe you'd like to open a pull request to address one of [good-first-issue](https://github.com/HospitalRun/components/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22).

To contribute,
[fork](https://help.github.com/articles/fork-a-repo/) HospitalRun components, commit your changes, and [send a Pull Request](https://help.github.com/articles/using-pull-requests/).

Please note we have a [code of conduct](https://github.com/HospitalRun/components/blob/master/.github/CODE_OF_CONDUCT.md), please follow it in all your interactions with the project.

# Contributing to components

1. Fork this repository to your own GitHub account and then clone it to your local device
2. Navigate to the cloned folder: `cd components`
3. Install the dependencies: `npm install`
4. Run `npm run dev` to build and watch for code changes
5. In another window, run storybook `npm run storybook`. Story book should open in a your default browser at localhost:6006.
6. You will be able to test components with storybook and enjoy live reloading!

## How to create a new component

1. Create a new folder under `src/components` with the name of your component (i.e. Spinner, Graphs)
2. Create an `index.tsx` file. This file will be responsible for exporting all of the components.
3. Create a interfaces.ts file. This will define and export all non-props interfaces needed for the component.
4. Create a file named `ComponentName.tsx` where `ComponentName` is the name of the component being created (i.e. `Spinner.tsx`). This file will be responsible for declaring the component logic and creating the Props interface. The Props interface should be named `Props`. All props should have a comment associated with them describing what they are used for. The component class should be documented with a description of what it is.
5. Create a `strings.ts` file (if needed). This file should declare and export all string constants.
6. Create a new file in `src/test` called `componentname.test.tsx` where `componentname` is the name of the component. The tests should cover all use cases of the component.
7. Create a new file called `componentname.stories.tsx` where `componentname` is the name of the component. The stories should cover all use cases of the component.
8. Generate documentation for the component by running `npm run docgen`.

## How to commit

This repo uses [Conventional Commits](https://www.conventionalcommits.org/). [Commitizen](https://github.com/commitizen/cz-cli) is recommended for development. Once you have changes staged
you can run `git cz` from the root directory in order to commit to the proper standards.

Alternatively, if you are using NPM 5.2+ you can use [npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) instead of installing globally:
`npx git-cz`

## Feature Requests

Feature requests should be submitted in the
[issue tracker](https://github.com/HospitalRun/components/issues), with a description of
the expected behavior & use case, where they’ll remain closed until sufficient interest,
[e.g. :+1: reactions](https://help.github.com/articles/about-discussions-in-issues-and-pull-requests/),
has been [shown by the community](https://github.com/HospitalRun/components/issues?q=label%3A%22votes+needed%22+sort%3Areactions-%2B1-desc).
Before submitting a request, please search for similar ones in the
[closed issues](https://github.com/HospitalRun/components/issues?q=is%3Aissue+is%3Aclosed+label%3Aenhancement).

## Contributor License Agreement

HospitalRun is a member of the [Open JS Foundation](https://openjsf.org/).
As such, we request that all contributors sign our
[contributor license agreement (CLA)](https://js.foundation/CLA/).

For more information about CLAs, please check out Alex Russell’s excellent post,
[“Why Do I Need to Sign This?”](https://infrequently.org/2008/06/why-do-i-need-to-sign-this/).
