const Discord = require('discord.js');


module.exports = {
	name: 'fuck',
    description: 'Take someones virginity.',
    cooldown: 5,
	execute(message) {

        var taggedUser = message.mentions.users.first();
    
        const embed = new Discord.RichEmbed()
        .setDescription(`**${message.author.username}** is lonely`)
        .setColor(message.member.displayHexColor)
        if (!message.mentions.users.size) {
            
          return message.channel.send(embed);
        }
    
        const embedMention = new Discord.RichEmbed()
         .setDescription(`**${message.author.username}** takes the viginity of **${taggedUser.username}**`)
         .setColor("RANDOM")
         message.channel.send(embedMention);
      },
};