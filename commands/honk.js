const Discord = require('discord.js');


module.exports = {
	name: 'honk',
    description: 'honk.',
    cooldown: 5,
	execute(message) {

        message.channel.send("HONK")
    },
};