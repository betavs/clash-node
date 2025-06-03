import { useDecode } from '../hooks/use-decode.ts'
import useFilename from '../hooks/use-filename.ts'
import useSpider from '../hooks/use-spider.ts'

const filename = useFilename(import.meta.url)

const base64url = 'aHR0cHM6Ly9zby54Znhzc3IubWUvbmF2L2Jsb2c'

const pattern = /http(s)?:\/\/\w+\.\w+\.\w+\/(\w+\/)+subscribe\?token=\w+/

const result: ClashNode.UseGenerateOption = { [filename]: [] }

const main = async () => {
  const encode = await useSpider({
    base64url,
    selector: [
      '.content-layout a.media-content',
      '.content-layout .panel-body'
    ],
    pattern
  })

  result[filename] = useDecode(encode)
  return result
}

export default await main()
