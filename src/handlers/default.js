/* istanbul ignore file */
/**
 * default handler
 */

/**
 * this example bot would show full config
 */

// handle all events
export const onEvent = ({
  event,
  client
}) => {
  console.log(event)
}

// extends express app as you need
export const appExtend = (app) => {
  // app.get('/some-route', (req, res) => res.end('some'))
}

// export skills
// check skill-examples/*.js for skill examples
/*
import skillA from 'skill-a'
import skillB from 'skill-b'
export const skills = [skillA, skillB]
*/

export const skills = []

export const name = 'No name'
export const description = 'No desc'
export const homepage = ''
