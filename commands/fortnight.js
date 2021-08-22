module.exports = {
    name: 'fortnight',
    description: "this is a fortnight stupid command!",
    execute(message) {
        const member =  message.author
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id)
            message.channel.send(`${member} Can't help stupidity, sorry.`);
        }
        else {
            message.channel.send('Cant help stupid');
        }
    }
}