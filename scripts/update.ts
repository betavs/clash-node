import useGenerate from '../hooks/use-generate.ts'
import useReadme from '../hooks/use-readme.ts'
import clashMeta from './clash-meta.ts'
import clashNode from './clash-node.ts'
import clashSock from './clash-sock.ts'

useGenerate({ ...clashMeta, ...clashSock, ...clashNode })

useReadme()
