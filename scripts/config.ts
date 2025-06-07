import { readFileSync } from 'node:fs'

const content = readFileSync('package.json', 'utf-8')

const json = JSON.parse(content)

const { name, author, description, homepage } = json

const pattern = {
  clash: /^clash-[\w-]+\.(yaml)$/,

  link: /^http(s)?:\/\//,

  yaml: /\.yaml$/,

  decode: /^(\w+):\/\/(\w+)@([\w.-]+):(\d+)#(.+)$/,

  github: /^https:\/\/([\w-]+)\.github\.io/,

  branch: /[\w-]+\.github\.io\/refs\/heads\/([^/]+)\//
}

export default {
  name,
  author,
  pattern,
  homepage,
  description
}
