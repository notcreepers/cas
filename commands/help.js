const { DiscordAPIError, MessageEmbed } = require("discord.js")

module.exports = {
    name: 'help',
    description: "Shows user the current commands.",
    execute(message, args){
        

        const Embed = new MessageEmbed()

        .setTitle('Commands')

        .addField('c!ping', 'Displays latency between your message and the bot. (Currently Not Working)')

        .addField('c!version' , 'Displays version number of the bot.')

        .addField('c!giveperms', 'Legend says running this command gives you admin powers. Do you dare run it?')

        .addField('c!help', 'Sends this message.')

        .addField('c!info', 'Displays info about the bot.')

        .addField('c!changelog', 'Displays every change made within a certain timeframe.')

        .setColor()

        .setFooter('Version 0.1')
        message.channel.send(Embed)

        
        
    }
}