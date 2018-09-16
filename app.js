const discord = require('discord.io');

const bot = new discord.Client({
	autorun: true,
	token: "auth_token_here"
});

bot.on('ready', (event) => {
	console.log('logged in as ' + bot.username + ' ' + bot.id);
});

bot.on('message', (user, userID, channelID, message, event) => {
	switch(message) {
		case 'hi':
			bot.sendMessage({
				to: channelID,
				message: 'hi ' + user + ', how are you'
			});
	}
});