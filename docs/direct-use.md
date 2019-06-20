# Direct use, no CLI

You can certainly use it as a module instead of a CLI tool.

Check [src/run-bot.js](src/run-bot.js) or [example-lambda/server.js](example-lambda/server.js) as examples.

## For nodejs server

```js
import { createApp } from 'ringcentral-engage-chatbot'

console.log('-> bot:', path)
const conf = require(pathToBotConfigJS)
const app = createApp(conf)
app.listen(RINGCENTRAL_ENGAGE_CHATBOT_EXPRESS_PORT, RINGCENTRAL_ENGAGE_CHATBOT_EXPRESS_HOST, () => {
  console.log(`-> server running at: http://${RINGCENTRAL_ENGAGE_CHATBOT_EXPRESS_HOST}:${RINGCENTRAL_ENGAGE_CHATBOT_EXPRESS_PORT}`)
})
```

## For AWS Lambda

```js
import { createApp } from 'ringcentral-engage-chatbot'

const path = './auto-reply-all.js'
console.log('-> bot:', path)
const conf = require(path)
const app = createApp(conf)

export default app

```
