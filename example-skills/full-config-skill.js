/**
 * this example bot would show full config
 */

exports.name = 'Bot skill name'
exports.description = 'Bot skill description'
exports.homepage = 'https://xxx.xxx'

// event handler
exports.onEvent = async ({
  event,
  client,
  handled // hanlded by prev skills
}) => {
  if (handled) {
    return
  }
  console.log(event)
}

// extends express app as you need
exports.appExtend = (app) => {
  app.get('/some-route', (req, res) => res.end('some'))
}
