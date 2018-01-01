// A basic Discord bot coded by Wout Vandenbogaerde. || The main motivation for this bot is learning javascript and node.js 
const Discord = require("discord.js");
const prefix = '!';
console.log("\nBot Created by Wout Vandenbogaerde\n");
console.log("\nPREFIX:\n" + settings.prefix);
const bot = new Discord.Client({disableEveryone: true});

var words = [
	"Yes",
	"No",
	"Maybe",
	"Probably",
	"Probably not",
]

bot.on ("ready", async () => {
	console.log('\nReady!\n');

	bot.generateInvite(["ADMINISTRATOR"]).then(link => {
		console.log("\nINVITE BOT:\n" + link);
	}).catch(err => {
		console.log(err.stack);
	});

	await bot.generateInvite(["ADMINISTRATOR"]);
	bot.user.setStatus('dnd')
});

bot.on("message", async message => {
	if(message.author.bot) return;
	if(message.channel.type === "dm") return message.channel.send("I don't respond to DM's");
	let messageArray = message.content.split(" ");
	let command = messageArray[0];
	let args = messageArray.slice(1);
	let com = command.toLowerCase();
	var sender = message.author;

if(com === `${prefix}8ball`) {
	if(!args[0]){
		message.channel.send('Please ask a question.')
		return;
	}
		let embed = new Discord.RichEmbed()
		.addField("Question", args)
		.addField("Answer", (words[Math.floor(Math.random() * words.length)]))
		.setColor('42c2f4')
		message.channel.send(embed)
		return console.log(`> 8ball command used by ${message.author.username}`);
	}
})


bot.login("TOKEN");