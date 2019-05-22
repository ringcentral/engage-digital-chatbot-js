/**
 * exmaple bot file
 * reply to hello with hi
 */

import _ from 'lodash'
import axios from 'axios'

const SERVER = process.env.DIMELO_SERVER
const TOKEN = process.env.DIMELO_CHATBOT_API_TOKEN

exports.name = 'Hello bot'

exports.description = 'Bot only respond to "Hello"'

function isEmailEvent (event) {
  return _.get(event, 'resource.type') === 'emails/email'
}

async function reply (event) {
  let url = `${SERVER}/1.0/contents`
  let title = 'Auto reply: ' + _.get(event, 'resource.metadata.thread_title')
  let to = [_.get(event, 'resource.metadata.from')]
  let bcc = _.get(event, 'resource.metadata.bcc')
  let cc = _.get(event, 'resource.metadata.cc')
  let body = 'This is a auto reply by bot'
  let rid = _.get(event, 'resource.id')
  return axios.post(url, {
    title,
    to,
    bcc,
    cc,
    body,
    in_reply_to_id: rid
  }, {
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  })
}

exports.onEvent = async ({
  event,
  handled // hanlded by prev skills
}) => {
  if (handled) {
    return
  }
  if (isEmailEvent(event)) {
    await reply(event)
  }
}
