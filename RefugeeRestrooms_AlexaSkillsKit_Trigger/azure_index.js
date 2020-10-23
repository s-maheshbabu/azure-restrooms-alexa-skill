require("app-module-path").addPath(__dirname);
const index = require("index");

module.exports = async function (context, event) {
    const response = await index(event.body, context);
    context.res = {
        status: 200,
        body: response
    };
    return;
}