const Discord = require('discord.js');


module.exports = {
	name: 'gay',
    description: 'Gay meter.',
    cooldown: 5,
	execute(message) {

        var taggedUser = message.mentions.users.first();

      let gayMath = Math.floor(Math.random() * 101) + 1;
      const embed = new Discord.RichEmbed()
      .setAuthor('gay rate', message.author.avatarURL)
      .setDescription(`**${message.author.username}** is \`${gayMath}\`% gay 🏳️‍🌈`)
      .setColor(message.member.displayHexColor)
      .setFooter('the gay rate machine is 99% accurate')
      if (!message.mentions.users.size) {
          
        return message.channel.send(embed);
      }

      const embedMention = new Discord.RichEmbed()
       .setAuthor('gay rate', taggedUser.displayAvatarURL)
       .setDescription(`${taggedUser.username} is \`${gayMath}\`% gay 🏳️‍🌈`)
       .setColor("RANDOM")
       .setFooter('the gay rate machine is 99% accurate')
       message.channel.send(embedMention);
    },

  };