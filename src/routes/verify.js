
const VERIFY_TOKEN = process.env.RINGCENTRAL_ENGAGE_VERIFY_TOKEN

// verify dimelo webhook
export default (req, res) => {
  const q = req.query || {}
  const mode = q['hub.mode']
  const c = q['hub.challenge']
  const vt = q['hub.verify_token']
  /* istanbul ignore next */
  if (mode !== 'subscribe') {
    console.log('1')
    return res.status(400).send('mode not right')
    /* istanbul ignore file */
  } else if (!c) {
    console.log('11')
    return res.status(400).send('challenge not exist')
    /* istanbul ignore file */
  } else if (vt !== VERIFY_TOKEN) {
    console.log('111')
    return res.status(400).send('VERIFY_TOKEN not right')
  }
  res.send(c)
}
