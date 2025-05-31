import { readFileSync, writeFileSync } from 'fs'

import * as cheerio from 'cheerio'

// @ts-ignore
import { site, regexp } from './config.ts'

const render = async (url: string) => {
  const response = await fetch(url)

  const html = await response.text()

  return cheerio.load(html)
}

const update = async (data: string[]) => {
  const random = Math.floor(Math.random() * data.length)

  const encode = (await render(data[random])).text()

  const content = readFileSync('package.json', 'utf-8')

  const { name, description } = JSON.parse(content)

  const readme = `# ${name}\n\n${description}\n\n${data
    .map((item) => `- [${item}](${item})`)
    .join('\n')}\n`

  writeFileSync('README.md', readme, 'utf-8')

  writeFileSync('ENCODE', encode, 'utf-8')
}

const main = async () => {
  const page = await render(site)

  const link = page('.content-layout a.media-content')[0].attribs.href

  const detail = await render(link)

  const text = detail('.content-layout .panel-body').text()

  const list = text.split('\n').map((item) => item.trim())

  const result = list.filter((item) => regexp.test(item))

  update(result)
}

main()
