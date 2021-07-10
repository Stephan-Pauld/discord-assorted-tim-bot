const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();
let giveaway = []
const admins = ["136593437766975488"]

const giveawayArray = (msg) => {
  const nerds = msg.guild.channels.cache.filter((vc) => vc.id === "846903349659435058")
  for(const i of nerds) {
    for(const x of i[1].members) {
      giveaway.push(x[1].id)
  }
}
}

const pullWinner = async() => {
  const general = client.channels.cache.find(channel => channel.name === 'general')
  const rng = Math.floor((Math.random() * giveaway.length));

  general.send(`Congratz the winner of the giveaway is..... <@${giveaway[rng]}> !!!!`)
}



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
  if (msg.content === '?test' && admins.includes(msg.member.id)) {
    giveaway = []
    giveawayArray(msg)
    console.log(giveaway);
  }

  if (msg.content === '?pull') {
    pullWinner()
  }

});

client.login(process.env.ABOOT_BOT_TOKEN)
