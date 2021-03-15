/* istanbul ignore file */
/**
 * exmaple bot file
 * reply with structured-messages
 * from https://github.com/ringcentral-tutorials/engage-digital-structured-messages-demo/blob/master/server.js
 */

exports.name = 'Hello bot'

exports.description = 'Bot auto respond to every message.'

// function isEngageMessage (event) {
//   return _.get(event, 'resource.type') === 'emails/email'
// }

exports.onEvent = async ({
  event,
  client,
  handled // hanlded by prev skills
}) => {
  if (handled) {
    return
  }
  console.log(event)
  let messageObject = {
    body: 'Hi~, you can type "select", "link", "template" or "carousel" to get structured message'
  }
  if (event.resource.metadata.body.includes('select')) {
    messageObject = {
      body: '>this is the primary message that will be send to the cliend. E.g. Hi, what do you want to buy?<',
      structured_content: {
        center_items: false,
        disable_text_input: false,
        type: 'select',
        items: [
          { title: 'Laptop' }, { title: 'Desktop PC' }, { title: 'Mobile phone' }, { title: 'Webcamera' }, { title: 'Notebook' }, { title: 'Pocket PC' }, { title: 'iWatch' }, { title: 'Other watch' }
        ]
      }
    }
  } else if (event.resource.metadata.body.includes('link')) {
    messageObject = {
      body: 'Link:',
      structured_content: {
        type: 'rich_link',
        url: 'https://github.com/ringcentral',
        url_text: 'GitHub',
        title: 'RingCentral, Inc.',
        subtitle: 'Cloud Business Communications. RingCentral, Inc. has 84 repositories available. Follow their code on GitHub.',
        attachment_id: '6021087444172c000b93e69a' // get attachment id from https://developers.ringcentral.com/engage/digital/guide/basics/uploads
      }
    }
  } else if (event.resource.metadata.body.includes('carousel')) {
    messageObject = {
      body: 'Carousel:',
      structured_content: {
        type: 'carousel',
        items: [
          {
            url: 'https://www.yandex.ru',
            url_text: 'Yandex search',
            title: 'YANDEX | Top rus search engine',
            attachment_id: '6021078144172c000b93e68c',
            items: [
              { type: 'url', title: 'Go to yandex page', url: 'https://www.yandex.ru' },
              { type: 'reply', title: 'Next show', payload: 'next' }
            ]
          },
          {
            url: 'https://www.google.com/',
            url_text: 'Google search',
            title: 'GOOGLE | The best search engine',
            attachment_id: '6021079444172c000b93e68d',
            items: [
              { type: 'url', title: 'Go to google website', url: 'https://www.google.com/' }, { type: 'reply', title: 'Next show', payload: 'next' }
            ]
          },
          {
            url: 'https://www.netflix.com/fr-en/title/80057281',
            url_text: 'Bing search',
            title: 'BING | Microsoft search',
            attachment_id: '602107a2d6d785000c9b762f',
            items: [
              { type: 'url', title: 'Go to bing website', url: 'https://www.bing.com/' }, { type: 'reply', title: 'Next show', payload: 'next' }
            ]
          }
        ]
      }
    }
  } else if (event.resource.metadata.body.includes('template')) {
    messageObject = {
      body: 'template:',
      structured_content: {
        type: 'template',
        attachment_id: '60203f27aaf715000b9e4c15',
        url: 'https://developers.ringcentral.com/',
        url_text: 'RingCentral Developers',
        title: 'RingCentral | Developers',
        items: [
          {
            type: 'url',
            title: 'Office Guide',
            url: 'https://developers.ringcentral.com/guide'
          },
          {
            type: 'url',
            title: 'Engage Digital Guide',
            url: 'https://developers.ringcentral.com/engage/digital/guide'
          }
        ]
      }
    }
  }
  await client.reply(event, messageObject)
}
