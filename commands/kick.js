module.exports = {
    name: 'kick',
    description: "this kick command!",
    execute(message) {
        const member =  message.author
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id)
            memberTarget.kick()
            message.channel.send('User has been kicked!');
        }
        else {
            message.channel.send('You couldnt kick that member');
        }
    }
}