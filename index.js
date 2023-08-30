const fs = require('fs');

const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./config.json');
client.config = config;

const { GiveawaysManager } = require('discord-giveaways');
client.giveawaysManager = new GiveawaysManager(client, {
    storage: "./giveaways.json",
    updateCountdownEvery: 5000,
    default: {
        botsCanWin: false,
        embedColor: "#00DB2E",
        reaction: "🎉"
    }
});

client.on('message', async message => {

	// CHECK CHANNEL TYPE
	if(message.author.id === client.user.id) return;
	if(message.channel.type === "dm") {
		
		let newEmbed = new Discord.MessageEmbed();
		newEmbed.setTimestamp();
		newEmbed.setFooter("Market Trades & Affiliates", "https://i.ibb.co/8dsWKvc/markettrades.png");
		newEmbed.setTitle("Thank you for your message");
		newEmbed.setDescription("Please open up a support ticket in <#838708395829493780> if you have any questions and a staff member will be in contact with you. Please do not reply to this bot.\n\n __In the meantime, please check out our YouTube channels below__:\n\n**🟢 Market Gains**: https://bit.ly/2TzR0ax \n(*Growth stocks, crypto, options & market news*)\n\n**:red_car: Finance Hat**: https://bit.ly/3fCpphb \n(*Cryptocurrencies, EV stocks & Tesla news*)\n\n**:bar_chart: Stock Essentials**: https://bit.ly/2Tbz71P \n(*Stocks, options strategies & market news*)");
		newEmbed.setColor('RANDOM');
		message.channel.send(newEmbed);
		
		try {
			// MTT #market-trades-dms
			const channel02 = client.channels.cache.find(channel => channel.id === '881380080029405205');
			channel02.send("<@" + message.author + ">: " + message.content);
		}
		catch(err) {
			const channel01 = client.channels.cache.find(channel => channel.id === '847769051609563166');
			channel01.send("Error in market trades dms");
		}
		
		return;
	}
	
	 // Channels
	const inputSpreads = '815983679309348888'; // MGAS #Discussions
	
	const inputPremarket = '839537672749711400'; // MT #premarket-news
	const inputWatchlist = '816165815069573120'; // MT #watchlists
	const inputAnnouncements = '816167048916762625'; // MT #announcements
	const inputLongTerm = '835091252596047892'; // MT #long-term-picks
	
	const inputSurges = '847937842306351134'; // MT #price-surges
	const input52Week = '847937869171523595'; // MT #52-week-high-lows
	const input1Day = '847937898459430942'; // MT #1-day-high-lows
	const inputUnusualOptions = '847248503133962240'; // MT #unusual-options
		
	const inputBullseye = '847735808181665822'; // MTT #bullseye
	const inputScalps = '847735822596702238'; // MTT #scalps
	const inputLargeSweeps = '847735837843783699'; // MMT #large-sweeps
	const inputLargeBlocks = '847735851751309312'; // MTT #large-blocks
	const inputInsiderTrading = '847735868025733140'; // MTT #insider-trading
	const inputAnalystUpgrades = '847735894182068264'; // MTT #analyst-upgrades
	const inputImportantNews = '847735912086503454'; // MTT #important-news
	const inputCryptoSignals = '847735939203858432'; // MTT #crypto-signals
	const inputCryptoBreakout = '847735955162005504'; // MTT #crypto-breakout
	const inputTickers = '852284992628326400'; // MTT #most-talked-tickers
	const inputTrendOptions = '852292201476390923'; // MTT #popular-options
	
	const inputOptionsSelling = '880919363601977364'; // MTT #options-selling
	
	const inputTechnicalAnalysis = '880870915594932334'; // MT #technical-analysis

	// Lehawk Alerts
	if(message.channel.id === inputSpreads) {
		lehawk(message);
	}
	
	// Tradytics Alerts 
	else if(message.channel.id === inputBullseye) {
		try{
			bullseye(message);
		}
		catch(err) {
			const channel01 = client.channels.cache.find(channel => channel.id === '847769051609563166');
			channel01.send("Error in bullseye");
		}
	}
	else if(message.channel.id === inputScalps) {
		try{
			scalps(message);
		}
		catch(err) {
			const channel01 = client.channels.cache.find(channel => channel.id === '847769051609563166');
			channel01.send("Error in scalps");
		}
	}
	else if(message.channel.id === inputLargeSweeps) {
		try{
			largeSweeps(message);
		}
		catch(err) {
			const channel01 = client.channels.cache.find(channel => channel.id === '847769051609563166');
			channel01.send("Error in large sweeps");
		}
	}
	else if(message.channel.id === inputLargeBlocks) {
		try{
			largeBlocks(message);
		}
		catch(err) {
			const channel01 = client.channels.cache.find(channel => channel.id === '847769051609563166');
			channel01.send("Error in large blocks");
		}
	}
	else if(message.channel.id === inputInsiderTrading) {
		try{
			insiderTrading(message);
		}
		catch(err) {
			const channel01 = client.channels.cache.find(channel => channel.id === '847769051609563166');
			channel01.send("Error in insider trading");
		}
	}
	else if(message.channel.id === inputAnalystUpgrades) {
		try{
			analystUpgrades(message);
		}
		catch(err) {
			const channel01 = client.channels.cache.find(channel => channel.id === '847769051609563166');
			channel01.send("Error in analyst upgrades");
		}		
	}
	else if(message.channel.id === inputImportantNews) {
		try{
			importantNews(message);
		}
		catch(err) {
			const channel01 = client.channels.cache.find(channel => channel.id === '847769051609563166');
			channel01.send("Error in important news");
		}
	}
	else if(message.channel.id === inputCryptoSignals) {
		try{
			cryptoSignals(message);
		}
		catch(err) {
			const channel01 = client.channels.cache.find(channel => channel.id === '847769051609563166');
			channel01.send("Error in cryptosignals");
		}
	}
	else if(message.channel.id === inputCryptoBreakout) {
		try{
			cryptoBreakout(message);
		}
		catch(err) {
			const channel01 = client.channels.cache.find(channel => channel.id === '847769051609563166');
			channel01.send("Error in crypto breakout");
		}
	}
	
	// Watchlist Market Trades Testing
	else if(message.channel.id === '880919318618046485') {
		try{
			watchlists(message);
		}
		catch(err) {
			const channel01 = client.channels.cache.find(channel => channel.id === '847769051609563166');
			channel01.send("Error in watchlists");
		}		
	}
	
	// Add reactions 
	if(message.channel.id === inputPremarket && message.embeds[0]) {
		message.react('👍');
	}
	else if(message.channel.id === inputWatchlist) {
		try {
			if(message.content.includes("@here")) {
				message.delete();
				const channel02 = client.channels.cache.find(channel => channel.id === '816165815069573120');
				channel02.send("<@&817146855342473281>");
				return;
			}
			if(message.content.includes("!add_channel") || message.content.includes("!remove_channel")) {
				message.delete();
				return;
			}
			message.react('🚀');
		}
		catch(err) {
			const channel01 = client.channels.cache.find(channel => channel.id === '847769051609563166');
			channel01.send("Error in watchlist reactions");
		}
	}
	else if(message.channel.id === inputTechnicalAnalysis) {
		try {
			if(message.content.includes("@here")) {
				message.delete();
				const channel02 = client.channels.cache.find(channel => channel.id === '880870915594932334');
				channel02.send("<@&881442616967839744>");
				return;
			}
			if(message.content.includes("!add_channel") || message.content.includes("!remove_channel")) {
				message.delete();
				return;
			}
			message.react('👍');		
		}
		catch(err) {
			const channel01 = client.channels.cache.find(channel => channel.id === '847769051609563166');
			channel01.send("Error in technical analysis reactions");
		}
	}
	else if(message.channel.id === inputAnnouncements) {
		message.react('👍');
	}
	else if(message.channel.id === inputLongTerm) {
		message.react('👍');
	}

	// Options Selling
	else if(message.channel.id === inputOptionsSelling) {
		try {
			optionsSelling(message);
		}
		catch(err) {
			const channel01 = client.channels.cache.find(channel => channel.id === '847769051609563166');
			channel01.send("Error in options selling");
		}		
	}	
	
});

