const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = 'c!';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name,command);

}

module.exports = {
    name: 'ready',
    once:true,
async execute(client) {
    client.once('Ready!', () => {
        console.log('Get ready to cry!');
    
        
    });
    }
}


client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    client.user.setPresence("PLAYING", 'I WANNA DIE') 

    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.channel.send(':no_entry_sign: Sorry, an unknown error has occured.');
    }
});
client.login(' ')
