/* eslint-env jest */

import pack from '../package.json'
import axios from 'axios'

require('dotenv').config()

const {
  RINGCENTRAL_ENGAGE_VERIFY_TOKEN
} = process.env

function wait (time) {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}

jest.setTimeout(99999)

describe(pack.name, function () {
  test('server runs', async () => {
    // let res = await execPromise(pack.scripts.dev)
    // console.log(res, 'res')
    // expect(
    //   res.includes('server running at: http://localhost:3000')
    // ).toEqual(true)
    await wait(500)
    let c = '1'
    let url1 = `http://localhost:3000/rc/webhook?hub.mode=subscribe&hub.challenge=${c}&hub.verify_token=${RINGCENTRAL_ENGAGE_VERIFY_TOKEN}`
    let res1 = await axios.get(url1).then(r => r.data)
    expect(res1.toString()).toEqual(c)
  })
})
