import useRandom from './use-random.ts'
import useRender from './use-render.ts'

const useSpider = async (option: ClashNode.UseSpiderOption) => {
  const { base64url, selector, pattern } = option
  const [home, detail] = selector

  let $ = await useRender(base64url)
  const href = $(home).eq(0).attr('href')

  $ = await useRender(href!)
  const text = $(detail).text()

  const list = text.split('\n').map((item) => item.trim())
  const data = list.filter((item) => pattern.test(item))
  const link = useRandom(data)

  return (await useRender(link)).text()
}

export default useSpider
