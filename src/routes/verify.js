
const VERIFY_TOKEN = process.env.DIMELO_CHATBOT_VERIFY_TOKEN

// verify dimelo webhook
export default (req, res) => {
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
