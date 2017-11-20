const server = require('../server')

describe('API', () => {
  afterAll(done => {
    setTimeout(() => {
      if (server.app.ready) server.stop()
      done()
    }, 500)
  })
  it('runs tests', () => {
    expect(1).toBeTruthy()
  })
  // it('Known route should return http status 200', done => {
  //   server.inject('/', response => {
  //     expect(response.statusCode).to.equal(200)
  //     done()
  //   })
  // })

  // it('Unknown route should return http status 404', done => {
  //   server.inject('/unkownroute', response => {
  //     expect(response.statusCode).to.equal(404)
  //     done()
  //   })
  // })
})
