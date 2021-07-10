const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();
let giveaway = []
// The admins are myself and tom just to make sure we never win
const admins = ["136593437766975488","717865775335211071"]

const giveawayArray = (msg) => {
  // Change this number for the specific channel!
  const nerds = msg.guild.channels.cache.filter((vc) => vc.id === "855552966211928114")
  for(const i of nerds) {
    for(const x of i[1].members) {
      // make sure that admins are never included!
      if(!admins.includes(x[1].id)) {
        giveaway.push(x[1].id)
      }
  }
}
const general = client.channels.cache.find(channel => channel.name === 'general-community')
general.send(`Starting the community giveaway there are ${giveaway.length} users in the raffle!`)
}

const pullWinner = async() => {
  const general = client.channels.cache.find(channel => channel.name === 'general-community')
  const rng = Math.floor((Math.random() * giveaway.length));

  general.send(`Congratz <@${giveaway[rng]}>!!!! You Won the community raffle!`)
  // general.send(`Congratz <@730451240684748800>!!!! You Won the community raffle!`)
}

const pullWinnerTwo = () => {
  const general = client.channels.cache.find(channel => channel.name === 'general-community')
  general.send(`Congratz <@814968269915684894>!!!! You Won the community raffle!`)
}



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
  if (msg.content === '?start' && admins.includes(msg.member.id)) {
    giveaway = []
    giveawayArray(msg)
    console.log(giveaway);
  }

  if (msg.content === '?pull') {
    pullWinner()
    // pullWinnerTwo()
  }

  if (msg.content === '?test') {
    const botTest = client.channels.cache.find(channel => channel.name === 'bot-commands')
    botTest.send(`I can chat here!`)
  }

});

client.login(process.env.WYWM_BOT_TOKEN)
