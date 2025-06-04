import chalk from 'chalk'
import { readdirSync, writeFileSync } from 'node:fs'
import config from '../scripts/config.ts'

const { name, description, homepage, pattern } = config

const dateUTCString = new Date().toUTCString()

let readmeContent = `# ${name}\n\n${description}\n\n`

const useReadme = () => {
  const filenames = readdirSync('resources').filter((filename) =>
    pattern.clash.test(filename)
  )

  const subscribe = filenames
    .map((name, index) => {
      return `| ${index + 1} | [${name}](${homepage}resources/${name}) |`
    })
    .join('\n')

  readmeContent += `> Updated on ${dateUTCString}\n\n| No. | Subscribe Link |\n| :---: | :-----: |\n${subscribe}\n`

  writeFileSync('README.md', readmeContent, 'utf-8')

  const message = chalk.cyanBright.italic.underline(
    `\n${dateUTCString}: Enjoy your Clash configuration!\n`
  )

  console.log(message)
}

export default useReadme
