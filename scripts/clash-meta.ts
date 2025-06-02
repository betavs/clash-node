import { parse } from 'yaml'
import useFilename from '../hooks/use-filename.ts'
import useRender from '../hooks/use-render.ts'

const filename = useFilename(import.meta.url)

const base64url =
  'aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL0JhcmFiYW1hL0ZyZWVOb2Rlcy9yZWZzL2hlYWRzL21haW4vbm9kZXMvY2xhc2htZXRhLnlhbWw='

const result: ClashNode.UseGenerateOption = { [filename]: [] }

const main = async () => {
  try {
    const sock = await useRender(base64url)
    const { proxies } = parse(sock.text())

    result[filename] = proxies
  } finally {
    return result
  }
}

export default await main()
