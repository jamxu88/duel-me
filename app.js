const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
  console.log("Bot Ready");
});
const prefix = "=";
client.on("message", (message) => {
  if (!message.content.startsWith(prefix)) return;
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  if (message.content.startsWith(prefix + "help")) {
    message.channel.send("Just say =duelme to start dueling. To make the bot make a move, say =use.");
  } else
  if (message.content.startsWith(prefix + "duel")) {
  	  message.channel.send("-duel " + message.author.toString() + "" );
  }else
  if (message.content.startsWith(prefix + "use")) {
  	  message.channel.send("-use 1");
  }
});
client.login(process.env.BOT_TOKEN);