function watchlists(message) {
	message.embeds.forEach((embed) => {
		let newEmbed = new Discord.MessageEmbed();

		newEmbed.setColor("#ff0000");
		newEmbed.setTitle(embed.title);

		newEmbed.setDescription(embed.description);
		newEmbed.setFooter("Market Trades & Affiliates");
		newEmbed.setTimestamp();

		// MT #options-selling
		const channel02 = client.channels.cache.find(channel => channel.id === '881328105468362792');
		let ping = "<@&817146499258777662>";
		channel02.send({"content": ping, "embed": newEmbed.toJSON()}).then(msg => {msg.react("🚀")}).catch();
	});
}

function optionsSelling(message) {
	message.embeds.forEach((embed) => {
		let newEmbed = new Discord.MessageEmbed();

		newEmbed.setColor(embed.color);
		newEmbed.setTitle(embed.title);

		newEmbed.setDescription(embed.description);
		if(embed.description.toUpperCase().includes("PUT") && embed.title.toUpperCase().includes("SELL TO OPEN")) {
			newEmbed.setTitle(embed.title + " (Cash Secured Put)");
		}
		else if(embed.description.toUpperCase().includes("CALL") && embed.title.toUpperCase().includes("SELL TO OPEN")) {
			newEmbed.setTitle(embed.title + " (Covered Call)");
		}
		
		newEmbed.setTimestamp();

		// MT #options-selling
		const channel02 = client.channels.cache.find(channel => channel.id === '881328105468362792');
		let ping = "<@&817146499258777662>";
		channel02.send({"content": ping, "embed": newEmbed.toJSON()}).then(msg => {msg.react("👍")}).catch();
	});
}

