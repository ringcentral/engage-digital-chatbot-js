// based on tyler's work: https://github.com/tylerlong/ringcentral-js-concise
import axios from 'axios'

const version = process.env.version

class HTTPError extends Error {
  constructor (status, statusText, data, config) {
    super(`status: ${status}
statusText: ${statusText}
data: ${JSON.stringify(data, null, 2)}
config: ${JSON.stringify(config, null, 2)}`)
    this.status = status
    this.statusText = statusText
    this.data = data
    this.config = config
  }
}

class RingCentralEngage {
  constructor (apiToken, server) {
    this.server = server
    this.apiToken = apiToken
    this._axios = axios.create()
    const request = this._axios.request.bind(this._axios)
    this._axios.request = (config) => {
      try {
        return request(config)
      } catch (e) {
        if (e.response) {
          throw new HTTPError(e.response.status, e.response.statusText, e.response.data, e.response.config)
        } else {
          throw e
        }
      }
    }
  }

  request (config) {
    let uri = config.url.startsWith('http')
      ? config.url
      : this.server + config.url
    console.log(this._patchHeaders(config.headers))
    return this._axios.request({
      ...config,
      url: uri.toString(),
      headers: this._patchHeaders(config.headers)
    })
  }

  get (url, config = {}) {
    return this.request({ ...config, method: 'get', url })
  }

  delete (url, config = {}) {
    return this.request({ ...config, method: 'delete', url })
  }

  post (url, data = undefined, config = {}) {
    return this.request({ ...config, method: 'post', url, data })
  }

  put (url, data = undefined, config = {}) {
    return this.request({ ...config, method: 'put', url, data })
  }

  patch (url, data = undefined, config = {}) {
    return this.request({ ...config, method: 'patch', url, data })
  }

  _patchHeaders (headers) {
    const userAgentHeader = `ringcentral-engage-client-js/v${version}`
    return {
      ...headers,
      ...this._bearerAuthorizationHeader(),
      'X-User-Agent': userAgentHeader,
      'RC-User-Agent': userAgentHeader
    }
  }

  _bearerAuthorizationHeader () {
    return {
      Authorization: `Bearer ${this.apiToken}`
    }
  }
}

export default RingCentralEngage
