# [3.1.0](https://github.com/HospitalRun/components/compare/v3.0.4...v3.1.0) (2020-12-18)


### Features

* **textfield:** add id prop to text field ([dd0ce21](https://github.com/HospitalRun/components/commit/dd0ce21cc06f2f6605ab98c412c94add76439e87))

## [3.0.4](https://github.com/HospitalRun/components/compare/v3.0.3...v3.0.4) (2020-11-08)


### Bug Fixes

* **alert:** fix typo ([c1ff13a](https://github.com/HospitalRun/components/commit/c1ff13a0ad399a777f11c171101847b1d556e142))
* **breadcrumb:** rename the props ([f5692e6](https://github.com/HospitalRun/components/commit/f5692e6c2a1f294f9e666e37babb8af566f6d89f))
* **calendar:** fix the callendar story ([9a3973f](https://github.com/HospitalRun/components/commit/9a3973f5744e030ed17bcd27db681928ae644db6))
* **callout:** fix sb docs page ([5983028](https://github.com/HospitalRun/components/commit/598302854c4c6af284245dae3d12ab29a1f7d2e3))
* **callout:** remove comment and fix typo ([b5f80ad](https://github.com/HospitalRun/components/commit/b5f80ad7ccd9aa77f36dd1b5b6522a9853032e5c))

## [3.0.3](https://github.com/HospitalRun/components/compare/v3.0.2...v3.0.3) (2020-10-24)


### Bug Fixes

* **table:** fix table types ([e6727ab](https://github.com/HospitalRun/components/commit/e6727abf35ca3f23b72fba28c2bbd490a6fae57b))

## [3.0.2](https://github.com/HospitalRun/components/compare/v3.0.1...v3.0.2) (2020-10-18)


### Bug Fixes

* **navbar:** nav bar icon broken ([4369e15](https://github.com/HospitalRun/components/commit/4369e15d99432755b045f17e2d0cbb811ae0780c))

## [3.0.1](https://github.com/HospitalRun/components/compare/v3.0.0...v3.0.1) (2020-09-23)


### Bug Fixes

* **modal:** improve modal components ([#597](https://github.com/HospitalRun/components/issues/597)) ([ce2736a](https://github.com/HospitalRun/components/commit/ce2736ad275ad11c70ab47f1a0dd94955391f136))

# [3.0.0](https://github.com/HospitalRun/components/compare/v2.0.1...v3.0.0) (2020-09-15)


### Bug Fixes

* **component:** ship components package with header injected styles ([afee9ff](https://github.com/HospitalRun/components/commit/afee9ffae8adb39efa89ec3040061150300d2e90)), closes [#254](https://github.com/HospitalRun/components/issues/254) [#569](https://github.com/HospitalRun/components/issues/569) [#254](https://github.com/HospitalRun/components/issues/254) [#569](https://github.com/HospitalRun/components/issues/569)


### BREAKING CHANGES

* **component:** we skip shipping & referencing of main.scss files. Now that there's no need for a
.scss references in the front-end, the main.scss reference in the front-end must be removed.

## [2.0.1](https://github.com/HospitalRun/components/compare/v2.0.0...v2.0.1) (2020-09-08)


### Bug Fixes

* import scss files from components into main.scss ([edd8824](https://github.com/HospitalRun/components/commit/edd8824746fd9ac8b56dddf05842759d440750e3))

# [2.0.0](https://github.com/HospitalRun/components/compare/v1.16.1...v2.0.0) (2020-09-07)


### Features

* 🎸 Adds addon-docs ([1bbf623](https://github.com/HospitalRun/components/commit/1bbf623597d74cfb80598d476be81b3418e47836))


### BREAKING CHANGES

* 🧨 addon-info is replaced by addon-docs.

✅ Closes: 531

## [1.16.1](https://github.com/HospitalRun/components/compare/v1.16.0...v1.16.1) (2020-08-02)


### Bug Fixes

* **select.tsx:** change default behavior - single not displaying all options after a selection made ([896d674](https://github.com/HospitalRun/components/commit/896d67481b3cc4e5abfc63f4ec6e02f21d992274)), closes [#517](https://github.com/HospitalRun/components/issues/517)


### Reverts

* **storybook:** remove wrong files ([c47eb80](https://github.com/HospitalRun/components/commit/c47eb80a005601d2d3283308f44dda89502c2668))

# [1.16.0](https://github.com/HospitalRun/components/compare/v1.15.0...v1.16.0) (2020-07-17)


### Features

* **callout:** add a callout component ([#519](https://github.com/HospitalRun/components/issues/519)) ([e0410a8](https://github.com/HospitalRun/components/commit/e0410a8e5256a9d96914e8984367a07f271432ec))

# [1.15.0](https://github.com/HospitalRun/components/compare/v1.14.3...v1.15.0) (2020-07-08)


### Features

* **select:** select component use generics ([#492](https://github.com/HospitalRun/components/issues/492)) ([221118a](https://github.com/HospitalRun/components/commit/221118a94752bb3db01fe1e3780a8ac20d44c586))

## [1.14.3](https://github.com/HospitalRun/components/compare/v1.14.2...v1.14.3) (2020-07-08)


### Bug Fixes

* removes prop that didn't exist ([#500](https://github.com/HospitalRun/components/issues/500)) ([c7f39e5](https://github.com/HospitalRun/components/commit/c7f39e518823be01a6ed8c34e3f2ac377923c4ab))

## [1.14.2](https://github.com/HospitalRun/components/compare/v1.14.1...v1.14.2) (2020-06-24)


### Bug Fixes

* **babel-jest:** install the same version of tsdx ([ffd5a59](https://github.com/HospitalRun/components/commit/ffd5a59d054e8c7240219b39e562b79c5dd4eccf))


### Reverts

* **deps:** revert update of babel-jest from v26 to v24 ([c1a25b7](https://github.com/HospitalRun/components/commit/c1a25b768245431b9e6f5e5c9716b8fe6beff656))

## [1.14.1](https://github.com/HospitalRun/components/compare/v1.14.0...v1.14.1) (2020-06-23)


### Bug Fixes

* **select:** fix type of onchange ([bce1bac](https://github.com/HospitalRun/components/commit/bce1bacd52dd3a99f669a15ce44f022683c726b9))

# [1.14.0](https://github.com/HospitalRun/components/compare/v1.13.0...v1.14.0) (2020-06-22)


### Features

* **components/navbar:** amends to PR [#463](https://github.com/HospitalRun/components/issues/463) ([db1a9dc](https://github.com/HospitalRun/components/commit/db1a9dcaafa5257e86f441d17531ae9fc0dad0df)), closes [#456](https://github.com/HospitalRun/components/issues/456)
* **icons:** make bars icon available to components ([2021ec0](https://github.com/HospitalRun/components/commit/2021ec0fa1a43da0059fd7e000da16f169dd0a93)), closes [#456](https://github.com/HospitalRun/components/issues/456)
* **navbar.stories.tsx:** add hamburger menu icon to mobile navbar story ([75465d4](https://github.com/HospitalRun/components/commit/75465d407f830a763385a98e52fa2c2146aca565)), closes [#456](https://github.com/HospitalRun/components/issues/456)
* **navbar.test.tsx:** add tests for navLinkList dividers and icons ([7bae6c4](https://github.com/HospitalRun/components/commit/7bae6c485fad4c806f3fc03c4dcea564cce78f5f)), closes [#456](https://github.com/HospitalRun/components/issues/456)
* **navbar.tsx:** add divider between dropdown list link groups ([d8275ce](https://github.com/HospitalRun/components/commit/d8275ced4edab54839c5638cbf7f35094ce6e278))
* **navbar.tsx:** added icons to NavLinkList items ([270cc71](https://github.com/HospitalRun/components/commit/270cc71c1fb7e8cadb790f5585457b34486ceb6e)), closes [#456](https://github.com/HospitalRun/components/issues/456)
* **navbar.tsx:** amend getNavLinkList className ([86e8676](https://github.com/HospitalRun/components/commit/86e8676bfa67097865c11ceb96974eca30ab0586)), closes [#456](https://github.com/HospitalRun/components/issues/456)
* **navbar.tsx:** minor syntax change ([77fb968](https://github.com/HospitalRun/components/commit/77fb968b498148e9ef4920caa088c5d5dfd366f1)), closes [#456](https://github.com/HospitalRun/components/issues/456)
* **tsconfig.json:** undo of redundant addition of skipLibCheck ([075fe98](https://github.com/HospitalRun/components/commit/075fe9858828550638421bd6fe890716827537cb)), closes [#456](https://github.com/HospitalRun/components/issues/456)

# [1.13.0](https://github.com/HospitalRun/components/compare/v1.12.2...v1.13.0) (2020-06-18)


### Features

* **table:** update table ([#455](https://github.com/HospitalRun/components/issues/455)) ([7ff5648](https://github.com/HospitalRun/components/commit/7ff56485ed7a67af9e7c1808c49a28cc0e02a21e))

## [1.12.2](https://github.com/HospitalRun/components/compare/v1.12.1...v1.12.2) (2020-06-16)


### Bug Fixes

* **storybook:** fix storybook build adding "skipLibCheck": true ([683c2b8](https://github.com/HospitalRun/components/commit/683c2b82fea6ce0b14c299a502eaac324e8515e7))

## [1.12.1](https://github.com/HospitalRun/components/compare/v1.12.0...v1.12.1) (2020-06-16)


### Bug Fixes

* fix broken deps and updates scripts ([c8c0eba](https://github.com/HospitalRun/components/commit/c8c0eba7b02792ae37a8c43b09575fc4b52ed8f5))

# [1.12.0](https://github.com/HospitalRun/components/compare/v1.11.0...v1.12.0) (2020-06-05)


### Features

* **datetimepicker, dropdown:** support all languages ([8e42796](https://github.com/HospitalRun/components/commit/8e42796fce9978d7c32374e927279b333aa8515d)), closes [#438](https://github.com/HospitalRun/components/issues/438)
* **datetimepicker.tsx and dropdown.tsx:** multiple languages, onClick ([ab390db](https://github.com/HospitalRun/components/commit/ab390dbcef6873594c0435fd1b3bf422bc5a52df)), closes [#324](https://github.com/HospitalRun/components/issues/324)

# [1.11.0](https://github.com/HospitalRun/components/compare/v1.10.0...v1.11.0) (2020-06-03)


### Features

* **Typography:** Introduction of the Typography component ([#451](https://github.com/HospitalRun/components/issues/451)) ([a124bc2](https://github.com/HospitalRun/components/commit/a124bc2ab36ac8f3596d3961c0f8e7d3f7708fed))

# [1.10.0](https://github.com/HospitalRun/components/compare/v1.9.0...v1.10.0) (2020-06-03)


### Features

* **calendar:** add callbacks to navigation buttons ([093cc94](https://github.com/HospitalRun/components/commit/093cc94795e23402d0cb122863c593fe1b017718))

# [1.9.0](https://github.com/HospitalRun/components/compare/v1.8.1...v1.9.0) (2020-05-31)


### Features

* **modal:** styling through props ([7f2cf11](https://github.com/HospitalRun/components/commit/7f2cf11fac2fb11aa0ee62878dd0949e18c19ce8))


### Reverts

* **modal:** reverted for master branch ([b4da3e3](https://github.com/HospitalRun/components/commit/b4da3e35da22207aa276950a74e5daecc6642c6a))

## [1.8.1](https://github.com/HospitalRun/components/compare/v1.8.0...v1.8.1) (2020-05-29)


### Bug Fixes

* **datetimepicker:** errors with styling ([#447](https://github.com/HospitalRun/components/issues/447)) ([266acc9](https://github.com/HospitalRun/components/commit/266acc920b2cffffc0ff9c0c43ea9cf9244cd5cd))

# [1.8.0](https://github.com/HospitalRun/components/compare/v1.7.0...v1.8.0) (2020-05-29)


### Features

* **modal:** styling with props ([6d499c8](https://github.com/HospitalRun/components/commit/6d499c82e74217ab62985caf7f2ad1a8ffc39e23))

# [1.7.0](https://github.com/HospitalRun/components/compare/v1.6.0...v1.7.0) (2020-05-27)


### Features

* **select:** Filterable select component ([#434](https://github.com/HospitalRun/components/issues/434)) ([064674c](https://github.com/HospitalRun/components/commit/064674cea088a901689b83a5f6626949fa8b2688))

# [1.6.0](https://github.com/HospitalRun/components/compare/v1.5.0...v1.6.0) (2020-05-18)


### Features

* **icon:** add outline prop to Icon component ([e461188](https://github.com/HospitalRun/components/commit/e461188c185002005b0712f04a3b6c179a936551))
* **navbar:** icon can be added as navbar item with its name, size, etc ([d83321c](https://github.com/HospitalRun/components/commit/d83321c584487a05c73314017a8a360af5cdb113))
* **navbar:** nav item of icon type can be inserted with Icon component ([316909f](https://github.com/HospitalRun/components/commit/316909f9d387c9fa540bd5d3b6c67d0eea491c50))

# [1.5.0](https://github.com/HospitalRun/components/compare/v1.4.0...v1.5.0) (2020-05-05)


### Features

* **navbar:** implement autocomplete support for Navbar search ([#392](https://github.com/HospitalRun/components/issues/392)) ([cccb599](https://github.com/HospitalRun/components/commit/cccb599dfef5567cf938d5ad1c7056af9def1d7e))

# [1.4.0](https://github.com/HospitalRun/components/compare/v1.3.0...v1.4.0) (2020-05-01)


### Bug Fixes

* **ci:** fix automatic release job ([#388](https://github.com/HospitalRun/components/issues/388)) ([ff0b284](https://github.com/HospitalRun/components/commit/ff0b28425f8f35b54eb986f5661bf60793bde82a))
* **ci:** fix release workflow ([a5ff997](https://github.com/HospitalRun/components/commit/a5ff997a73117bae2e483df2f79319da731e6eb1))


### Features

* **typeahead:** Added feedback prop to Typeahead ([#381](https://github.com/HospitalRun/components/issues/381)) ([812aca2](https://github.com/HospitalRun/components/commit/812aca25d08f3880e25a5fae1e6b00ed3b2c71b2))

# [1.3.0](https://github.com/HospitalRun/components/compare/v1.2.0...v1.3.0) (2020-04-08)


### Features

* **component:** icon based navbar dropdown ([#345](https://github.com/HospitalRun/components/issues/345)) ([8f07823](https://github.com/HospitalRun/components/commit/8f078231db9a4a7b760669a10eb5f778d2e31012)), closes [/github.com/HospitalRun/hospitalrun-frontend/issues/1948#issue-589477927](https://github.com//github.com/HospitalRun/hospitalrun-frontend/issues/1948/issues/issue-589477927)

# [1.2.0](https://github.com/HospitalRun/components/compare/v1.1.0...v1.2.0) (2020-03-28)


### Features

* **checkbox:** add checked prop ([#344](https://github.com/HospitalRun/components/issues/344)) ([bb90297](https://github.com/HospitalRun/components/commit/bb9029769ed88c01a112b1eb755ed73c7447fc74))

# [1.1.0](https://github.com/HospitalRun/components/compare/v1.0.0...v1.1.0) (2020-03-27)


### Features

* **typeahead:** added isinvalid prop to typeahead ([#341](https://github.com/HospitalRun/components/issues/341)) ([b0639de](https://github.com/HospitalRun/components/commit/b0639de14613372559850cbb14e8a058936c606a))

# [1.0.0](https://github.com/HospitalRun/components/compare/v0.36.0...v1.0.0) (2020-03-18)


### Bug Fixes

* **coveralls:** fix typo ([9180d2f](https://github.com/HospitalRun/components/commit/9180d2f6c3b8f41327cd6e1a52c22e1dca97336d))
* **input:** add missing className and style properties ([3713d16](https://github.com/HospitalRun/components/commit/3713d160a0dda14308438d4b15106739b8027513)), closes [#271](https://github.com/HospitalRun/components/issues/271)
* **input:** add style to text input property and fix test ([595b709](https://github.com/HospitalRun/components/commit/595b70963641f6952baa376fd1f08077d5d06136)), closes [#271](https://github.com/HospitalRun/components/issues/271)
* **input:** add validation styling to text input and field ([ee3cd14](https://github.com/HospitalRun/components/commit/ee3cd1413bcaf0099252cc4d4bd21a002bc6858b)), closes [#271](https://github.com/HospitalRun/components/issues/271)
* **input:** fix validation tests ([67bab76](https://github.com/HospitalRun/components/commit/67bab761c5e325b7a8a87d112ab3cf6d3549d45a)), closes [#271](https://github.com/HospitalRun/components/issues/271)
* **input:** replace selected with defaultValue in select ([c9656cd](https://github.com/HospitalRun/components/commit/c9656cdc2d7b20dffcd8e79a8cba3411ce751d27)), closes [#271](https://github.com/HospitalRun/components/issues/271)
* **input:** resolve requested and other necessary changes and refactor ([c0ec7ab](https://github.com/HospitalRun/components/commit/c0ec7abf2bd8607639a5998bd3ec6942fc7ec21c)), closes [#271](https://github.com/HospitalRun/components/issues/271)
* **inputs:** apply requested changes ([45bcf23](https://github.com/HospitalRun/components/commit/45bcf2347a92237f4c9c7ae1d5c01b1e503ff7a5)), closes [#271](https://github.com/HospitalRun/components/issues/271)
* **table:** fixes table tests ([beba7f1](https://github.com/HospitalRun/components/commit/beba7f1149db43ca2ca11bdce7fdcd9f0110cfab))
* **types:** add ColorVariant light and info colors ([6664de4](https://github.com/HospitalRun/components/commit/6664de4a9d7f8f38ec0dc6a34c36ce491d5920ba)), closes [#66](https://github.com/HospitalRun/components/issues/66)
* insert missing property to TextInput ([fcbadca](https://github.com/HospitalRun/components/commit/fcbadca34bbf780e335608bfe956980f666689e1)), closes [#66](https://github.com/HospitalRun/components/issues/66)


### Features

* **actions:** improves github action cicd and removes travis ([44cf335](https://github.com/HospitalRun/components/commit/44cf3357f09f020c28e16edea0c8095e021bf4f1))
* **docs:** removes unnecessary docs ([98110ce](https://github.com/HospitalRun/components/commit/98110cecbbc705b5f0635d4e601f1a9aa224018c))
* **input:** add input validation styles and tests, update react-bs ([262d87e](https://github.com/HospitalRun/components/commit/262d87e77e684834d1e6304c3b23fdbe607967af)), closes [#271](https://github.com/HospitalRun/components/issues/271)
* **input:** add validation styling to select ([a791422](https://github.com/HospitalRun/components/commit/a791422baeb1c560025a1b1d743ee87c31da8b17)), closes [#271](https://github.com/HospitalRun/components/issues/271)
* **inputs:** add datetimepicker input validation and create docs ([515db71](https://github.com/HospitalRun/components/commit/515db719499d39f8a392f365a9c1550eb72ee582)), closes [#271](https://github.com/HospitalRun/components/issues/271)
* **inputs:** form validation progress ([d24435e](https://github.com/HospitalRun/components/commit/d24435e251212d7ef28191fec070ef1e6dfd3fce)), closes [#66](https://github.com/HospitalRun/components/issues/66)
* **textinput:** add errorMessage property ([3648fba](https://github.com/HospitalRun/components/commit/3648fba1f2724435dffdfe65a7f9504446ed4199)), closes [#66](https://github.com/HospitalRun/components/issues/66)
* **textinput:** add valid input message, fix typos and others ([4c90b45](https://github.com/HospitalRun/components/commit/4c90b456cb28b330e319a0ee3f4c3b1541d06dbc)), closes [#66](https://github.com/HospitalRun/components/issues/66)


### BREAKING CHANGES

* **input:** update react bootstrap

# [0.36.0](https://github.com/HospitalRun/components/compare/v0.35.1...v0.36.0) (2020-03-08)


### Features

* add first table implementation ([2914cbb](https://github.com/HospitalRun/components/commit/2914cbb016bcf3740cf31df604a828bc799ec34c))
* add further implementations ([ba84e56](https://github.com/HospitalRun/components/commit/ba84e5688a4bb395c78a020531a73601cdbe29d1))
* adds basic table test ([4f34038](https://github.com/HospitalRun/components/commit/4f34038a887087df6ea4de20a1c06868c38e476d))
* adds even more tests ([d28314b](https://github.com/HospitalRun/components/commit/d28314b7806d22e2492ab176a0fd26f8e8f1e611))
* adds filtering, sorting and several columns types ([b99883b](https://github.com/HospitalRun/components/commit/b99883b9dc52d1c3a04fc63a415dfa05d3184944))
* adds more testing ([dada45c](https://github.com/HospitalRun/components/commit/dada45c796808f7f613c2c7841c10ae7572b18c0))
* adds pagination ([aebda85](https://github.com/HospitalRun/components/commit/aebda85fd6dbc5000b6649396d1256f95546bf64))
* code cleaning ([c2565c4](https://github.com/HospitalRun/components/commit/c2565c4c31c6813e35f88c855144b7f59e295d6e))
* improve tables ([b89c94a](https://github.com/HospitalRun/components/commit/b89c94aa29a09d93b5220752f4d022b6b3d0310a))

## [0.35.1](https://github.com/HospitalRun/components/compare/v0.35.0...v0.35.1) (2020-03-06)


### Bug Fixes

* **eslintrc:** removes createDefaultProgram ([3b2e1a0](https://github.com/HospitalRun/components/commit/3b2e1a03abaca256fab2e597775fb447222f3acd))

# [0.35.0](https://github.com/HospitalRun/components/compare/v0.34.1...v0.35.0) (2020-03-06)


### Features

* update vscode settings ([ae83acb](https://github.com/HospitalRun/components/commit/ae83acb1b3ad0b5aa8cb259864c57d7709fbe972))

## [0.34.1](https://github.com/HospitalRun/components/compare/v0.34.0...v0.34.1) (2020-03-01)


### Bug Fixes

* **spinner:** quick import fix ([676fe36](https://github.com/HospitalRun/components/commit/676fe367213a46dffe8d07c64d7b98022206a69b))

# [0.34.0](https://github.com/HospitalRun/components/compare/v0.33.3...v0.34.0) (2020-02-25)


### Bug Fixes

* **toast:** position prop logic ([e4e46b2](https://github.com/HospitalRun/components/commit/e4e46b233248e8c1b028bb5a3342d610dba9f08c))
* **toast:** remove unnecessary lines ([9941714](https://github.com/HospitalRun/components/commit/99417144c7504d0a7fe586c5cc0e8e4873d37d71))
* **toast:** story props order and story name ([7f019a0](https://github.com/HospitalRun/components/commit/7f019a09427527bea6f700bbc56a4df1727c6480))


### Features

* **toast:** add prop to control position ([20c3417](https://github.com/HospitalRun/components/commit/20c3417de1e257abd9c8bd36302e04d846fc16d0))
* **toaster:** add new toast props to stories ([7cf30d8](https://github.com/HospitalRun/components/commit/7cf30d869f7e5f4a66f94ea7602b7360cd0530a5))

## [0.33.3](https://github.com/HospitalRun/components/compare/v0.33.2...v0.33.3) (2020-02-21)


### Bug Fixes

* **typeahead:** add disabled prop to Typeahead ([cf590b6](https://github.com/HospitalRun/components/commit/cf590b63c5079bc18821eeabad3a93ff243b15b2)), closes [#287](https://github.com/HospitalRun/components/issues/287)

## [0.33.2](https://github.com/HospitalRun/components/compare/v0.33.1...v0.33.2) (2020-02-15)


### Bug Fixes

* **prettier:** changes endofline parameter ([b6e2d0a](https://github.com/HospitalRun/components/commit/b6e2d0a5d54fc19e2eadadaf614bbb996b767bc6))

## [0.33.1](https://github.com/HospitalRun/components/compare/v0.33.0...v0.33.1) (2020-02-13)


### Bug Fixes

* **fullcalendar:** downgrade FullCalendar to fix frontend test failures ([a690edd](https://github.com/HospitalRun/components/commit/a690edd3b223de29a4c750da54b0762273a78e31))

# [0.33.0](https://github.com/HospitalRun/components/compare/v0.32.5...v0.33.0) (2020-02-12)


### Features

* **icons:** add Edit icon with pencil ([13a32ec](https://github.com/HospitalRun/components/commit/13a32ecd7ee3f34eee8ce2b94bc4e21646035d2a))

## [0.32.5](https://github.com/HospitalRun/components/compare/v0.32.4...v0.32.5) (2020-02-08)


### Bug Fixes

* fix precommit hooks ([ddaeca9](https://github.com/HospitalRun/components/commit/ddaeca93b9327230be3a432bfd5f2b288ff0b01a))

## [0.32.4](https://github.com/HospitalRun/components/compare/v0.32.3...v0.32.4) (2020-02-03)


### Bug Fixes

* **i18n:** register locales to remove extraneous logs ([095bd72](https://github.com/HospitalRun/components/commit/095bd72b99f099bf15c27e2c4df416a0593fffc2)), closes [#251](https://github.com/HospitalRun/components/issues/251)
* **testing:** remove datetimepicker extraneous logs ([80a5f5b](https://github.com/HospitalRun/components/commit/80a5f5b6e5c7bff0be8f1258797dd73018e070d2)), closes [#146](https://github.com/HospitalRun/components/issues/146)

## [0.32.3](https://github.com/HospitalRun/components/compare/v0.32.2...v0.32.3) (2020-02-03)


### Bug Fixes

* **typeahead:** add ability to set default value ([ed9cad6](https://github.com/HospitalRun/components/commit/ed9cad65a783c6e9e240607a1bb243fdbd1657e9))

## [0.32.2](https://github.com/HospitalRun/components/compare/v0.32.1...v0.32.2) (2020-02-02)


### Bug Fixes

* **textfield:** fixes prop issue in textfield ([81ee377](https://github.com/HospitalRun/components/commit/81ee377616a360c73ed997ed4c2a30ceceac6173))
* **textinput:** fixes prop issue in textinput ([1aef1d5](https://github.com/HospitalRun/components/commit/1aef1d5669c42a8c501468c711e37d3071a82f1e))

## [0.32.1](https://github.com/HospitalRun/components/compare/v0.32.0...v0.32.1) (2020-01-31)


### Bug Fixes

* **calendar:** remove extraneous log ([1f1037a](https://github.com/HospitalRun/components/commit/1f1037a583361faa67f6fdf49d5223891921a583)), closes [#252](https://github.com/HospitalRun/components/issues/252)

# [0.32.0](https://github.com/HospitalRun/components/compare/v0.31.0...v0.32.0) (2020-01-30)


### Bug Fixes

* **navbar:** fix tests, refactor brand component to icon and header, ([91ce73e](https://github.com/HospitalRun/components/commit/91ce73e724294906d9aba2ccc9ef49f05acf45ac)), closes [#228](https://github.com/HospitalRun/components/issues/228)
* **navbar:** remove className boilerplates ([1042a66](https://github.com/HospitalRun/components/commit/1042a662ad5694f26a6a01d7a1735da3480bee52)), closes [#228](https://github.com/HospitalRun/components/issues/228)
* **navbar:** remove test story ([c569ce6](https://github.com/HospitalRun/components/commit/c569ce669983fc062deebd79509c84d4944d0811)), closes [#228](https://github.com/HospitalRun/components/issues/228)
* **navbar:** repeated key warning in navbar items ([a52cff7](https://github.com/HospitalRun/components/commit/a52cff7a112de53d7b9ffe62b83c1e9b4499f5d0)), closes [#228](https://github.com/HospitalRun/components/issues/228)
* **navbar:** suggest new default and dark theme color, improve examples ([8ebbcf0](https://github.com/HospitalRun/components/commit/8ebbcf08b0ca1660b7e9ff13d1690c236f00569f)), closes [#228](https://github.com/HospitalRun/components/issues/228)


### Features

* **navbar:** add example with icons and support className prop ([4784520](https://github.com/HospitalRun/components/commit/4784520cd8c696fd86a15132d0d299e94833a97a)), closes [#228](https://github.com/HospitalRun/components/issues/228)
* **navbar:** refactor navbar tests ([717a9fc](https://github.com/HospitalRun/components/commit/717a9fced986f70a94592d824be0426a6eccb18e)), closes [#225](https://github.com/HospitalRun/components/issues/225)
* **navbar:** support classname for all components and justify example ([45faf19](https://github.com/HospitalRun/components/commit/45faf193b1f87d6697c19fbdbe59e03e58f49e49)), closes [#228](https://github.com/HospitalRun/components/issues/228)
* **navbar:** support navbar items horizontal position w array order ([f80382f](https://github.com/HospitalRun/components/commit/f80382f9f1d7eee61e04dfa01b09aaef38487590)), closes [#225](https://github.com/HospitalRun/components/issues/225)

# [0.31.0](https://github.com/HospitalRun/components/compare/v0.30.4...v0.31.0) (2020-01-29)


### Bug Fixes

* **panel:** add missing test for header onclick panel toggle ([5274a20](https://github.com/HospitalRun/components/commit/5274a205045b013e42da9944f01a88be1f6b6bd9)), closes [#233](https://github.com/HospitalRun/components/issues/233)
* **panel:** fix panel opening on non collapsible panel ([b2ecdf4](https://github.com/HospitalRun/components/commit/b2ecdf44a5f68cba49ade940d9a707232c65d33a)), closes [#233](https://github.com/HospitalRun/components/issues/233)
* **panel:** make panel collapse on header click ([2ab4878](https://github.com/HospitalRun/components/commit/2ab487838ce22b281a39bcf34602ecefc38f8e1c)), closes [#229](https://github.com/HospitalRun/components/issues/229)
* **panel:** remove classname boilerplatee ([f8ea36f](https://github.com/HospitalRun/components/commit/f8ea36f1e22cda015703b0763da2f1804d58b39d)), closes [#233](https://github.com/HospitalRun/components/issues/233)


### Features

* **panel:** add classname to panel prop and modify stories ([7e72639](https://github.com/HospitalRun/components/commit/7e726396582da9c799af0dc500134c3c3fea81a7)), closes [#233](https://github.com/HospitalRun/components/issues/233)

## [0.30.4](https://github.com/HospitalRun/components/compare/v0.30.3...v0.30.4) (2020-01-25)


### Bug Fixes

* **textinput:** add password, search, tel, url input types ([71a344d](https://github.com/HospitalRun/components/commit/71a344d53fb14def375f6e8a507746ee2e61a98a)), closes [#226](https://github.com/HospitalRun/components/issues/226)
* **textinput:** removed the unnecessary union string types from Props ([0084b07](https://github.com/HospitalRun/components/commit/0084b0773bb98412cc49c33bb992e05cf0ba13a2))

## [0.30.3](https://github.com/HospitalRun/components/compare/v0.30.2...v0.30.3) (2020-01-23)


### Bug Fixes

* **typeahead:** add some missing props to typeahead component ([1d1024e](https://github.com/HospitalRun/components/commit/1d1024ea2760a76bf8e6d2fd322bb3f3be3869aa))

## [0.30.2](https://github.com/HospitalRun/components/compare/v0.30.1...v0.30.2) (2020-01-17)


### Bug Fixes

* **calendar:** fix export for calendar ([be8c98b](https://github.com/HospitalRun/components/commit/be8c98bb09364167a984ab3fa157b69d383f2ad4))

## [0.30.1](https://github.com/HospitalRun/components/compare/v0.30.0...v0.30.1) (2020-01-11)


### Bug Fixes

* **scss:** fix imports to external dependencies ([080b73e](https://github.com/HospitalRun/components/commit/080b73e9fbe640af4487ba609ad0037e49e89eef))

# [0.30.0](https://github.com/HospitalRun/components/compare/v0.29.0...v0.30.0) (2020-01-11)


### Features

* **tab:** add Tab and TabsHeader components ([431d08a](https://github.com/HospitalRun/components/commit/431d08a15acf1594779a4867ee79f014ae7395f2)), closes [#24](https://github.com/HospitalRun/components/issues/24)
* **tab:** use project's existing Button component ([24d617f](https://github.com/HospitalRun/components/commit/24d617fa6e04107f79e59308d52755a920ee368f)), closes [#24](https://github.com/HospitalRun/components/issues/24)

# [0.29.0](https://github.com/HospitalRun/components/compare/v0.28.0...v0.29.0) (2020-01-11)


### Features

* **typeahead:** add typeahead component ([0b0f1a8](https://github.com/HospitalRun/components/commit/0b0f1a8603cadf0016dfcb1bf6bc00e70bb77bc2))

# [0.28.0](https://github.com/HospitalRun/components/compare/v0.27.2...v0.28.0) (2020-01-10)


### Features

* **css:** add tsdx config for PostCSS, organize CSS and SASS imports ([add82bf](https://github.com/HospitalRun/components/commit/add82bf51b9dd89e7299783148f2b815951d7a5e))
* **css:** create a Theme to override Bootstrap colors ([4094600](https://github.com/HospitalRun/components/commit/4094600934834fd05b321b80842749cee6ec3bb7)), closes [#35](https://github.com/HospitalRun/components/issues/35)
* **css:** update jest config to mock .scss imports to fix test failures ([5206931](https://github.com/HospitalRun/components/commit/5206931ec744795ce3a07eedd3084b280b4f7a69))

## [0.27.2](https://github.com/HospitalRun/components/compare/v0.27.1...v0.27.2) (2020-01-03)


### Bug Fixes

* **collapsable panel:** adds pointer when cursor is hovered over icon ([67ef9b8](https://github.com/HospitalRun/components/commit/67ef9b8b4c39eb666c247e20830945188c9fc574)), closes [#182](https://github.com/HospitalRun/components/issues/182)

## [0.27.1](https://github.com/HospitalRun/components/compare/v0.27.0...v0.27.1) (2020-01-03)


### Bug Fixes

* **typings:** adds @types/node package set to version 12 of node ([420f1eb](https://github.com/HospitalRun/components/commit/420f1eb30a9cc88dab8b26c810b3a3a4b07b61ed)), closes [#189](https://github.com/HospitalRun/components/issues/189)

# [0.27.0](https://github.com/HospitalRun/components/compare/v0.26.1...v0.27.0) (2020-01-02)


### Features

* **alert:** add className and style props ([76002ec](https://github.com/HospitalRun/components/commit/76002ec1d4eeec26eff52ec75733b75ac7571dd0))
* **breadcrumb:** add className and style props ([d2bdd88](https://github.com/HospitalRun/components/commit/d2bdd881336a29ac34ca7cc4d28c72a838485c89))
* **button:** add className and style props ([c2206da](https://github.com/HospitalRun/components/commit/c2206dac8d2a9e549ddefda26bd35cd06b099701))
* **icon:** add className and style props ([79a8b44](https://github.com/HospitalRun/components/commit/79a8b44648b85bc19e78dbdeaddfb4dbd28ca57f))
* **label:** add className and style props ([5291f0e](https://github.com/HospitalRun/components/commit/5291f0e52b63c7fdce60eb7c1fd094dd5a3f82fc))
* **layout:** add className and style props ([adc8c0f](https://github.com/HospitalRun/components/commit/adc8c0f0735f2cffb7fb18fb82d38d0b6bfd0546))
* **list:** add className and style props ([c46ebcd](https://github.com/HospitalRun/components/commit/c46ebcd980265e5d3452196bafbd081bf2fa3947))
* **pill:** add className and style props ([0f6144a](https://github.com/HospitalRun/components/commit/0f6144a4eacf9fb6c100609b2ecf49f13e1f0abc))
* **radio:** add className and style props ([4c886ad](https://github.com/HospitalRun/components/commit/4c886ad8b92e069ade01cbd253ac4d6187d4fee7))
* **select:** add className and style props ([933878e](https://github.com/HospitalRun/components/commit/933878edac57c88c68aad4f78e949979a41f4e58))
* **switch:** add className and style props ([4687354](https://github.com/HospitalRun/components/commit/46873542f893d0a7a9ca223a446a3f62faae5559))
* **textfield:** add className and style props ([368a656](https://github.com/HospitalRun/components/commit/368a6565841064e44355008499110cd0f72766d2))
* **textinput:** add className and style props ([2c9b4f2](https://github.com/HospitalRun/components/commit/2c9b4f24a8646c4b57fbfe02d743b049303d63a9))

## [0.26.1](https://github.com/HospitalRun/components/compare/v0.26.0...v0.26.1) (2020-01-02)


### Bug Fixes

* **eslint:** ignore eslint import extentsion check ([6d9d390](https://github.com/HospitalRun/components/commit/6d9d390381a49edf848b36d4e9d63e98e9746e51))

# [0.26.0](https://github.com/HospitalRun/components/compare/v0.25.0...v0.26.0) (2020-01-02)


### Bug Fixes

* **dropdown:** fix dropdown bugs ([3290a6a](https://github.com/HospitalRun/components/commit/3290a6a95287a9e92f94b306dc6d89bbac504c7b)), closes [#154](https://github.com/HospitalRun/components/issues/154)
* **dropdown:** fix missing necessary undefined type in id property ([35c04e4](https://github.com/HospitalRun/components/commit/35c04e4dd549f39196b0a7cbade97142e1032ad3)), closes [#154](https://github.com/HospitalRun/components/issues/154)
* **dropdown:** make id optional on dropdown toggle and items ([787beb7](https://github.com/HospitalRun/components/commit/787beb784ab4f3001944a8c7fbb1aaafc95187e7)), closes [#154](https://github.com/HospitalRun/components/issues/154)
* **eslint:** fix eslint rules for newer versions ([ddfb996](https://github.com/HospitalRun/components/commit/ddfb9966fad76ae419391aa4a21850f12427c887))


### Features

* **dropdown:** add dropdown component ([304666f](https://github.com/HospitalRun/components/commit/304666f62191358ff946782e4c74e42a4b59e666)), closes [#58](https://github.com/HospitalRun/components/issues/58)
* **dropdown:** randomly generate id if one is not given ([b5fb940](https://github.com/HospitalRun/components/commit/b5fb940341282c86ada06b976de55b3747eb1d2e))

# [0.25.0](https://github.com/HospitalRun/components/compare/v0.24.1...v0.25.0) (2020-01-02)


### Features

* **panel:** support collapsible panel without header/title ([c04c9d8](https://github.com/HospitalRun/components/commit/c04c9d81c6dc061b5f5e9f5fa8a5314c1667b927))
* **panels:** adds panel component ([d742ebd](https://github.com/HospitalRun/components/commit/d742ebd047f35b3ed60c3a0b5efc86ac0a67007e))

## [0.24.1](https://github.com/HospitalRun/components/compare/v0.24.0...v0.24.1) (2019-12-31)


### Bug Fixes

* **navbar:** make Brand onClick optional ([609559b](https://github.com/HospitalRun/components/commit/609559bb0bed074d25aabfff5b956b266059c732))
* **navbar:** make NavLink onClick optional ([fdd1ee5](https://github.com/HospitalRun/components/commit/fdd1ee57bc3f8f888ef5bf7c7b522ff4ab4456e7))

# [0.24.0](https://github.com/HospitalRun/components/compare/v0.23.0...v0.24.0) (2019-12-30)


### Bug Fixes

* **label:** fix-label-component-comment ([e3f3268](https://github.com/HospitalRun/components/commit/e3f3268f1bcc669804656106802a5cabc0df6e14)), closes [#141](https://github.com/HospitalRun/components/issues/141)
* **label:** remove unrelated commits ([0e251a2](https://github.com/HospitalRun/components/commit/0e251a2c2077ec82bd8193810e4edb85cbf2b5ff)), closes [#141](https://github.com/HospitalRun/components/issues/141)
* fix-label-default-props ([b991f56](https://github.com/HospitalRun/components/commit/b991f56d8311f22e8c6f22f57e9d6faeb73212df)), closes [#141](https://github.com/HospitalRun/components/issues/141)
* fix-label-doc ([cffdf9f](https://github.com/HospitalRun/components/commit/cffdf9f70f90b9ccd21e0ad4854085cda64a6fb4)), closes [#141](https://github.com/HospitalRun/components/issues/141)


### Features

* feat(components): add Label isRequired property and other options ([dc201c3](https://github.com/HospitalRun/components/commit/dc201c3f3921bbdb838f060757511390f28bbde3)), closes [#137](https://github.com/HospitalRun/components/issues/137)

# [0.23.0](https://github.com/HospitalRun/components/compare/v0.22.2...v0.23.0) (2019-12-30)


### Bug Fixes

* **navbar:** fix-missing-required-test-search-properties ([be406a0](https://github.com/HospitalRun/components/commit/be406a08aaf7dcdd26da31315a78ba6d2209a17e)), closes [#148](https://github.com/HospitalRun/components/issues/148)
* **navbar:** fix-navbar-mistakes ([a962b51](https://github.com/HospitalRun/components/commit/a962b511bedb9f1c17bfbc9860e1b1fdaf524f48)), closes [#148](https://github.com/HospitalRun/components/issues/148)
* **navbar:** fix-navbar-mistakes ([e7abf72](https://github.com/HospitalRun/components/commit/e7abf724dffdeae20657cc6eae3e6c835eecabdc)), closes [#148](https://github.com/HospitalRun/components/issues/148)
* **navbar:** fix-tests ([5e3bb16](https://github.com/HospitalRun/components/commit/5e3bb16f3b3a929749723799eaaccc320419e9cd)), closes [#148](https://github.com/HospitalRun/components/issues/148)
* **navbar:** fix-tests-attempt ([0628329](https://github.com/HospitalRun/components/commit/0628329b44a8781419dcd7882a760e696dd1e60f)), closes [#148](https://github.com/HospitalRun/components/issues/148)
* **navbar:** make-onchange-required ([de0ebdd](https://github.com/HospitalRun/components/commit/de0ebddeee7403e2ee47259561a08090fd99e006)), closes [#148](https://github.com/HospitalRun/components/issues/148)
* **navbar:** remove unrelated commits ([7d6a473](https://github.com/HospitalRun/components/commit/7d6a47303a5dab80844637d2361e189c63322480)), closes [#148](https://github.com/HospitalRun/components/issues/148)


### Features

* **calendar:** add ability to choose available views ([0875a5b](https://github.com/HospitalRun/components/commit/0875a5b62eb1ce8094b5c0bdfcf32b94d719366d))
* **calendar:** add calendar component ([820a3a0](https://github.com/HospitalRun/components/commit/820a3a04dfd929999727efc119120b2940ca4519))
* **checkbox:** add className and style props ([689805e](https://github.com/HospitalRun/components/commit/689805e431e1df1fcc581a81d742392d3dab1f4a))
* **navbar:** add customizable search placeholder/button text ([106c530](https://github.com/HospitalRun/components/commit/106c5307643014e3051273528bbf598ebcd9d423))
* **navbar:** add test for default props ([8c238c1](https://github.com/HospitalRun/components/commit/8c238c13931460291005562c8dc0d3f908ff17b8)), closes [#148](https://github.com/HospitalRun/components/issues/148)

## [0.22.2](https://github.com/HospitalRun/components/compare/v0.22.1...v0.22.2) (2019-12-21)


### Bug Fixes

* **datetimepicker:** fix DateTimePicker style ([e477380](https://github.com/HospitalRun/components/commit/e477380c622b47769c2c90d603f1aadc20ce9c6a)), closes [#156](https://github.com/HospitalRun/components/issues/156)
* **datetimepicker:** remove comments ([f02a0ba](https://github.com/HospitalRun/components/commit/f02a0ba4e597b9f22d327708fe87dc8603ce8997)), closes [#159](https://github.com/HospitalRun/components/issues/159)

## [0.22.1](https://github.com/HospitalRun/components/compare/v0.22.0...v0.22.1) (2019-12-20)


### Bug Fixes

* **ci:** updates test script and build matrix ([3e8d005](https://github.com/HospitalRun/components/commit/3e8d005e51fb5f6c1aa0c68a34aa7e639c34f5a9))

# [0.22.0](https://github.com/HospitalRun/components/compare/v0.21.1...v0.22.0) (2019-12-18)


### Features

* **breadcrumb:** add breadcrumb stories ([8f59804](https://github.com/HospitalRun/components/commit/8f5980420ef961a42cb2ce399bb0512e0323415b))
* **breadcrumb:** make tests pass ([a61742f](https://github.com/HospitalRun/components/commit/a61742fdf4a1b36ff8355bf142b3b3d1819ecb52))
* **breadcrumb:** remove href prop ([e95a3fa](https://github.com/HospitalRun/components/commit/e95a3fa68a4ad8c98a7bc7680a1705b232c092f7))
* **breadcrumb:** separate breadcrumb item component ([f6e5be5](https://github.com/HospitalRun/components/commit/f6e5be5d2eb852f3bd3e9bd2064d99045feeaba8))
* **breadcrumb:** simplify with bootstrap defaults ([a849fda](https://github.com/HospitalRun/components/commit/a849fda0b79f17c753802bf36adf010e6160f942))
* **breadcrumb:** write tests for breadcrumb wrapper ([2ed44c4](https://github.com/HospitalRun/components/commit/2ed44c422a8064cae80d231cc1cc351f5d89d150))

## [0.21.1](https://github.com/HospitalRun/components/compare/v0.21.0...v0.21.1) (2019-12-16)


### Bug Fixes

* **fontawesome:** adds fontawesome-common-types ([7482584](https://github.com/HospitalRun/components/commit/7482584769b9c8f19d1b196338a1951c4c6ea3b4))

# [0.21.0](https://github.com/HospitalRun/components/compare/v0.20.1...v0.21.0) (2019-12-07)


### Features

* add dashboard icon ([eea6a45](https://github.com/HospitalRun/components/commit/eea6a45d13e1e79978db3aef475703d06cfc03ec)), closes [#135](https://github.com/HospitalRun/components/issues/135)

## [0.20.1](https://github.com/HospitalRun/components/compare/v0.20.0...v0.20.1) (2019-12-04)


### Bug Fixes

* **labels:** fix missing label export ([84b0fce](https://github.com/HospitalRun/components/commit/84b0fceeeee997bfea32de7acc60ba9d4b9aea52))

# [0.20.0](https://github.com/HospitalRun/components/compare/v0.19.0...v0.20.0) (2019-11-30)


### Features

* **layout:** add Container, Row, Column components ([bd3f658](https://github.com/HospitalRun/components/commit/bd3f658739a1fcf243a6abcfadeb927206b86393))
* **layout:** add Storybook stories for components ([71d560a](https://github.com/HospitalRun/components/commit/71d560ac47f49c62d53317402f788f3f89bec791))
* **layout:** add tests for components ([9da673c](https://github.com/HospitalRun/components/commit/9da673c25876251cd2c91549643a69136e3ec10f))

# [0.19.0](https://github.com/HospitalRun/components/compare/v0.18.3...v0.19.0) (2019-11-27)


### Features

* **video-player:** add Storybook story for video-player ([c329f90](https://github.com/HospitalRun/components/commit/c329f90d883b0a23002ea9c98500e18d140fe1c2))
* **video-player:** add tests ([9ce135f](https://github.com/HospitalRun/components/commit/9ce135fba050146afa5729a9ebd01facaa5d1147))
* **video-player:** add type definition ([16b550e](https://github.com/HospitalRun/components/commit/16b550eaa40830f380a1347282fb5a7c3d2956f2))
* **video-player:** add VideoPlayer component ([bf2f023](https://github.com/HospitalRun/components/commit/bf2f0234fc2ce712268aa4b119a127b84fed560f))
* **video-player:** install video-react package ([17bdbea](https://github.com/HospitalRun/components/commit/17bdbead3b0c7068ed6b76e8034073b60b090977))

## [0.18.3](https://github.com/HospitalRun/components/compare/v0.18.2...v0.18.3) (2019-11-26)


### Bug Fixes

* **navbar:** fix typo in onSearchButtonClick function name ([407ffe0](https://github.com/HospitalRun/components/commit/407ffe00a24f789c50813be2e5fa9c2a6b49bc59))

## [0.18.2](https://github.com/HospitalRun/components/compare/v0.18.1...v0.18.2) (2019-11-23)


### Bug Fixes

* **richtext.test:** fix window.matchMedia is not a function error ([210d1b7](https://github.com/HospitalRun/components/commit/210d1b74e4c8c14e1ffd527042e3378bba064ed8))
* **select:** fix type of onChange prop ([e4d5f25](https://github.com/HospitalRun/components/commit/e4d5f251c790d736e2003cac973701941ca44061))

## [0.18.1](https://github.com/HospitalRun/components/compare/v0.18.0...v0.18.1) (2019-11-23)


### Bug Fixes

* **deps:** removes devDeps @types/storybook__react ([64a11c8](https://github.com/HospitalRun/components/commit/64a11c86c1bbb2d4f73b064bf599c2d120b64ca5))

# [0.18.0](https://github.com/HospitalRun/components/compare/v0.17.1...v0.18.0) (2019-11-21)


### Features

* **richtext:** adds RichText component ([d541c93](https://github.com/HospitalRun/components/commit/d541c938d07e3b6857e71722dc769d3171adf3ce)), closes [#29](https://github.com/HospitalRun/components/issues/29)
* **richtext:** fixes comments in Props to display in storybook ([fa1e526](https://github.com/HospitalRun/components/commit/fa1e5261aa1fac4731550b97efda363920259982)), closes [#93](https://github.com/HospitalRun/components/issues/93)
* **richtext:** fixes default value for disabled prop ([587a493](https://github.com/HospitalRun/components/commit/587a4930541aee0960b0a31b75960152bae56441)), closes [#93](https://github.com/HospitalRun/components/issues/93)

## [0.17.1](https://github.com/HospitalRun/components/compare/v0.17.0...v0.17.1) (2019-11-19)


### Bug Fixes

* **component:** fixes circular import on Button component ([7b8cc92](https://github.com/HospitalRun/components/commit/7b8cc9251a904428718315aa7f44ee55bcda3e27))

# [0.17.0](https://github.com/HospitalRun/components/compare/v0.16.0...v0.17.0) (2019-11-19)


### Features

* **list:** add list component ([8e9c047](https://github.com/HospitalRun/components/commit/8e9c047bb49c1934cd74d207044a41ce45600eea)), closes [#59](https://github.com/HospitalRun/components/issues/59)

# [0.16.0](https://github.com/HospitalRun/components/compare/v0.15.0...v0.16.0) (2019-11-16)


### Features

* **image:** add Image component ([780204e](https://github.com/HospitalRun/components/commit/780204e))

# [0.15.0](https://github.com/HospitalRun/components/compare/v0.14.0...v0.15.0) (2019-11-15)


### Features

* **labels:** destructuring props assignment for labels ([c3b92f0](https://github.com/HospitalRun/components/commit/c3b92f0)), closes [#65](https://github.com/HospitalRun/components/issues/65)
* label to functional component w/ addition htmlfor prop ([0fc6d0a](https://github.com/HospitalRun/components/commit/0fc6d0a)), closes [#65](https://github.com/HospitalRun/components/issues/65)
* **label:** added label component to library ([6ddb776](https://github.com/HospitalRun/components/commit/6ddb776)), closes [#65](https://github.com/HospitalRun/components/issues/65)

# [0.14.0](https://github.com/HospitalRun/components/compare/v0.13.3...v0.14.0) (2019-11-12)


### Bug Fixes

* **lint:** lints some files, adds new rules ([d46fa35](https://github.com/HospitalRun/components/commit/d46fa35))


### Features

* **modals:** adds modals ([6a0fc55](https://github.com/HospitalRun/components/commit/6a0fc55)), closes [#27](https://github.com/HospitalRun/components/issues/27)
* **modals:** simplifies code, reuse button functionalities ([7dda857](https://github.com/HospitalRun/components/commit/7dda857))

## [0.13.3](https://github.com/HospitalRun/components/compare/v0.13.2...v0.13.3) (2019-11-11)


### Bug Fixes

* **naming:** renames ts file in camelCase and refactors imports ([f39019c](https://github.com/HospitalRun/components/commit/f39019c))

## [0.13.2](https://github.com/HospitalRun/components/compare/v0.13.1...v0.13.2) (2019-11-02)


### Bug Fixes

* **text:** change event type to ChangeEvent ([c079fd3](https://github.com/HospitalRun/components/commit/c079fd3))
* **textinput:** change event type to ChangeEvent ([aea29a0](https://github.com/HospitalRun/components/commit/aea29a0))

## [0.13.1](https://github.com/HospitalRun/components/compare/v0.13.0...v0.13.1) (2019-10-31)


### Bug Fixes

* **storybook:** fix interfaces to allow storybook to read prop types ([48e396c](https://github.com/HospitalRun/components/commit/48e396c))

# [0.13.0](https://github.com/HospitalRun/components/compare/v0.12.0...v0.13.0) (2019-10-30)


### Features

* **textinput:** add placeholder for text input ([f5d16b4](https://github.com/HospitalRun/components/commit/f5d16b4))

# [0.12.0](https://github.com/HospitalRun/components/compare/v0.11.0...v0.12.0) (2019-10-21)


### Features

* **select:** add Select component ([dd1186f](https://github.com/HospitalRun/components/commit/dd1186f)), closes [#64](https://github.com/HospitalRun/components/issues/64)

# [0.11.0](https://github.com/HospitalRun/components/compare/v0.10.0...v0.11.0) (2019-10-16)


### Features

* **checkboxes:** add ability to click on label to select ([b93a757](https://github.com/HospitalRun/components/commit/b93a757)), closes [#62](https://github.com/HospitalRun/components/issues/62)
* **checkboxes:** adds Checkbox component ([e0f0930](https://github.com/HospitalRun/components/commit/e0f0930)), closes [#62](https://github.com/HospitalRun/components/issues/62)

# [0.10.0](https://github.com/HospitalRun/components/compare/v0.9.0...v0.10.0) (2019-10-14)


### Bug Fixes

* **deps:** updates react-bootstrap dependency ([1bbee34](https://github.com/HospitalRun/components/commit/1bbee34))
* **test:** fixes other tests ([ce560b0](https://github.com/HospitalRun/components/commit/ce560b0))


### Features

* **switch:** add Switch component ([dc6667c](https://github.com/HospitalRun/components/commit/dc6667c)), closes [#69](https://github.com/HospitalRun/components/issues/69)
* **switch:** removes name from props ([b4bc81c](https://github.com/HospitalRun/components/commit/b4bc81c)), closes [#69](https://github.com/HospitalRun/components/issues/69)

# [0.9.0](https://github.com/HospitalRun/components/compare/v0.8.0...v0.9.0) (2019-10-14)


### Bug Fixes

* **navbar:** changed the code to be more dynamically ([753c6c4](https://github.com/HospitalRun/components/commit/753c6c4))
* **navbar:** code modified ([c23b339](https://github.com/HospitalRun/components/commit/c23b339))


### Features

* **navbar:** add Navbar component ([3190238](https://github.com/HospitalRun/components/commit/3190238))
* **navbar:** adds unit test ([2e46f90](https://github.com/HospitalRun/components/commit/2e46f90))

# [0.8.0](https://github.com/HospitalRun/components/compare/v0.7.0...v0.8.0) (2019-10-13)


### Features

* **radios:** adds radio component ([2e91b6a](https://github.com/HospitalRun/components/commit/2e91b6a)), closes [#63](https://github.com/HospitalRun/components/issues/63)

# [0.7.0](https://github.com/HospitalRun/components/compare/v0.6.0...v0.7.0) (2019-10-13)


### Features

* **textinput:** adds TextInput component ([b2200bb](https://github.com/HospitalRun/components/commit/b2200bb)), closes [#20](https://github.com/HospitalRun/components/issues/20)

# [0.6.0](https://github.com/HospitalRun/components/compare/v0.5.0...v0.6.0) (2019-10-12)


### Bug Fixes

* **alerts:** adds module export ([b9f9487](https://github.com/HospitalRun/components/commit/b9f9487))
* **alerts:** changes path to components in alert story ([9a41e56](https://github.com/HospitalRun/components/commit/9a41e56))
* **alerts:** little fixes ([75cf927](https://github.com/HospitalRun/components/commit/75cf927))
* **test:** replaces dist with src in tests ([dddf357](https://github.com/HospitalRun/components/commit/dddf357))


### Features

* **alerts:** adds Alert component ([135a750](https://github.com/HospitalRun/components/commit/135a750))

# [0.5.0](https://github.com/HospitalRun/components/compare/v0.4.5...v0.5.0) (2019-10-06)


### Features

* **text:** adds text field component ([d4b3928](https://github.com/HospitalRun/components/commit/d4b3928))

## [0.4.5](https://github.com/HospitalRun/components/compare/v0.4.4...v0.4.5) (2019-10-04)


### Bug Fixes

* **toolchain:** adds custom tsconfig for storybook build ([951c5c0](https://github.com/HospitalRun/components/commit/951c5c0)), closes [#55](https://github.com/HospitalRun/components/issues/55)
* **toolchain:** fixes issue with storybook not properly building ([70ce357](https://github.com/HospitalRun/components/commit/70ce357)), closes [#55](https://github.com/HospitalRun/components/issues/55)
* **toolchain:** fixes issue with storybook not properly building ([b6708ae](https://github.com/HospitalRun/components/commit/b6708ae)), closes [#55](https://github.com/HospitalRun/components/issues/55)
* **toolchain:** reverts mapped path due to netlify crash ([4f2d1fc](https://github.com/HospitalRun/components/commit/4f2d1fc)), closes [#55](https://github.com/HospitalRun/components/issues/55)

## [0.4.4](https://github.com/HospitalRun/components/compare/v0.4.3...v0.4.4) (2019-10-04)


### Bug Fixes

* **toolchain:** fixes storybook static build ([a72d9fb](https://github.com/HospitalRun/components/commit/a72d9fb))

## [0.4.3](https://github.com/HospitalRun/components/compare/v0.4.2...v0.4.3) (2019-10-01)


### Bug Fixes

* **toolchain:** removes storybook-build after tests ([0099d91](https://github.com/HospitalRun/components/commit/0099d91))

## [0.4.2](https://github.com/HospitalRun/components/compare/v0.4.1...v0.4.2) (2019-10-01)


### Bug Fixes

* **toolchain:** fixes storybook build ([d88f8c8](https://github.com/HospitalRun/components/commit/d88f8c8))
* **toolchain:** fixes tsconfig, eslint, prettier and tsdx ([f130a9e](https://github.com/HospitalRun/components/commit/f130a9e))

## [0.4.1](https://github.com/HospitalRun/components/compare/v0.4.0...v0.4.1) (2019-10-01)


### Bug Fixes

* **imports:** reduces bundle size using specific modules imports ([3097e19](https://github.com/HospitalRun/components/commit/3097e19))

# [0.4.0](https://github.com/HospitalRun/components/compare/v0.3.0...v0.4.0) (2019-09-30)


### Features

* **badges:** adds badges ([9b52c43](https://github.com/HospitalRun/components/commit/9b52c43)), closes [#22](https://github.com/HospitalRun/components/issues/22)
* **pills:** adds pills ([e6a4fd6](https://github.com/HospitalRun/components/commit/e6a4fd6)), closes [#22](https://github.com/HospitalRun/components/issues/22)

# [0.3.0](https://github.com/HospitalRun/components/compare/v0.2.0...v0.3.0) (2019-09-30)


### Features

* **toolchain:** adds commit script ([6639d28](https://github.com/HospitalRun/components/commit/6639d28))

# [0.2.0](https://github.com/HospitalRun/components/compare/v0.1.8...v0.2.0) (2019-09-27)


### Bug Fixes

* **ci:** changes to fix deprecation warning about prepublish ([d2da681](https://github.com/HospitalRun/components/commit/d2da681))
* **storybook:** improves toaster storybook ([d6a2c0e](https://github.com/HospitalRun/components/commit/d6a2c0e))
* **toolchain:** adds some typescript-eslint dev deps and pretest script ([dc6def4](https://github.com/HospitalRun/components/commit/dc6def4))


### Features

* **buttons:** adds Button component ([34314ef](https://github.com/HospitalRun/components/commit/34314ef)), closes [#19](https://github.com/HospitalRun/components/issues/19)
* **buttons:** adds icon functionality to buttons ([95cdc7a](https://github.com/HospitalRun/components/commit/95cdc7a)), closes [#19](https://github.com/HospitalRun/components/issues/19)
* **icons:** adds Icon component wrapper around fontawesome" ([aabd1a1](https://github.com/HospitalRun/components/commit/aabd1a1)), closes [#19](https://github.com/HospitalRun/components/issues/19)
* **storybook:** adds confirm component in storybook ([3167f35](https://github.com/HospitalRun/components/commit/3167f35))

## [0.1.8](https://github.com/HospitalRun/components/compare/v0.1.7...v0.1.8) (2019-09-27)


### Bug Fixes

* **dep:** adds .npmrc to the project ([0230456](https://github.com/HospitalRun/components/commit/0230456))
