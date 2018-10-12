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
    message.channel.send("Just say `=duel` to start dueling. To make the bot make a move, say `=use`. You can change the level pokemon the bot is using with `=max` and `lvl1`");
  } else
  if (message.content.startsWith(prefix + "duel")) {
  	  message.channel.send("-duel " + message.author.toString() + "" );
  }else
  if (message.content.startsWith(prefix + "use")) {
  	  message.channel.send("-use 1");
  }else
  if (message.content.startsWith(prefix + "lvl1")) {
  	  message.channel.send("-select 2");
  }else
  if (message.content.startsWith(prefix + "max")) {
      message.channel.send("-select 3");
  }
});
client.login(process.env.BOT_TOKEN);
