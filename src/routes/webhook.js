/**
 * handle webhook
 */

import RingCentralEngage from 'ringcentral-engage-client'
import _ from 'lodash'

/* istanbul ignore next */
async function run (props, conf, funcName) {
  const { skills = [] } = conf
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

/* istanbul ignore next */
class Client extends RingCentralEngage {
  async reply (event, messageObj) {
    if (!messageObj) {
      throw new Error('message object required')
    } else if (!messageObj.title && !messageObj.body) {
      throw new Error('message object title or body required')
    }
    let url = '/1.0/contents'
    let toId = _.get(event, 'resource.metadata.from')
    let to = toId ? [toId] : undefined
    let bcc = _.get(event, 'resource.metadata.bcc')
    let cc = _.get(event, 'resource.metadata.cc')
    let rid = _.get(event, 'resource.id')
    let priv = _.get(event, 'resource.metadata.private')
    priv = !!priv
    let reply = {
      to,
      bcc,
      cc,
      body: '',
      private: priv,
      in_reply_to_id: rid,
      ...messageObj
    }

    if (event.resource.type === 'twtr/tweet') {
      let uid = _.get(event, 'resource.metadata.author_id')
      let res = await this.get(`/1.0/identities/${uid}`).catch(e => {
        console.log(e)
      })
      if (res && res.data) {
        reply.body = `@${res.data.uuid} ${reply.body}`
      }
    }

    return this.post(url, reply).catch(e => {
      console.log(e)
    })
  }
}

export default (conf) => {
  return async (req, res) => {
    let { events = [] } = req.body
    if (!events || !events.length) {
      return res.send('no events')
    }
    /* istanbul ignore next */
    let client = new Client(
      process.env.RINGCENTRAL_ENGAGE_API_TOKEN,
      process.env.RINGCENTRAL_ENGAGE_SERVER_URL
    )
    /* istanbul ignore next */
    for (let event of events) {
      await run({ event, client }, conf, 'onEvent')
    }
    res.send('ok')
  }
}
