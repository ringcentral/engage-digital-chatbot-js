/**
 * exmaple ping-pong bot skill file
 * reply to 'ping' with 'pong'
 */

const cheerio = require('cheerio')
const _ = require('lodash')

exports.name = 'ping-pong bot skill'

exports.description = 'reply to "ping" with "pong"'

function isPing (event) {
  const $ = cheerio.load(_.get(event, 'resource.metadata.body'))
  const txt = $('body').text().trim()
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
    await client.reply(event, {
      title: 'pong',
      body: 'pong'
    })
    return true
  }
}
