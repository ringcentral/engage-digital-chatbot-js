/**
 * handle webhook
 */

import _ from 'lodash'

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
    await run({ events }, conf, 'onEvent')
    res.send('ok')
  }
}
