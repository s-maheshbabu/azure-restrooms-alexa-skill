const Alexa = require("ask-sdk-core");

const HelloIntentHandler = {
    canHandle(handlerInput) {
        return true;
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder
            .speak("Hi there Alexa Code")
            .withShouldEndSession(true)
            .getResponse();
    }
};

const LogResponseInterceptor = {
    process(handlerInput, response) {
        console.log(`RESPONSE = ${JSON.stringify(response)}`);
    },
};

let skill;
module.exports = async function (event, context) {
    if (!skill) {
        skill = Alexa.SkillBuilders.custom()
            .addRequestHandlers(
                HelloIntentHandler)
            .addResponseInterceptors(
                LogResponseInterceptor,
            )
            .withApiClient(new Alexa.DefaultApiClient())
            .create();
    }

    return skill.invoke(event, context);
}