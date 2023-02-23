import { makePage } from '@keystatic/astro/ui'
import config from './keystatic.config'

console.log('saaaa', makePage(config))
export const Keystatic = makePage(config)
