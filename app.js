const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
  console.log("Admin Alert Online");
});
const prefix = "!!!";
client.on("message", (message) => {
  if (!message.content.startsWith(prefix)) return;
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  if (message.content.startsWith(prefix + "alert")) {
    let members = message.channel.members;
    let jam = members.find('id', '289523788822085632');
    let gold = members.find('id', '332611268085153792');
    let spig = members.find('id', '275642801545281536');
    let celery = members.find('id', '204664162729590793');
    jam.send('Alert! A user needs you.');
    gold.send('Alert! A user needs you.');
    console.log("Admin Alert!");
    message.channel.send("An admin has been alerted.");	
  }else
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("Pong!");
    console.log("Pinged");
	}
});
client.login("NDk5MDMxNzI1OTU2MTM2OTgw.Dp2XOQ.Ec3P_hg9Ymjv-fNP_dkAiZW-2-g");
