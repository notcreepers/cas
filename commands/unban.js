const { DiscordAPIError, MessageEmbed, MessageMentions } = require("discord.js")

module.exports = {
    name: 'unban',
    description: "Unbans the mentioned user",
    execute(message, args){
        
        const user = message.mentions.users.first();
        const member = message.guild.member(user);

        user
          .unban({
            reason: 'idk',
          })
          .then(() => 
            message.channel.send("they was unbanned chief"))
            .catch(err => {
                message.channel.send("somethin happened, don't know what the fuck did but somethin did");
                console.error(err);
              });
            
         
        
    }
}