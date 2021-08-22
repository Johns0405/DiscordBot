module.exports = {
    name: 'disconnect',
    description: "this is a fortnite disconnect command!",
    execute(message) {
        const member =  message.author
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id)
            if( memberTarget.voice) {
            memberTarget.voice.disconnect();
            }
            message.channel.send(`${member} You fucking buffoon! Why would you even bring up fortnite!`);
        }
        else {
            message.channel.send('couldnt disconnect that member');
        }
    }
}