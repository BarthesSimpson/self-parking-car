'use strict'

const Hapi = require('hapi')

const server = new Hapi.Server()
server.connection({
  host: 'localhost',
  port: 8000
})

//routes
server.route({
  method: 'GET',
  path: '/hello',
  handler: (request, reply) => {
    reply('hello world')
  }
})

//start server
server.start(err => {
  if (err) throw err
  console.log('Server running at:', server.info.uri)
  server.app.ready = true
})

module.exports = server
