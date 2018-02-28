
const restify = require('restify')
const server = restify.createServer()
const routes = require('../http/routes')
const cors = require('./cors')
const client = require('./client')

server.pre(cors.preflight)
server.use(cors.actual)
server.use(restify.plugins.bodyParser())

client.start()

routes(server)

module.exports = server
