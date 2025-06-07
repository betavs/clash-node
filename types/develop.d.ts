type Option = Record<string, unknown>

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

type UseSpiderOption =
  | {
      base64url: string
      selector: [string, string]
      pattern: RegExp
    }
  | {
      base64url: string
      selector?: never
      pattern?: never
    }
  | {
      base64url: string
      selector?: never
      pattern: RegExp
    }
