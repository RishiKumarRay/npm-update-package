[![npm version](https://badge.fury.io/js/npm-update-package.svg)](https://badge.fury.io/js/npm-update-package)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# npm-update-package

CLI tool for creating pull request to update npm packages

## Installation

If you are using npm:

```sh
npm i -g npm-update-package
```

If you are using Yarn:

```sh
yarn global add npm-update-package
```

Or, you can use [npx](https://docs.npmjs.com/cli/v8/commands/npx).

```sh
npx npm-update-package
```

## Usage

```sh
npm-update-package --github-token $GITHUB_TOKEN
```

## Options

You can customize behavior via command-line options.

|Option|Description|Required|Value|Default|
|---|---|---|---|---|
|`--branch-name`|Branch name template|-|string|`npm-update-package/{{{packageName}}}/v{{newVersion}}`|
|`--commit-message`|Commit message template|-|string|`chore(deps): {{updateType}} update {{{packageName}}} to v{{newVersion}}`|
|`--git-user-email`|User email of commit|-|string|-|
|`--git-user-name`|User name of commit|-|string|-|
|`--github-token`|GitHub token|✓|string|-|
|`--log-level`|Log level to show|-|`info`, `debug`|`info`|
|`--package-manager`|Package manager of your project|-|`npm`, `yarn`|`npm`|
|`--pull-request-title`|Pull request title template|-|string|`chore(deps): {{updateType}} update {{{packageName}}} to v{{newVersion}}`|

### Templates

npm-update-package is using [mustache](https://www.npmjs.com/package/mustache) for generating string from templates.
These variables are available:

- `--branch-name`
  - `packageName`
  - `currentVersion`
  - `newVersion`
  - `updateType`
- `--commit-message`
  - `packageName`
  - `currentVersion`
  - `newVersion`
  - `updateType`
- `--pull-request-title`
  - `packageName`
  - `currentVersion`
  - `newVersion`
  - `updateType`
