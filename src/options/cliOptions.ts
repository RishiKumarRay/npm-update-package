import { LogLevel } from '../logger'
import { PackageManagerName } from '../package-manager'
import type { CLIOption } from './CLIOption'
import { OptionType } from './OptionType'

export const cliOptions: CLIOption[] = [
  {
    name: 'assignees',
    description: 'User names to assign to pull request',
    type: OptionType.StringArray,
    required: false
  },
  {
    name: 'commit-message',
    description: 'Commit message template',
    type: OptionType.String,
    required: false,
    default: 'chore(deps): {{{level}}} update {{{packageName}}} to v{{{newVersion}}}'
  },
  {
    name: 'fetch-sleep-time',
    description: 'Sleep time between fetching (ms)',
    type: OptionType.Number,
    required: false,
    default: 1000
  },
  {
    name: 'github-token',
    description: 'GitHub token',
    type: OptionType.String,
    required: true
  },
  {
    name: 'ignore-packages',
    description: 'Package names to ignore',
    type: OptionType.StringArray,
    required: false
  },
  {
    name: 'log-level',
    description: 'Log level to show',
    type: OptionType.String,
    required: false,
    choices: [
      LogLevel.Off,
      LogLevel.Fatal,
      LogLevel.Error,
      LogLevel.Warn,
      LogLevel.Info,
      LogLevel.Debug,
      LogLevel.Trace
    ],
    default: LogLevel.Info
  },
  {
    name: 'package-manager',
    description: 'Package manager of your project',
    type: OptionType.String,
    required: false,
    choices: [
      PackageManagerName.Npm,
      PackageManagerName.Yarn
    ],
    default: PackageManagerName.Npm
  },
  {
    name: 'pr-body-notes',
    description: 'Additional notes for Pull request body',
    type: OptionType.String,
    required: false
  },
  {
    name: 'pr-title',
    description: 'Pull request title template',
    type: OptionType.String,
    required: false,
    default: 'chore(deps): {{{level}}} update {{{packageName}}} to v{{{newVersion}}}'
  },
  {
    name: 'reviewers',
    description: 'User names to request reviews',
    type: OptionType.StringArray,
    required: false
  }
]
