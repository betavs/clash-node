import { readFileSync } from 'node:fs'

const pattern = /^clash-[\w-]+\.(ts|yaml)$/

const predicate = (str: string) => pattern.test(str)

const content = readFileSync('package.json', 'utf-8')

const json = JSON.parse(content)

const { name, author, description, homepage } = json

export default { name, author, description, homepage, predicate }
