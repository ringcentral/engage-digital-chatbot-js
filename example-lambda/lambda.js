
/**
 * lambda file
 */
import serverlessHTTP from 'serverless-http'
import app from './server'

exports.app = serverlessHTTP(app)
