declare namespace ClashNode {
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

  type ProxyNodeArray = ProxyNode[]

  type UseGenerateOption = Record<string, ProxyNodeArray>

  type UseSpiderOption = {
    base64url: string
    selector: [string, string]
    pattern: RegExp
  }
}
