# Contributing

Contributions are always welcome. Before contributing please read the [JS Foundation's
code of conduct](https://js.foundation/community/code-of-conduct) &
[search the issue tracker](https://github.com/HospitalRun/components/issues); your issue
may have already been discussed or fixed in `master`. To contribute,
[fork](https://help.github.com/articles/fork-a-repo/) HospitalRun components, commit your changes,
& [send a Pull Request](https://help.github.com/articles/using-pull-requests/).

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

The [Conventional Commits](https://www.conventionalcommits.org) specification is a lightweight convention on top of commit messages. It provides an easy set of rules for creating an explicit commit history; which makes it easier to write automated tools on top of. This convention dovetails with SemVer, by describing the features, fixes, and breaking changes made in commit messages.

The commit message should be structured as follows:
`<type>[optional scope]: <description>`

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
