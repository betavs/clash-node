const useDecode = (encode: string): ClashNode.ProxyNodeArray => {
  const text = Buffer.from(encode, 'base64').toString('utf-8')
  const data = text
    .split('\n')
    .map((item) => item.trim())
    .filter((item) => item)

  const pattern = /^(\w+):\/\/(\w+)@([\w\.-]+):(\d+)#(.+)$/
  const proxies: ClashNode.ProxyNodeArray = []

  data.forEach((item) => {
    const match = decodeURIComponent(item).match(pattern)

    if (!match) return

    const [, type, secret, server, port, name] = match
    const [cipher, password] = Buffer.from(secret, 'base64')
      .toString('utf-8')
      .split(':')

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

const useDecodeBase64url = (encode: string) => {
  return Buffer.from(encode, 'base64url').toString('utf-8')
}

export { useDecode, useDecodeBase64url }
