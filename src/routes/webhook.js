/**
 * handle webhook
 */

import RingCentralEngage from 'ringcentral-engage-client'
import _ from 'lodash'

/* istanbul ignore next */
async function run (props, conf, funcName) {
  const { skills = [] } = conf
  let handled = false
  for (const skill of skills) {
    if (skill[funcName]) {
      const prev = await skill[funcName]({
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
    const url = '/1.0/contents'
    const toId = _.get(event, 'resource.metadata.from')
    const to = toId ? [toId] : undefined
    const bcc = _.get(event, 'resource.metadata.bcc')
    const cc = _.get(event, 'resource.metadata.cc')
    const rid = _.get(event, 'resource.id')
    const priv = !!_.get(event, 'resource.metadata.private')
    const reply = {
      to,
      bcc,
      cc,
      body: '',
      private: priv,
      in_reply_to_id: rid,
      ...messageObj
    }

    if (event.resource.type === 'twtr/tweet') {
      const uid = _.get(event, 'resource.metadata.author_id')
      const res = await this.get(`/1.0/identities/${uid}`).catch(e => {
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
    const { events } = req.body
    /* istanbul ignore next */
    if (!events) {
      res.send('no events')
      return
    }
    /* istanbul ignore next */
    const client = new Client({
      apiToken: process.env.RINGCENTRAL_ENGAGE_API_TOKEN,
      server: process.env.RINGCENTRAL_ENGAGE_SERVER_URL
    })
    /* istanbul ignore next */
    for (const event of events) {
      await run({ event, client }, conf, 'onEvent')
    }
    /* istanbul ignore next */
    res.send('ok')
  }
}
