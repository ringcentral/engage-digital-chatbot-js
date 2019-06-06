/**
 * exmaple bot file
 * reply to hello with hi
 */

const _ = require('lodash')
const pp = require('../example-skills/ping-pong-skill')

exports.name = 'Hello bot'

exports.description = 'Bot auto respond to every message.'

exports.onEvent = async ({
  event,
  client,
  handled // hanlded by prev skills
}) => {
  if (handled) {
    return
  }
  console.log(event)
  await client.reply(event, {
    title: 'this is a auto reply title',
    body: 'this is a auto reply body'
  })
}

exports.skills = [pp]
