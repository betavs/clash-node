import chalk from 'chalk'
import { readdirSync, writeFileSync } from 'node:fs'
import config from '../scripts/config.ts'

const { name, description, homepage, predicate } = config

const date = new Date().toUTCString()

let readme = `# ${name}\n\n${description}\n\n`

const useReadme = () => {
  const names = readdirSync('resources').filter(predicate)

  const nodes = names
    .map((name, index) => {
      return `| ${index + 1} | [${name}](${homepage}resources/${name}) |`
    })
    .join('\n')

  readme += `> Updated on ${date}\n\n| No. | Subscribe Link |\n| :---: | :-----: |\n${nodes}\n`

  writeFileSync('README.md', readme, 'utf-8')

  const message = chalk.cyanBright.italic.underline(
    `\n${date}: Enjoy your Clash configuration!\n`
  )

  console.log(message)
}

export default useReadme
