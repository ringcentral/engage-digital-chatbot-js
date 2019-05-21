
import app from './app'

const { DIMELO_CHATBOT_EXPRESS_PORT } = process.env

app.listen(DIMELO_CHATBOT_EXPRESS_PORT, () => {
  console.log(
    `server runs on http://localhost:${DIMELO_CHATBOT_EXPRESS_PORT}`
  )
})
