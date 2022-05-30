const { DiscordAPIError, MessageEmbed } = require("discord.js")

module.exports = {
    name: 'changelog',
    description: "Shows a changelog",
    execute(message, args){

        const Embed = new MessageEmbed()

        .setTitle('Changelog')

        .addField('16/02/2022', "Added `c!changelog`, which introduces the message you are currently seeing :sunglasses:")
        
        .addField('21/12/2021', "Added `c!ban` command (that doesn't work). Added `c!error` which causes an error (self-explanatory).")

        .addField('04/11/2021', "Added footer to `c!info` command (and other embeds). Added `c!ping` (which also doesn't fucking work).")

        .attachFiles(['../CAS Live/commands/channels4_profile.jpg'])

        .setFooter('Version 0.1', 'attachment://channels4_profile.jpg')

        .setTimestamp()
        message.channel.send(Embed)

    }
}