function analystUpgrades(message) {
	message.embeds.forEach((embed) => {
		let newEmbed = new Discord.MessageEmbed();
		const channel01 = client.channels.cache.find(channel => channel.id === '848006943116230706');

		if(embed.fields.length > 0) {
			let rating = embed.fields[0].value;
			let direction = embed.fields[0].name;
			rating = rating.split("**").join("");
			let company = rating.split(": ")[1].split("\n")[0];
			let fromGrade = rating.split(": ")[2].split("\n")[0];
			let toGrade = rating.split(": ")[3].split("\n")[0];
			let action = rating.split(": ")[4].split("\n")[0];
			let date = rating.split(": ")[5].split("-"); 

			let day = parseInt(date[2]);
			let month = parseInt(date[1]);
			let year = date[0];
			date = month + "/" + day + "/" + year;

			let symbol = embed.author.name.split("for ")[1];
			newEmbed.setTitle("Analyst Rating for $" + symbol);
			newEmbed.setDescription("**Ticker**: " + symbol + "\n**Analyst**: " + company + "\n**Rating**: " + toGrade + "\n**Date**: " + date);

			if(direction.includes(":bar_chart:")) {
				newEmbed.setColor("#ffff00");
			}
			else if(direction.includes(":chart_with_downwards_trend:")) {
				newEmbed.setColor("#ff0000");
			}
			else if(direction.includes(":chart_with_upwards_trend:")) {
				newEmbed.setColor("#00db2e");
			}
			else {
				newEmbed.setColor("#ffff00");
			}

		}	
		else {
			return;
		}
		
		newEmbed.setTimestamp();
		
		// MT #analyst-ratings
		//const channel01 = client.channels.cache.find(channel => channel.id === '847247388107341864');
		channel01.send(newEmbed);
	});
}

