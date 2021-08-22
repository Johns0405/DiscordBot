module.exports = {
    name: 'tenmanping',
    description: "this is 10 man ping command!",
    execute(message) {
        message.channel.send('@everyone');
    }
}