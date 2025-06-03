import { parse } from 'yaml'
import useFilename from '../hooks/use-filename.ts'
import useRender from '../hooks/use-render.ts'

const filename = useFilename(import.meta.url)

const base64url = 'aHR0cHM6Ly93d3cueHJheXZpcC5jb20vZnJlZS55YW1s'

const result: ClashNode.UseGenerateOption = { [filename]: [] }

const main = async () => {
  const data = await useRender(base64url)

  const { proxies } = parse(data.text())

  result[filename] = proxies

  return result
}

export default await main()