function scalps(message) {
	message.embeds.forEach((embed) => {
		let newEmbed = new Discord.MessageEmbed();
		const channel01 = client.channels.cache.find(channel => channel.id === '847247388107341864');
		let notes = embed.description;
		let symbol = embed.fields[0].value;
		let entry = parseFloat(embed.fields[1].value).toFixed(2);
		let position = embed.fields[2].value;
		let target = parseFloat(embed.fields[3].value).toFixed(2);
		let stoploss = parseFloat(embed.fields[4].value).toFixed(2);

		let contract = "";
		/*if(embed.fields.length === 7) {
			contract = embed.fields[6].value;

			let type = contract.split(": ")[1].split("\n")[0];
			let expiration = contract.split(": ")[2].split("\n")[0];
			let strike = contract.split(": ")[3].split("\n")[0];
			let bid = parseFloat(contract.split(": ")[4].split("\n")[0]);
			let ask = parseFloat(contract.split(": ")[5].split("\n")[0]);
			let mid = ((bid + ask) / 2).toFixed(2);
			
			let strikeDecimals = strike.split(".");
			if(strikeDecimals[1] === "0") {
				strike = strikeDecimals[0];
			}
			else {
				strike = parseFloat(strike).toFixed(2);
			}
			if(type === "PUT") {
				type = "Put";
			}
			else {
				type = "Call";
			}
			
			contract = "\n\n⚪ **Suggestion Contract**: \n" + symbol + " " + " $" + strike + " " + type + " " + expiration + " @ $" + mid;
		}
		else {
			return;
		}*/

		if(position === "Short") {
			return;
			newEmbed.setColor("#ff0000");
			contract = "__put__ options";
			
		}
		else if(position === "Long") {
			newEmbed.setColor("#00db2e");
			contract = "__call__ options";
		}
		else {
			return;
		}
		newEmbed.setTitle("$" + symbol + ": " + notes + " (" + position + ")");
		newEmbed.setDescription("🔵 **Ticker**: " + symbol + "\n🟡 **Entry**: $" + entry + "\n🟢 **Target**: $" + target + "\n🔴 **Stoploss**: $" + stoploss + "\n\n*Can buy __shares__ or " + contract + "*");
		newEmbed.setFooter("You are responsible for entering and exiting!");
		newEmbed.setTimestamp();
		
		// MT #scalps
		//const channel01 = client.channels.cache.find(channel => channel.id === '847247388107341864');
		channel01.send("<@&857000275687243796>");
		channel01.send(newEmbed);
		/*if(contract !== "") {
			const channel03 = client.channels.cache.find(channel => channel.id === '889679785406636083');
			let ping = "<@&815868115216236544>";
			channel03.send({"content": ping, "embed": newEmbed.toJSON()});
		}*/
	});
}

function bullseye(message) {
	message.embeds.forEach((embed) => {
		let newEmbed = new Discord.MessageEmbed();

		let symbol = embed.fields[0].value;
		let strike = embed.fields[1].value;
		let expiration = embed.fields[2].value;
		let type = embed.fields[3].value;
		let buysell = embed.fields[4].value;
		let confidence = embed.fields[5].value;
		let premiums = embed.fields[6].value;
		let volume = embed.fields[7].value;
		let oi = embed.fields[8].value;
		let tracking = "[Click Here](" + embed.fields[9].value + ")";
		
		if(parseFloat(confidence) < 70) {
			return;
		}
		
		let strikeDecimals = strike.split(".");
		if(strikeDecimals[1] === "0") {
			strike = strikeDecimals[0];
		}
		else {
			strike = parseFloat(strike).toFixed(2);
		}
		
		if(type === "Put" && buysell === "Buy") {
			newEmbed.setColor("#ff0000");
			newEmbed.setTitle("BUY to OPEN");
			newEmbed.setDescription("🟢 **BTO**: " + symbol + " $" + strike + " Put " + expiration + "\n\n 🟠 **Tracking Link**: " + tracking);
		}
		else if(type === "Call" && buysell === "Sell") {
			newEmbed.setColor("#ff0000");
			newEmbed.setTitle("SELL to OPEN");
			newEmbed.setDescription("🟢 **STO**: " + symbol + " $" + strike + " Covered Call " + expiration + "\n\n 🟠 **Tracking Link**: " + tracking);
		}
		else if(type === "Call" && buysell === "Buy") {
			newEmbed.setColor("#00db2e");
			newEmbed.setTitle("BUY to OPEN");
			newEmbed.setDescription("🟢 **BTO**: " + symbol + " $" + strike + " Call " + expiration + "\n\n 🟠 **Tracking Link**: " + tracking);
		}
		else if(type === "Put" && buysell === "Sell") {
			newEmbed.setColor("#00db2e");
			newEmbed.setTitle("SELL to OPEN");
			newEmbed.setDescription("🟢 **STO**: " + symbol + " $" + strike + " Cash Secured Put " + expiration + "\n\n 🟠 **Tracking Link**: " + tracking);
		}
		else {
			return;
		}
		newEmbed.addField("\u200b", "ALWAYS do your own due diligence, you are responsible for cutting losses or taking profits. For shorter term expirations, it is better to add some extra time.", true);
		//newEmbed.setDescription("**Ticker**: " + symbol + "\n**Shares**: " + shares + "\n**Amount**: $" + amount + "\n**Date**: " + date);
		newEmbed.setFooter(embed.description);
		newEmbed.setTimestamp();
		
		// MT #ai-signals
		const channel01 = client.channels.cache.find(channel => channel.id === '847247181332086814');
		channel01.send("<@&857004594415796235>");
		channel01.send(newEmbed);
	});
}

