/**
 * handle webhook
 */

import RingCentralEngage from './t'

async function run (props, conf, funcName) {
  const { skills } = conf
  let handled = false
  for (let skill of skills) {
    if (skill[funcName]) {
      let prev = await skill[funcName]({
        ...props,
        shouldUseSignature: conf.shouldUseSignature,
        handled
      })
      handled = handled || prev
    }
  }
  await conf[funcName]({
    ...props,
    handled
  })
}

export default (conf) => {
  return async (req, res) => {
    let { events = [] } = req.body
    if (!events) {
      return res.send('no events')
    }
    let client = new RingCentralEngage(
      process.env.RINGCENTRAL_ENGAGE_API_TOKEN,
      process.env.RINGCENTRAL_ENGAGE_SERVER_URL
    )
    for (let event of events) {
      await run({ event, client }, conf, 'onEvent')
    }
    res.send('ok')
  }
}
