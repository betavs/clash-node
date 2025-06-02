import { readFileSync } from 'node:fs'

const useConfig = () => {
  const content = readFileSync('package.json', 'utf-8')
  const json = JSON.parse(content)
  const { name, author, description, homepage } = json

  return { name, author, description, homepage }
}

export default useConfig()
