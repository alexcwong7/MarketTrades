const ms = require('ms');

exports.run = async (client, message, args) => {

    if(!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Giveaways")){
        return message.channel.send(':boom: You need to have the \`MANAGE_MESSAGES\` permissions to start giveaways.');
    }

    let giveawayChannel = message.mentions.channels.first();
    if(!giveawayChannel){
        return message.channel.send(':boom: Uh oh, I couldn\'t find that channel! Try again!');
    }

    let giveawayDuration = args[1];
    if(!giveawayDuration || isNaN(ms(giveawayDuration))){
        return message.channel.send(':boom: Hm. you haven\'t provided a duration. Can you try again?');
    }

    let giveawayNumberWinners = args[2];
    if(isNaN(giveawayNumberWinners) || (parseInt(giveawayNumberWinners) <= 0)){
        return message.channel.send(':boom: Uh... you haven\'t provided the amount of winners.');
    }

    let giveawayPrize = args.slice(3).join(' ');
    if(!giveawayPrize){
        return message.channel.send(':boom: Oh, it seems like you didn\'t give me a valid prize!');
    }

    client.giveawaysManager.start(giveawayChannel, {
        time: ms(giveawayDuration),
        prize: "Prize: " + giveawayPrize,
        winnerCount: parseInt(giveawayNumberWinners),
        hostedBy: client.config.hostedBy ? message.author : null,
        messages: {
            giveaway: (client.config.everyoneMention ? "@everyone\n\n" : "")+"<@&816168697336954921>\n\n:tada: **GIVEAWAY** :tada:",
            giveawayEnded: (client.config.everyoneMention ? "@everyone\n\n" : "")+":tada: **GIVEAWAY ENDED** :tada:",
            timeRemaining: "Time remaining: **{duration}**!",
            inviteToParticipate: "__To enter be subscribed to these channels__:\n\n :red_car: **Finance Hat**: https://bit.ly/3fCpphb \n :bar_chart: **Stock Essentials**: https://bit.ly/3vzjJKu \n\nAfter subscribing, react with 🎉 to participate!\n",
            winMessage: "Congratulations, {winners}! You won the **{prize}**! You will be DMed shortly.",
            embedFooter: "Market Trades",
            noWinner: "Not enough entrants to determine a winner!",
            hostedBy: "Hosted by: {user}",
            winners: "winner(s)",
            endedAt: "Ended at",
            units: {
                seconds: "seconds",
                minutes: "minutes",
                hours: "hours",
                days: "days",
                pluralS: false
            }
        }
    });

    message.channel.send(`:tada: Done! The giveaway for the \`${giveawayPrize}\` is starting in ${giveawayChannel}!`);

};
