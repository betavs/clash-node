import { parse } from 'yaml'
import useFilename from '../hooks/use-filename.ts'
import useSpider from '../hooks/use-spider.ts'

const filename = useFilename(import.meta.url)

const base64url = 'aHR0cHM6Ly9ub2RlZnJlZS5uZXQv'

const pattern = /http(s)?:\/\/\w+\.\w+\.\w+\/(\w+\/)+\w+\.yaml/

const result: ClashNode.UseGenerateOption = { [filename]: [] }

const main = async () => {
  const yaml = await useSpider({
    base64url,
    selector: ['#boxmoe_theme_container a', '#boxmoe_theme_container .section'],
    pattern
  })
  const { proxies } = parse(yaml)

  result[filename] = proxies

  return result
}

export default await main()
