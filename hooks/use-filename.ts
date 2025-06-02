const pattern = /([^/\\]+)(?=\.\w+$)/

const useFilename = (str: string) => {
  return str.match(pattern)![0]
}

export default useFilename
