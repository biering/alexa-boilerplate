import alexa from 'alexa-app';

app.intent('number', {
  'slots': { 'number': 'AMAZON.NUMBER' },
  'utterances': ['say the number {-|number}']
}, (request, response) => {
  var number = request.slot('number');
  response.say(`You asked for the number ${number}`);
});

// connect the alexa-app to AWS Lambda
exports.handler = app.lambda();