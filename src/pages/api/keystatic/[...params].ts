import { makeHandler } from '@keystatic/astro/api'
import config from '../../../../keystatic.config'

export const all = makeHandler({
  config,
  secret: import.meta.env.KEYSTATIC_SECRET,
  clientId: import.meta.env.KEYSTATIC_GITHUB_CLIENT_ID,
  clientSecret: import.meta.env.KEYSTATIC_GITHUB_CLIENT_SECRET,
})

// const handler = makeHandler({
//   config,
//   secret: import.meta.env.KEYSTATIC_SECRET,
//   clientId: import.meta.env.KEYSTATIC_GITHUB_CLIENT_ID,
//   clientSecret: import.meta.env.KEYSTATIC_GITHUB_CLIENT_SECRET,
// })

// export const all: typeof handler = (context) => {
//   console.log(import.meta.env.KEYSTATIC_GITHUB_CLIENT_ID)
//   return handler(context)
// }
