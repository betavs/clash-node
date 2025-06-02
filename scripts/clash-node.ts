import { useDecode } from '../hooks/use-decode.ts'
import useFilename from '../hooks/use-filename.ts'
import useRandom from '../hooks/use-random.ts'
import useRender from '../hooks/use-render.ts'

const filename = useFilename(import.meta.url)

const base64url = 'aHR0cHM6Ly9zby54Znhzc3IubWUvbmF2L2Jsb2c'

const pattern = /http(s)?:\/\/\w+\.\w+\.\w+\/(\w+\/)+subscribe\?token=\w+/

const result: ClashNode.UseGenerateOption = { [filename]: [] }

const main = async () => {
  try {
    const page = await useRender(base64url)
    const { href } = page('.content-layout a.media-content')[0].attribs

    const detail = await useRender(href)
    const text = detail('.content-layout .panel-body').text()

    const list = text.split('\n').map((item) => item.trim())
    const data = list.filter((item) => pattern.test(item))
    const link = useRandom(data)

    const encode = await useRender(link)
    const proxies = useDecode(encode.text())

    result[filename] = proxies
  } finally {
    return result
  }
}

export default await main()
