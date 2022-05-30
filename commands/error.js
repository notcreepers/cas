const { DiscordAPIError, MessageEmbed } = require("discord.js")

module.exports = {
    name: 'error',
    description: "Causes an error, dumbass",
    execute(message, args){
        
        message.channel.send(attachment);

    }
}