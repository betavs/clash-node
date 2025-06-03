import config from '../scripts/config.ts'

const useDecodeBase64 = (encode: string) => {
  return Buffer.from(encode, 'base64').toString('utf-8')
}

const useDecodeBase64url = (encode: string) => {
  return Buffer.from(encode, 'base64url').toString('utf-8')
}

const useDecodeClashNode = (encode: string): ClashNode.ProxyNodeArray => {
  const text = useDecodeBase64(encode)

  const data = text
    .split('\n')
    .map((item) => item.trim())
    .filter((item) => item)

  const proxies: ClashNode.ProxyNodeArray = []

  data.forEach((item) => {
    const match = decodeURIComponent(item).match(config.pattern.decode)

    if (!match) return

    const [, type, secret, server, port, name] = match

    const [cipher, password] = useDecodeBase64(secret).split(':')

    proxies.push({
      name,
      type,
      server,
      port: parseInt(port, 10),
      cipher,
      password,
      udp: true
    })
  })

  return proxies
}

export { useDecodeBase64url, useDecodeClashNode }
