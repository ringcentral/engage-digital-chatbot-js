/**
 * exmaple bot file with custom reply function
 * reply to hello with hi
 */

const _ = require('lodash')

exports.name = 'Hello bot'

exports.description = 'Bot only respond to email "Hello" with "Hi"'

function isEmailEvent (event) {
  return _.get(event, 'resource.type') === 'emails/email'
}

function reply (event, client) {
  const url = '/1.0/contents'
  const title = 'Auto reply: ' + _.get(event, 'resource.metadata.thread_title')
  const to = [_.get(event, 'resource.metadata.from')]
  const bcc = _.get(event, 'resource.metadata.bcc')
  const cc = _.get(event, 'resource.metadata.cc')
  const body = 'This is a auto reply by bot'
  const rid = _.get(event, 'resource.id')
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
