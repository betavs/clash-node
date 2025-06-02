const useRandom = (data: string[]): string => {
  const num = Math.floor(Math.random() * data.length)

  return data[num]
}

export default useRandom
