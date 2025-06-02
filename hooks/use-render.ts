import * as cheerio from 'cheerio'
import { useDecodeBase64url } from './use-decode.ts'

const pattern = /^http(s)?:/

const useLink = (url: string) => {
  if (pattern.test(url)) {
    return url
  }

  return undefined
}

const useRender = async (url: string) => {
  const response = await fetch(useLink(url) ?? useDecodeBase64url(url))
  const text = await response.text()

  return cheerio.load(text)
}

export default useRender
