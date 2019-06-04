/**
 * exmaple bot file
 * reply to hello with hi
 */

const _ = require('lodash')
const pp = require('../example-skills/ping-pong-skill')

exports.name = 'Hello bot'

exports.description = 'Bot auto respond to every message.'

function reply (event, client) {
  let url = '/1.0/contents'
  let title = 'Auto reply: ' + _.get(event, 'resource.metadata.thread_title')
  let to = [_.get(event, 'resource.metadata.from')]
  let bcc = _.get(event, 'resource.metadata.bcc')
  let cc = _.get(event, 'resource.metadata.cc')
  let body = 'This is a auto reply by bot'
  let rid = _.get(event, 'resource.id')
  let priv = _.get(event, 'resource.metadata.private')
  return client.post(url, {
    title,
    to,
    bcc,
    cc,
    body,
    private: priv ? 1 : undefined,
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
  await reply(event, client)
}

exports.skills = [pp]
