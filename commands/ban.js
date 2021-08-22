module.exports = {
    name: 'ban',
    description: "this is a ban command!",
    execute(message) {
        const member =  message.author
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id)
            memberTarget.ban()
            message.channel.send('User has been banned!');
        }
        else {
            message.channel.send('You couldnt ban that member');
        }
    }
}