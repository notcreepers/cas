const { DiscordAPIError, MessageEmbed } = require("discord.js")

module.exports = {
    name: 'ping',
    description: "Allows user to check the bot's latency between their message.",
    execute(message, args){
        const ping = message.createdTimestamp - Date.now()

        const Embed = new MessageEmbed()

        .setTitle(':ping_pong: Pong!')

        .addField('Latency', ping + ' ms')

        .setColor()

        .setFooter('Version 0.1')
        message.channel.send(Embed)

        
        
    }
}
