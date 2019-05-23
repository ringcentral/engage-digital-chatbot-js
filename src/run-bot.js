
/**
 * run bot file with path supplied from command line
 */

import { createApp } from './index'

const {
  RINGCENTRAL_ENGAGE_CHATBOT_EXPRESS_PORT,
  RINGCENTRAL_ENGAGE_CHATBOT_EXPRESS_HOST
} = process.env

export default ({ path }) => {
  console.log('-> bot:', path)
  const conf = require(path)
  const app = createApp(conf)
  app.listen(RINGCENTRAL_ENGAGE_CHATBOT_EXPRESS_PORT, RINGCENTRAL_ENGAGE_CHATBOT_EXPRESS_HOST, () => {
    console.log(`-> server running at: http://${RINGCENTRAL_ENGAGE_CHATBOT_EXPRESS_HOST}:${RINGCENTRAL_ENGAGE_CHATBOT_EXPRESS_PORT}`)
  })
}
