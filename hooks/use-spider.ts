import config from '../scripts/config.ts'
import { useDecodeBase64url } from './use-decode.ts'
import useRandom from './use-random.ts'
import useRender from './use-render.ts'

const useSpider = async (option: ClashNode.UseSpiderOption) => {
  const { base64url, selector, pattern } = option

  const url = config.pattern.link.test(base64url)
    ? base64url
    : useDecodeBase64url(base64url)

  const [home, detail] = selector

  let $ = await useRender(base64url)

  let href = $(home).eq(0).attr('href') ?? ''

  if (!config.pattern.link.test(href)) {
    href = `${url}${href.replace(config.pattern.root, '')}`
  }

  $ = await useRender(href)

  const text = $(detail).text()

  const list = text.split('\n').map((item) => item.trim())

  const data = list.filter((item) => pattern.test(item))

  const link = useRandom(data)

  return (await useRender(link)).text()
}

export default useSpider
