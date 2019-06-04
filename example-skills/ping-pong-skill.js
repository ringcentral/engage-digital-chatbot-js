/**
 * exmaple ping-pong bot skill file
 * reply to 'ping' with 'pong'
 */

const cheerio = require('cheerio')
const _ = require('lodash')

exports.name = 'ping-pong bot skill'

exports.description = 'reply to "ping" with "pong"'

function reply (event, client) {
  let url = '/1.0/contents'
  let title = 'Auto reply: ' + _.get(event, 'resource.metadata.thread_title')
  let to = [_.get(event, 'resource.metadata.from')]
  let bcc = _.get(event, 'resource.metadata.bcc')
  let cc = _.get(event, 'resource.metadata.cc')
  let body = 'pong'
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

function isPing (event) {
  let $ = cheerio.load(_.get(event, 'resource.metadata.body'))
  let txt = $('body').text().trim()
  console.log('txt:', txt)
  return txt === 'ping'
}

exports.onEvent = async ({
  event,
  client,
  handled // hanlded by prev skills
}) => {
  if (handled) {
    return
  }
  if (isPing(event)) {
    await reply(event, client)
    return true
  }
}
