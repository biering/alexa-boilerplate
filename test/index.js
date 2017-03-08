const context = require('aws-lambda-mock-context')
const expect  = require('chai').expect
const input   = require('./input.json')
import Handler from '../src/index'

const ctx = context()

describe('Testing the HelloIntent', function () {
  var speechResponse = null
  var speechError = null

  before(function (done) {
    Handler(input, ctx)
    ctx.Promise
      .then(response => {
        speechResponse = response
        console.log(speechResponse)
        done()
      })
      .catch(error => {
        speechError = error
        done()
      })
  })

  describe('Is the response structurally correct', function () {
    it('should not have errored', function () {
      expect(speechError).to.be.null
    })
  })
})
