
/**
 * run bot file with path supplied from command line
 */

import { createApp } from './index'

const {
  SERVER_PORT,
  SERVER_HOST
} = process.env

export default ({ path }) => {
  console.log('-> bot:', path)
  const conf = require(path)
  const app = createApp(conf)
  app.listen(SERVER_PORT, SERVER_HOST, () => {
    console.log(`-> server running at: http://${SERVER_HOST}:${SERVER_PORT}`)
  })
}
