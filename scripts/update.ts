import chalk from 'chalk'
import useGenerate from '../hooks/use-generate.ts'
import useReadme from '../hooks/use-readme.ts'
import useSpider from '../hooks/use-spider.ts'
import clash from './clash.ts'

const useGenerateOption: UseGenerateOption = {}

for (const key in clash) {
  try {
    useGenerateOption[`clash-${key}`] = await useSpider(clash[key])
  } catch {
    const message = chalk.redBright.italic.underline(
      `\nAn error occurred while executing ${key} configuration`
    )

    console.log(message)
  }
}

useGenerate(useGenerateOption)

useReadme()
