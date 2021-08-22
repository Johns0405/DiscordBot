module.exports = {
    name: 'valorant',
    description: "this is a valorant disconnect command!",
    execute(message) {
        const member =  message.author
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id)
            if( memberTarget.voice) {
            memberTarget.voice.disconnect();
            }
            message.channel.send(`${member} CSGO is the better game`);
        }
        else {
            message.channel.send('couldnt disconnect that member');
        }
    }
}