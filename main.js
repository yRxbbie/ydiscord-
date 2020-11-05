const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

const cooldowns = new Discord.Collection();

client.on('ready', () => {
    console.log(`${client.user.username} is online!`);
})

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === 'general');
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}`);
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
  
  const args = message.content.slice(prefix.length).split(/ +/);
  const commandName = args.shift().toLowerCase();
  
  const command = client.commands.get(commandName)
     || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

  try {
   command.execute(message, args);
 } catch (error) {
  console.error(error);
    message.reply('there was an error trying to execute that command!');
   } 
 });

client.login(process.env.token);