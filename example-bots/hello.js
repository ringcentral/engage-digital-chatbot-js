/**
 * exmaple bot file
 * reply to hello with hi
 */

import _ from 'lodash'

exports.name = 'Hello bot'

exports.description = 'Bot only respond to email "Hello" with "Hi"'

function isEmailEvent (event) {
  return _.get(event, 'resource.type') === 'emails/email'
}

function reply (event, client) {
  let url = '/1.0/contents'
  let title = 'Auto reply: ' + _.get(event, 'resource.metadata.thread_title')
  let to = [_.get(event, 'resource.metadata.from')]
  let bcc = _.get(event, 'resource.metadata.bcc')
  let cc = _.get(event, 'resource.metadata.cc')
  let body = 'This is a auto reply by bot'
  let rid = _.get(event, 'resource.id')
  return client.post(url, {
    title,
    to,
    bcc,
    cc,
    body,
    in_reply_to_id: rid
  }).catch(e => {
    console.log(e)
  })
}

exports.onEvent = async ({
  event,
  client,
  handled // hanlded by prev skills
}) => {
  if (handled) {
    return
  }
  console.log(event)
  if (isEmailEvent(event)) {
    await reply(event, client)
  }
}
