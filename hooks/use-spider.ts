import * as cheerio from 'cheerio'
import { parse } from 'yaml'
import config from '../scripts/config.ts'
import { useDecodeBase64url, useDecodeClashNode } from './use-decode.ts'

const isLink = (str: string) => config.pattern.link.test(str)

const useRandom = (data: string[]): string => {
  const randomIndex = Math.floor(Math.random() * data.length)

  return data[randomIndex]
}

const useRender = async (url: string) => {
  const response = await fetch(url)

  const text = await response.text()

  return cheerio.load(text)
}

const useRenderClashNode = async ({
  base64url,
  selector,
  pattern
}: UseSpiderOption) => {
  let url = base64url

  let $ = await useRender(base64url)

  if (selector) {
    url = $(selector[0]).eq(0).attr('href') ?? ''

    if (!isLink(url)) {
      url = `${base64url}${url}`
    }
  }

  $ = await useRender(url)

  const text = $(selector?.[1] ?? '*').text()

  const data = text.match(pattern!)!

  url = useRandom(data)

  if (config.pattern.github.test(url)) {
    url = url.replace(config.pattern.github, (_match, $1) => {
      return `https://raw.githubusercontent.com/${$1}/${$1}.github.io/refs/heads/main`
    })
  }

  return url
}

const useSpider = async (option: UseSpiderOption) => {
  let base64url = option.base64url
  const { selector, pattern } = option

  base64url = isLink(base64url) ? base64url : useDecodeBase64url(base64url)

  if (
    (Array.isArray(selector) &&
      selector.length === 2 &&
      pattern instanceof RegExp) ||
    pattern instanceof RegExp
  ) {
    base64url = await useRenderClashNode({
      base64url,
      selector,
      pattern
    })
  }

  const resp = await useRender(base64url)

  const text = resp.text()

  if (!config.pattern.yaml.test(base64url)) {
    return useDecodeClashNode(text)
  }

  const yaml = parse(text)

  return yaml.proxies as ProxyNodes
}

export default useSpider
