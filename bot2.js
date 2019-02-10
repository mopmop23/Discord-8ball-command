
const Discord = require("discord.js");
const prefix = '!';
console.log("\nPREFIX:\n" + settings.prefix);
const bot = new Discord.Client({disableEveryone: true});

// Answers array
var res = [
	"Yes",
	"No",
	"Maybe",
	"Probably",
	"Probably not",
]

bot.on ("ready", async () => {
	console.log('\nReady!\n');
	
	// Generate invite for bot
	bot.generateInvite(["ADMINISTRATOR"]).then(link => {
		console.log("\nINVITE BOT:\n" + link);
	}).catch(err => {
		console.log(err.stack);
	});

	await bot.generateInvite(["ADMINISTRATOR"]);
	bot.user.setStatus('dnd')
});

bot.on("message", async message => {
	// Checking if the author of the message is not a bot and is not sent in a DM channel
	if(message.author.bot) return;
	if(message.channel.type === "dm") return;
	
	let messageArray = message.content.split(" ");
	let command = messageArray[0];
	let args = messageArray.slice(1);
	let com = command.toLowerCase();
	var sender = message.author;

if(com === `${prefix}8ball`) {
	
	// Runs if user doesn't ask a question
	if(!args[0]){
		message.channel.send('Please ask a question.')
		return;
	}
	// Creates an ambed and picks a random answer from the answer array
		let embed = new Discord.RichEmbed()
		.addField("Question", args)
		.addField("Answer", (res[Math.floor(Math.random() * res.length)]))
		.setColor('42c2f4')
		message.channel.send(embed)
		return console.log(`> 8ball command used by ${message.author.username}`);
	// Displays a message in the console if the command was used
	}
})


bot.login("TOKEN");
