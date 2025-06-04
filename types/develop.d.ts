type Option = Record<string, any>

type ProxyNode = {
  name: string
  type: string
  server: string
  port: number
  cipher: string
  password: string
  udp: boolean
} & Option

type ProxyNodes = ProxyNode[]

type UseGenerateOption = Record<string, ProxyNodes>

type UseSpiderOption = {
  base64url: string
} & (
  | { selector: [string, string]; pattern: RegExp }
  | { selector?: never; pattern?: never }
)
