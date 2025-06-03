import config from '../scripts/config.ts'

const useFilename = (str: string) => {
  return str.match(config.pattern.filename)![0]
}

export default useFilename