function cryptoBreakout(message) {
	message.embeds.forEach((embed) => {
		let newEmbed = new Discord.MessageEmbed();

		let symbol = embed.fields[0].value;
		let volume = embed.fields[1].value;
		let type = embed.fields[2].value;
		let img = embed.image.url;
	
		newEmbed.setColor("#FFA500");
		newEmbed.setImage(img);
		
		
		newEmbed.setTitle(symbol + ": Potential Breakout on " + embed.description.split("on ")[1]);
		newEmbed.setDescription("**🔵 Coin**: " + symbol + "\n**⚪ Relative Volume**: " + volume + "x\n**🟠 Type**: " + type);
		newEmbed.setTimestamp();
		
		// MT #crypto breakout
		const channel01 = client.channels.cache.find(channel => channel.id === '848073958003310642');
		channel01.send("<@&856998222403469312>");
		channel01.send(newEmbed);
	});
}

function insiderTrading(message) {
	message.embeds.forEach((embed) => {
		let newEmbed = new Discord.MessageEmbed();
const channel01 = client.channels.cache.find(channel => channel.id === '847967650323234837');
		let symbol = embed.fields[0].value;
		let shares = embed.fields[1].value;
		let amount = embed.fields[2].value;

		let description = embed.description.split("at ")[1];
		let date = description.split("-");
		let day = parseInt(date[2]);
		let month = parseInt(date[1]);
		let year = date[0];
		date = month + "/" + day + "/" + year;
		if(embed.author.name.includes("Sell")) {
			newEmbed.setColor("#ff0000");
			newEmbed.setDescription("🔵 **Ticker**: " + symbol + "\n🟡 **Shares**: " + shares + "\n🔴 **Amount**: $" + amount + "\n🟣 **Date**: " + date);
		}
		else if(embed.author.name.includes("Buy")) {
			newEmbed.setColor("#00db2e");
			newEmbed.setDescription("🔵 **Ticker**: " + symbol + "\n🟡 **Shares**: " + shares + "\n🟢 **Amount**: $" + amount + "\n🟣 **Date**: " + date);
		}
		else {
			return;
		}

		newEmbed.setTitle("$" + symbol + ": Large " + embed.author.name);

		newEmbed.setTimestamp();
		
		// MT #insider trading
//		const channel01 = client.channels.cache.find(channel => channel.id === '847967650323234837');
		channel01.send(newEmbed);
	});
}

