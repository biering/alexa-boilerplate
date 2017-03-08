
export class ResponseModel {
  constructor() {
    sessionAttributes = {};
    cardTitle = '';
    speechOutput = '';
    repromptText = '';
    shouldEndSession = false;
  }

  get buildSpeechResponse() {
    return {
      outputSpeech: {
        type: "PlainText",
        text: this.speechOutput
      },
      card: {
        type: "Simple",
        title: `SessionSpeechlet - ${this.cardTitle}`,
        content: `SessionSpeechlet - ${this.speechOutput}`
      },
      reprompt: {
        outputSpeech: {
          type: "PlainText",
          text: this.repromptText
        },
        shouldEndSession: this.shouldEndSession
      }
    };
  }
}