const Discord = { Client, Intents, DiscordAPIError } = require('discord.js');
const config = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const token = config.DiscordToken;

const prefix = '-'

const fs = require('fs')

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('messageCreate', message =>{

    //Don't track what the bot says
    if (message.author.bot) {
        return
    }

    //Everything here  must be called without the prefix and included in the if statement above
    if(message.content.toLowerCase().includes('847') || message.content.toLowerCase().includes('8:47')
    || message.content.toLowerCase().includes('10 man')){
        client.commands.get('tenmanping').execute(message);
        return;
    }

    if(message.content.toLowerCase().includes('among us')){
        client.commands.get('amongus').execute(message);
        return;
    }

    if(message.content.toLowerCase().includes('fortnite')){
        client.commands.get('disconnect').execute(message);
        return
    }

    if(message.content.toLowerCase().includes('valorant')){
        client.commands.get('valorant').execute(message);
        return
    }
    if(message.content.toLowerCase().includes('fortnight')){
        client.commands.get('fortnight').execute(message);
        return
    }

    if(message.content.toLowerCase().includes('mouse mover') || message.content.toLowerCase().includes('afktech')){
        client.commands.get('mousemover').execute(message);
        return
    }

    if (!message.content.startsWith(prefix)) return;

    //Everything past this must be called using the prefix '-'
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
       client.commands.get('ping').execute(message, args);
       return
    }
   else if(command === 'help'){
        client.commands.get('help').execute(message, args);
        return
     }
     else  if(command === 'yt'){
        client.commands.get('youtube').execute(message, args);
        return
     }
 
 



})





client.on('ready', () => {
    console.log('BonerBot is online');
})

client.login(token);