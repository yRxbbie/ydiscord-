const Discord = require('discord.js');


module.exports = {
	name: 'avatar',
    description: 'Get the avatar URL of the tagged user(s), or your own avatar.',
    aliases: ['pfp', 'av', 'icon'],
    cooldown: 5,
	execute(message) {

        const taggedUser = message.mentions.users.first();
        
        const embedauth = new Discord.RichEmbed()
         .setImage(`${message.author.displayAvatarURL}`)
         .setAuthor(`${message.author.username}\'s Profile picture`, message.author.avatarURL)
         .setColor(message.member.displayHexColor)
         if (!message.mentions.users.size) {
     
             return message.channel.send(embedauth);
         }

         const embedMention = new Discord.RichEmbed()
         .setImage(`${taggedUser.displayAvatarURL}`)
         .setAuthor(`${taggedUser.username}\'s profile picture`)
         .setColor('#b16ad8')
         .setFooter(`requested by ${message.author.username}`, message.author.avatarURL)
         message.channel.send(embedMention)
        },
};
        