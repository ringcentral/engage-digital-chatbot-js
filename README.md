
# ringcentral-engage-chatbot

[RingCentral Engage(Dimelo)](https://www.dimelo.com/en/dimelo-digital) bot framework for js. [api docs](https://github.com/ringcentral/ringcentral-api-specs/tree/master/specs/dimelo-api).

## Prerequisites

- Nodejs 8.10+/npm, recommend using [nvm](https://github.com/creationix/nvm) to install nodejs/npm.
- RingCentral Engage(Dimelo) account, [request a demo](http://site.dimelo.com/en/demo#schedule-demo).

## Quick start

Let's start a simple RingCentral Engage chatbot server that will auto respond to any email with a auto reply.

```bash
# get the code
git clone git@github.com:zxdong262/ringcentral-engage-chatbot-js.git
cd ringcentral-engage-chatbot-js

# install dependecies
npm i

# start proxy server, this will make your local bot server can be accessed by RingCentral service
npm run ngrok

# will show
Forwarding                    https://xxxx.ap.ngrok.io -> localhost:6066
# Remember the https://xxxx.ap.ngrok.io, we will use it later
```

Follow [steps to prepare email source and webhook for chatbot](docs/prepare-email-source-and-webhook.md) to prepare the email source and webhook, if you want to use Dimelo chat, you can check this guide: [step by step guide to enable Dimelo chat](docs/enable-dimelo-chat.md).

```bash
# create env file
cp .env.sample .env
# then edit .env, set proper setting according to the tip in .env

# run local dev server
npm start
```

### Test bot

- Send a email to your predefined email source address, then bot will auto reply with `This is a auto reply by bot`.
- Edit `example-bots/auto-reply-all.js` to set your own reply logic.

### Test bot skill

- Run `npm run dev1` to run bot with skills
- Check `example-bots/auto-reply-all-with-skills.js` and `example-skills/ping-pong-skill.js`

## Youtube video

[https://youtu.be/jFn7TAogss0](https://youtu.be/jFn7TAogss0)

## Use it as CLI tool

```bash
npx ringcentral-engage-chatbot path-to-your-bot.js
```

## Real example

- [https://github.com/zxdong262/ringcentral-engage-bot-template-js](https://github.com/zxdong262/ringcentral-engage-bot-template-js): A simple bot written with ringcentral-engage-chatbot.

## Write a bot

[docs/write-a-bot.md](docs/write-a-bot.md)

## Write a bot skill

[docs/write-use-a-skill.md](docs/write-use-a-skill.md)

## Build and Deploy to AWS Lambda

[deploy-to-lambda.md](docs/deploy-to-lambda.md)

## License

MIT
