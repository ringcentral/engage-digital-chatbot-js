# Write a personal bot

For a simple Hello bot:

```js

// event handler
exports.onEvent = async ({
  event,
  client,
  handled // hanlded by prev skills
}) => {
  if (handled) {
    return
  }
  console.log(event)
  await client.reply(event, {
    title: 'this is a auto reply title',
    body: 'this is a auto reply body'
  })
}

exports.name = 'Hello bot'

exports.description = 'Bot only respond to "Hello"'

```

- For more bot config, you can check [full-config-bot.js](../example-bots/full-config-bot.js)
- You can write custom reply function, check [example-bots/custom-email-auto-reply.js](../example-bots/custom-email-auto-reply.js)

## Real examples

- [https://github.com/zxdong262/ringcentral-engage-bot-template-js](https://github.com/zxdong262/ringcentral-engage-bot-template-js)
