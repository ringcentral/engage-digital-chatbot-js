/* istanbul ignore file */
/**
 * exmaple bot file
 * reply to hello with hi
 */

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
    body: 'this is a auto reply body'
  })
}
