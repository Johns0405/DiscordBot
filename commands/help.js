module.exports = {
    name: 'help',
    description: "this is a help command!",
    execute(message, args) {
        message.channel.send(`
        Supported Commands:

        **-help** - Displays the commands for BonerBot
        **among us** - Sends a message saying "Get among some bitches"
        **fortnite** - Kicks you from VoiceChat if you are in one and calls you a buffoon in chat
        **fortnight** - Can't help stupid
        **mouse mover** or **AFKTech** - Returns the best mouse mover amazon link on the market
       `);
    }
}