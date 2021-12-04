import {
  Option,
  program
} from 'commander'
import { app } from '../app'
import { LogLevel } from '../logger'
import { PackageManagerName } from '../package-manager'
import { isOptions } from './Options'
import type { Options } from './Options'

// TODO: add test
export const initOptions = (): Options => {
  program
    .version(app.version)
    .option('--branch-name <value>', 'Branch name template', 'npm-update-package/{{{packageName}}}/v{{newVersion}}')
    .option('--commit-message <value>', 'Commit message template', 'chore(deps): {{updateType}} update {{{packageName}}} to v{{newVersion}}')
    .requiredOption('--github-token <value>', 'GitHub token')
    .addOption(
      new Option('--log-level <value>', 'Log level to show')
        .choices([
          LogLevel.Error,
          LogLevel.Info,
          LogLevel.Debug
        ])
        .default(LogLevel.Info)
    )
    .addOption(
      new Option('--package-manager <value>', 'Package manager of your project')
        .choices([
          PackageManagerName.Npm,
          PackageManagerName.Yarn
        ])
        .default(PackageManagerName.Npm)
    )
    .option('--pull-request-body <value>', 'Pull request body template', `This PR updates these packages:

|package|type|current version|new version|
|---|---|---|---|
|[{{{packageName}}}](https://www.npmjs.com/package/{{{packageName}}})|{{updateType}}|\`{{currentVersion}}\`|\`{{newVersion}}\`|

---
This PR has been generated by [{{{appName}}}]({{{appWeb}}}) v{{appVersion}}`)
    .option('--pull-request-title <value>', 'Pull request title template', 'chore(deps): {{updateType}} update {{{packageName}}} to v{{newVersion}}')
  program.parse(process.argv)
  const options = program.opts()

  if (!isOptions(options)) {
    throw new Error(`Failed to parse command-line options. options=${JSON.stringify(options)}`)
  }

  return options
}
