
import _ from 'lodash'
import axios from 'axios'

const VERIFY_TOKEN = process.env.DIMELO_CHATBOT_VERIFY_TOKEN
const SERVER = process.env.DIMELO_SERVER
const TOKEN = process.env.DIMELO_CHATBOT_API_TOKEN

// verify dimelo webhook
export const verify = (req, res) => {
  let q = req.query || {}
  let mode = q['hub.mode']
  let c = q['hub.challenge']
  let vt = q['hub.verify_token']
  if (mode !== 'subscribe') {
    return res.status(400).send('mode not right')
  } else if (!c) {
    return res.status(400).send('challenge not exist')
  } else if (vt !== VERIFY_TOKEN) {
    return res.status(400).send('VERIFY_TOKEN not right')
  }
  res.send(c)
}

function isEmailEvent(event) {
  return _.get(event, 'resource.type') === 'emails/email'
}

/*
Extra parameters:
RingCentral Engage Digital - REST API | 59/103
● author_id: The identity id of content. This parameter is not mandatory, by default it use the
token’s user first identity on source.
● body: The content’s body. This parameter is mandatory.
● in_reply_to_id: The content’s id you want to reply to. If omitted, a new discussion will be
created. If source does not support to initiate discussion this parameter is mandatory.
● private: Created contents are public by default, set this parameter to "1" in order to create a
private reply. It is NOT supported on every source.
● source_id: The source to create content to. If you specify in_reply_to_id parameter, source
will be determined from it. Otherwise, this parameter is mandatory.
● attachment_ids: An array containing the attachments’ ids that need to be attached to this
content.
Authorization: only users that can reply or initiate discussion (= compose) on given source. it
renders also an error if in_reply_to isn’t synchronized or if in_reply_to content is not under an open
intervention.

Emails
When creating a content on an email source, some other parameters will be required/available.
Extra parameters:
● title: The subject of the email. This parameter is mandatory when initiating a discussion.
● to: An array containing the email addresses used in the “To” section of the email. This
parameter is mandatory when initiating a discussion.
● cc: An array containing the email addresses used in the “Cc” section of the email.
● bcc: An array containing the email addresses used in the “Bcc” section of the email.
*/
async function reply(event) {
  let url = `${SERVER}/1.0/contents`
  let title = 'Auto reply: ' + _.get(event, 'resource.metadata.thread_title')
  let to = [_.get(event, 'resource.metadata.from')]
  let bcc = _.get(event, 'resource.metadata.bcc')
  let cc = _.get(event, 'resource.metadata.cc')
  let body = 'This is a auto reply by bot'
  let in_reply_to_id = _.get(event, 'resource.id')
  return axios.post(url, {
    title,
    to,
    bcc,
    cc,
    body,
    in_reply_to_id
  }, {
    headers: {
      Authorization: `Bearer ${TOKEN}`
    }
  })
}

// handle dimelo webhook subscribed email
export const handler = async (req, res) => {
  let {body} = req
  let {events = []} = body
  for (let event of events) {
    await reply(event)
  }
  res.send('ok')
}
