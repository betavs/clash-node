import * as cheerio from 'cheerio'
import config from '../scripts/config.ts'
import { useDecodeBase64url } from './use-decode.ts'

const useRender = async (url: string) => {
  const link = config.pattern.link.test(url) ? url : useDecodeBase64url(url)

  const response = await fetch(link)

  const text = await response.text()

  return cheerio.load(text)
}

export default useRender
