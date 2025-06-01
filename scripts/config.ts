import { readFileSync } from 'fs'

const site = 'https://so.xfxssr.me/nav/blog'

const regexp = /http(s)?:\/\/\w+\.\w+\.\w+\/(\w+\/)+subscribe\?token=\w+/

const content = readFileSync('package.json', 'utf-8')

const json = JSON.parse(content)

const { name, author, description } = json

export default { site, regexp, name, author, description }
