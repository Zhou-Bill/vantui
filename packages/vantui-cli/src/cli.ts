import { Command } from 'commander'

import {
  clean,
  build,
  release,
  changelog,
  cliVersion,
  watch,
  docs,
  mdCode,
} from './index.js'

const program = new Command()

program.version(`@vant/cli ${cliVersion}`)

program.command('clean').description('Clean all dist files').action(clean)

program
  .command('build')
  .description('Compile components in production mode')
  .option('--addtional-entries <addtionalEntries>', 'addtional entries')
  .action(build)

program
  .command('watch')
  .description('Compile components in development mode')
  .option('--type <type>', 'Build type')
  .option('--addtional-entries <addtionalEntries>', 'addtional entries')
  .action(watch)

program
  .command('release')
  .description('Compile components and release it')
  .option('--tag <tag>', 'Release tag')
  .action(release)

program
  .command('docs')
  .description('Compile docs')
  .option('--mode <mode>', 'Docs mode production | development')
  .action(docs)

program
  .command('mdcode')
  .description('Watch md, compile it into s')
  .option('--mode <mode>', 'Docs mode create | watch')
  .option('--code-type <codeType>', 'codeType h5 or taro, default taro')
  .action(mdCode)

program.command('changelog').description('Generate changelog').action(changelog)

program.parse()
