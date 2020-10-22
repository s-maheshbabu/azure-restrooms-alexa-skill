module.exports = async function (context, event) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (event.query.name || (event.body && event.body.name));
    const responseMessage = name
        ? "Hello, " + name + ". Modified Code. This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    const alexaResponse = `{"version":"1.0","response":{"outputSpeech":{"type":"SSML","ssml":"<speak>I found this positively rated restroom 0.36 miles away. <s>Pagliacci Pizza<\/s> <say-as interpret-as=\"address\"> 3015 E Madison <\/say-as>, Seattle. I also sent this and more restrooms to your email.<\/speak>"}},"shouldEndSession":true}`;
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: alexaResponse
    };
}