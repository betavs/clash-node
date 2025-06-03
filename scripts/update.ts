import chalk from 'chalk'
import config from '../hooks/use-config.ts'
import useGenerate from '../hooks/use-generate.ts'
import useReadme from '../hooks/use-readme.ts'

import { readdirSync } from 'node:fs'

let option = {}

const names = readdirSync('scripts').filter(config.predicate)

for (const name of names) {
  let data = {}

  try {
    data = (await import(`./${name}`)).default
  } catch {
    const message = chalk.redBright.italic.underline(
      `\nAn error occurred when executing script file ${name}`
    )

    console.log(message)
  }

  option = { ...option, ...data }
}

useGenerate(option)

useReadme()
