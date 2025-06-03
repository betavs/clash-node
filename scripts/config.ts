import { readFileSync } from 'node:fs'

const content = readFileSync('package.json', 'utf-8')

const json = JSON.parse(content)

const { name, author, description, homepage } = json

const pattern = {
  clash: /^clash-[\w-]+\.(ts|yaml)$/,

  link: /^http(s)?:/,

  root: /^\//,

  decode: /^(\w+):\/\/(\w+)@([\w\.-]+):(\d+)#(.+)$/,

  filename: /([^/\\]+)(?=\.\w+$)/
}

const config = {
  name,
  author,
  pattern,
  homepage,
  description,
  predicate: (str: string) => pattern.clash.test(str)
}

export default config
