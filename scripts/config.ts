import { readFileSync } from 'node:fs'

const content = readFileSync('package.json', 'utf-8')

const json = JSON.parse(content)

const { name, author, description, homepage } = json

const pattern = {
  clash: /^clash-[\w-]+\.(yaml)$/,

  link: /^http(s)?:/,

  yaml: /\.yaml$/,

  root: /^\//,

  decode: /^(\w+):\/\/(\w+)@([\w\.-]+):(\d+)#(.+)$/
}

export default {
  name,
  author,
  pattern,
  homepage,
  description
}
