const { DiscordAPIError, MessageEmbed } = require("discord.js")

module.exports = {
    name: 'version',
    description: "Shows user what version the bot is currently running on.",
    execute(message, args){
        const Embed = new MessageEmbed()

        .setTitle('I am currently on Version 0.0.2.')

        .setFooter('Version 0.0.2')
        message.channel.send(Embed)

        
        
    }
}