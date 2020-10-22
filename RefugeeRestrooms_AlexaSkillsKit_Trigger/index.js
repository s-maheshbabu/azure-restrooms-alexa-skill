require("app-module-path").addPath(__dirname);

const Alexa = require("ask-sdk-core");

const HelloIntentHandler = {
    canHandle(handlerInput) {
        return true;
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder
            .speak("Hi there Alexa")
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
module.exports = async function (context, event) {
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

    const response = await skill.invoke(event.body, context);
    context.res = {
        status: 200,
        body: response
    };
    return;
}