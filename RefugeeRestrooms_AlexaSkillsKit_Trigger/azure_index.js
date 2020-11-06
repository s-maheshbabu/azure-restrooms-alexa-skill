const index = require("../src/index");

module.exports = async function (context, event) {
    const response = await index.handler(event.body, context);
    context.res = {
        status: 200,
        body: response
    };
    return;
}