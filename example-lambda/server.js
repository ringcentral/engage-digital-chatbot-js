
/**
 * standalone server file, no cli
 */

import { createApp } from 'ringcentral-engage-chatbot'

const path = './auto-reply-all.js'
console.log('-> bot:', path)
const conf = require(path)
const app = createApp(conf)

export default app