function importantNews(message) {
	message.embeds.forEach((embed) => {
		
		let newEmbed = new Discord.MessageEmbed();

		let symbol = embed.fields[0].value;
		let source = embed.fields[1].value;
		let headline = embed.fields[2].value;
		let url = embed.fields[3].value;
		
		let msg = headline.toUpperCase();
		if(msg.includes("RATING")) {
			return;
		}
		
		newEmbed.setTitle(symbol + " News");
		newEmbed.setDescription(headline + "\n" + url);

		newEmbed.setFooter("Source: " + source);
		newEmbed.setTimestamp();
		newEmbed.setColor("#fffffd");
		
		// MT #market news
		const channel01 = client.channels.cache.find(channel => channel.id === '847248369956552764');
		channel01.send("<@&857001128172716043>");
		channel01.send(newEmbed);
	});
}

function largeSweeps(message) {
	message.embeds.forEach((embed) => {
		const channel01 = client.channels.cache.find(channel => channel.id === '847248503133962240');
		let newEmbed = new Discord.MessageEmbed();
		
		if(!embed.description.includes("Golden")) {
			return;
		}
		
		let type = "Puts";
		if(embed.description.includes("Put")) {
			newEmbed.setColor("#ff0000");
			type = "Puts";
		}
		else if(embed.description.includes("Call")) {
			newEmbed.setColor("#00db2e");
			type = "Calls";
		}
		else {
			return;
		}
		

		let symbol = embed.fields[0].value;
		let strike = embed.fields[1].value;
		let expiration = embed.fields[2].value;
		//let filled = parseFloat(embed.fields[3].value).toFixed(2);
		let premiums = embed.fields[3].value;
		
		let strikeDecimals = strike.split(".");
		if(strikeDecimals[1] === "0") {
			strike = strikeDecimals[0];
		}
		else {
			strike = parseFloat(strike).toFixed(2);
		}
					
		
		newEmbed.setTitle(symbol + " " + embed.description);
		newEmbed.setDescription(symbol + " $" + strike + " " + type + " " + expiration + " (About $" + premiums + " placed into these)");

		newEmbed.setFooter("Contracts are either long or short");
		newEmbed.setTimestamp();

		// MT #unusual options
		//const channel01 = client.channels.cache.find(channel => channel.id === '847248503133962240');
		channel01.send(newEmbed);
		
	});
}

function largeBlocks(message) {
	message.embeds.forEach((embed) => {
		let newEmbed = new Discord.MessageEmbed();
		
		let symbol = embed.author.name.split(" ")[0];
		let activity = embed.description;
		let price = embed.fields[0].value;
		let shares = embed.fields[1].value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		let amount = embed.fields[2].value;
		
		
		newEmbed.setTitle(symbol + " Stock Activity");
		newEmbed.setDescription(activity + "\n\n🔵 **Ticker**: " + symbol + "\n🟡 **Price**: $" + price + "\n🟠 **Shares**: " + shares + "\n🟢 **Amount**: $" + amount);
		newEmbed.setColor("#52f0fa");
		newEmbed.setTimestamp();
		// MT #unusual shares
		const channel01 = client.channels.cache.find(channel => channel.id === '847249181706158091');
		channel01.send(newEmbed);
	});
}

function cryptoSignals(message) {
	message.embeds.forEach((embed) => {
		let newEmbed = new Discord.MessageEmbed();
		let symbol = embed.fields[0].value;
		let entry = embed.fields[1].value;
		let position = embed.fields[2].value;
		let target = embed.fields[3].value;
		let stoploss = embed.fields[4].value;

		if(position === "Short") {
			newEmbed.setColor("#ff0000");
		}
		else {
			newEmbed.setColor("#00db2e");
		}
		
		let entryDecimals = entry.split(".");
		if(entryDecimals[1] === "0") {
			entry = entryDecimals[0];
		}
		else {
			entry = parseFloat(entry).toFixed(2);
		}
		
		let targetDecimals = target.split(".");
		if(targetDecimals[1] === "0") {
			target = targetDecimals[0];
		}
		else {
			target = parseFloat(target).toFixed(2);
		}
		
		let stopDecimals = stoploss.split(".");
		if(stopDecimals[1] === "0") {
			stoploss = stopDecimals[0];
		}
		else {
			stoploss = parseFloat(stoploss).toFixed(2);
		}
		
		newEmbed.setTitle(symbol + ": " + embed.description);
		newEmbed.setDescription("**🔵 Coin**: " + symbol + "\n**🟡 Entry**: $" + entry + "\n**🟢 Target**: $" + target + "\n**🔴 Stoploss**: $" + stoploss);
		newEmbed.setTimestamp();

		// MT #crypto-scalps
		const channel01 = client.channels.cache.find(channel => channel.id === '847249611541708840');
		channel01.send("<@&856998024294301726>");
		channel01.send(newEmbed);
	});
}

