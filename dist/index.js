'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alexaSdk = require('alexa-sdk');

var Alexa = _interopRequireWildcard(_alexaSdk);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var handlers = {
  'AboutIntent': function AboutIntent() {
    var self = this;
    var speechOutput = 'This skill was written by Christoph Biering';
    self.emit(':tellWithCard', speechOutput, "Chris's Skill", speechOutput);
  },
  'HelloIntent': function HelloIntent() {
    var self = this;
    var intentRequest = self.event.request;
    var value = intentRequest.intent.slots.Word.value;
    var speechOutput = '';
    if (value.toLowerCase() === 'hello') {
      speechOutput = 'The translation is Hola';
    } else {
      speechOutput = "I'm to stupid for this";
    }
    self.emit(':tellWithCard', speechOutput, "Chris's Skill", speechOutput);
  }
};

var Handler = function Handler(event, context, callback) {
  var alexa = Alexa.handler(event, context);
  alexa.appId = 'amzn1.ask.skill.37dabde4-ab1b-4ffa-a199-e7206657db04';
  alexa.registerHandlers(handlers);
  alexa.execute();
};

exports.handler = Handler;
exports.default = Handler;