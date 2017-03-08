import * as Alexa from 'alexa-sdk'

const handlers = {
  'AboutIntent' () {
    let self = this
    let speechOutput = 'Hello World'
    self.emit(':tellWithCard', speechOutput, "Skill", speechOutput)
  },

  'HelloIntent' () {
    let self = this
    let intentRequest = self.event.request
    let value = intentRequest.intent.slots.Word.value
    let speechOutput = ''
    if (value.toLowerCase() === 'hello') {
      speechOutput = 'The translation is Hola'
    } else {
      speechOutput = "I don't know"
    }
    self.emit(':tellWithCard', speechOutput, "Skill", speechOutput)
  }
}

const Handler = function (event, context, callback) {
  let alexa = Alexa.handler(event, context)
  alexa.appId = 'amzn1.ask.skill.37dabde4-ab1b-4ffa-a199-e7206657db04'
  alexa.registerHandlers(handlers)
  alexa.execute()
}

exports.handler = Handler
export default Handler