// Sends 
/*client.on('guildMemberUpdate', (oldMember, newMember) => {
	// Fire if user has a role
	console.log("fired");
	if(oldMember.roles.cache.some(r => r.name !== "Premium") && newMember.roles.cache.some(r => r.name === "Premium")) {
		console.log("fired2");
		// Send dm
		let newEmbed = new Discord.MessageEmbed();
		newEmbed.setTimestamp();
		newEmbed.setFooter("Market Trades & Affiliates", "https://i.ibb.co/8dsWKvc/markettrades.png");
		newEmbed.setTitle("Welcome to Market Trades Premium!");
		newEmbed.setDescription("Please open up a support ticket in <#838708395829493780> if you have any questions and a staff member will be in contact with you. Please do not reply to this bot.\n\n __**Helpful videos:**__\n Server Overview: https://youtu.be/uCvmOezczlU \n Reading Option Alerts: https://youtu.be/WBBUaU3VI8w \n Setting Up Notifications: https://youtu.be/aCrW0keZtAI \n\n __**Day Trading:**__\nWebull is our preferred brokerage as it allows unlimited day trades in a cash account.\n Get 2 FREE stocks when you sign up deposit $100!\n https://act.webull.com/k/ZNxz5XJElbU3/main");
		
		newEmbed.setColor("#52f0fa");
		newMember.send(newEmbed).catch(err => console.log(err));
	}
});*/

// Lehawk Spreads
function lehawk(message) {
  message.embeds.forEach((embed) => {

    let newEmbed = new Discord.MessageEmbed();
    if(embed.description.match(/bto|buy to open/gi)) {
      newEmbed.setTitle("Buy to Open");
    }
    else if(embed.description.match(/stc|sell to close/gi)) {
      newEmbed.setTitle("Sell to Close");
    }
    else {
      newEmbed.setTitle("Update");
    }

    newEmbed.setColor(embed.color);
    newEmbed.setTitle(embed.title);

    if(embed.image !== null) {
      console.log("ran through embed.image\n");
      newEmbed.setImage(embed.image.url);
    }

    //newEmbed.setDescription(embed.description.replace(/^.*lehawk#0406.*$/mg, ""));
    newEmbed.setDescription(embed.description.split('\n').filter(function(line){
      return line.indexOf( "lehawk#0406" ) == -1;
    }).join('\n'));
    newEmbed.setTimestamp()

    // MT #Spreads
    const channel02 = client.channels.cache.find(channel => channel.id === '816165765044240414');
    channel02.send("<@&817128210881052673>");
    channel02.send(newEmbed);
  });
}

client.giveawaysManager.on("giveawayReactionAdded", (giveaway, member, reaction) => {
    console.log(`${member.user.tag} entered giveaway #${giveaway.messageID} (${reaction.emoji.name})`);
});

client.giveawaysManager.on("giveawayReactionRemoved", (giveaway, member, reaction) => {
    console.log(`${member.user.tag} unreact to giveaway #${giveaway.messageID} (${reaction.emoji.name})`);
});

client.giveawaysManager.on("giveawayEnded", (giveaway, winners) => {
    console.log(`Giveaway #${giveaway.messageID} ended! Winners: ${winners.map((member) => member.user.username).join(', ')}`);
});

fs.readdir("./events/", (_err, files) => {
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, event.bind(null, client));
        delete require.cache[require.resolve(`./events/${file}`)];
    });
});

client.commands = new Discord.Collection();

fs.readdir("./commands/", (_err, files) => {
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        client.commands.set(commandName, props);
    });
});

client.login(config.token);
