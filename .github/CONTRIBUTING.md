# Contributing

Contributions are always welcome. Before contributing please read the [JS Foundation's
code of conduct](https://js.foundation/community/code-of-conduct) &
[search the issue tracker](https://github.com/HospitalRun/components/issues); your issue
may have already been discussed or fixed in `master`. To contribute,
[fork](https://help.github.com/articles/fork-a-repo/) HospitalRun components, commit your changes,
& [send a Pull Request](https://help.github.com/articles/using-pull-requests/).

Please note we have a [code of conduct](https://github.com/HospitalRun/components/blob/master/.github/CODE_OF_CONDUCT.md), please follow it in all your interactions with the project.

## Contributing to components

1. Fork this repository to your own GitHub account and then clone it to your local device
2. Navigate to the cloned folder: `cd components`
3. Install the dependencies: `npm install`
4. Run `npm link` to link the local repo to the global npm folder
5. Run `npm run dev` to build and watch for code changes
6. In another terminal window create a [new react project](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app) with `npx create-react-app my-app`‌
7. Navigate (`cd my-app`) to your react project and install [node-sass](https://www.npmjs.com/package/node-sass): `npm install -D node-sass`. Components styles are coded using scss and you need this dependency in order to successfully import components' `.scss` files
8. Link the components repo inside your newly created react project with `npm link components`
9. Start your react project with `npm start` and enjoy hot reloading when applying changes in the components repo

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
