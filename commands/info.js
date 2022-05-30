const { DiscordAPIError, MessageEmbed } = require("discord.js")

module.exports = {
    name: 'info',
    description: "Shows information about the bot, ping, version",
    execute(message, args){
        const ping = message.createdTimestamp - Date.now()

        const Embed = new MessageEmbed()

        .setTitle('Bot Information')

        .addField('Username', "Creepers' Anime Storage#2745")

        .addField('Discord ID', '530934512675192842')

        .addField('Version', 'Version 0.1')
        
        .addField('Latency', ping + ' ms')

        .attachFiles(['../CAS Live/commands/channels4_profile.jpg'])

        .setFooter('Version 0.1', 'attachment://channels4_profile.jpg')

        .setTimestamp()
        message.channel.send(Embed)

        
        
    }
}