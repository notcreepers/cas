const { DiscordAPIError, MessageEmbed, MessageMentions } = require("discord.js")

module.exports = {
    name: 'ban',
    description: "Bans the mentioned user",
    execute(message, args){
        
        const user = message.mentions.users.first();
        const member = message.guild.member(user);

        member
          .ban({
            reason: 'idk',
          })
          .then(() => 
            message.channel.send("they was banned chief"))
            .catch(err => {
                message.channel.send("somethin happened, don't know what the fuck did but somethin did");
                console.error(err);
              });
            
         
        
    }
}