
# ringcentral-engage-chatbot

[RingCentral Engage(Dimelo)](https://www.dimelo.com/en/dimelo-digital) bot framework for js. [api docs](https://github.com/ringcentral/ringcentral-api-specs/tree/master/specs/dimelo-api).

## Prerequisites

- Nodejs 8.10+/npm, recommend using [nvm](https://github.com/creationix/nvm) to install nodejs/npm.
- RingCentral Engage(Dimelo) account, [request a demo](http://site.dimelo.com/en/demo#schedule-demo).

## Quick start

Let's start a simple RingCentral Engage chatbot server that will auto respond to any email with `Hi`.

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

- RingCentral Engage(Dimelo) accout, [request a demo](http://site.dimelo.com/en/demo#schedule-demo).
- Login to your RingCentral Engage(Dimelo) admin console.
- Create a community in RingCentral Engage Digital -> admin -> community.
- Create email source in RingCentral Engage Digital -> admin -> Source, make sure it enabled and active. You only need input a email address in POSTMARK SETTINGS -> Email Address, leave other default.
- Go to RingCentral Engage Digital -> admin -> Agents, click the key icon, give your self read/reply/initiate discussion permission, but make sure do not check Approval required.
- Create a api token in RingCentral Engage Digital -> admin -> API access tokens, select your self as agent.
- Create webhook in RingCentral Engage Digital -> admin -> Webhooks, Registered events, select `content.imported`.

```bash
# create env file
cp .env.sample .env
# then edit .env, set proper setting according to the tip in .env

# run local dev server
npm start
```

### Test bot

- Send a email to your predefined email source address, then bot will auto reply with `This is a auto reply by bot`.
- Edit `example-bots/hello.js` to set your own reply logic.

## Youtube video

[https://youtu.be/jFn7TAogss0](https://youtu.be/jFn7TAogss0)

## Use it as CLI tool

```bash
npx ringcentral-engage-chatbot path-to-your-bot.js
```

## Real example

- [https://github.com/zxdong262/ringcentral-engage-bot-template-js](https://github.com/zxdong262/ringcentral-engage-bot-template-js)

## todos

- Bot examples
- Skill examples
- Tests
- Deploy to lambda

## License

MIT
