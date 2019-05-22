/**
 * exmaple bot file
 * reply to hello with hi
 */

exports.name = 'Hello bot'

exports.description = 'Bot only respond to "Hello"'

exports.onEvent = async ({
  event,
  handled, // hanlded by prev skills
  shouldUseSignature // should use signature like "send by bot skill xxx" in message.
}) => {
  let sign = shouldUseSignature
    ? `\n<send by [${exports.name}](${exports.homepage})>`
    : ''
  if (textFiltered === 'hello') {
    await user.sendMessage(group.id, {
      text: 'Hi' + sign
    })
  }
}
