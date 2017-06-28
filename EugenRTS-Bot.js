const Discord = require('discord.js');
const bot = new Discord.Client();
var config = require("./config");

const token = config.token;
bot.on('ready', () => {
  console.log('I am ready!');
});

bot.on('message', message => {
	var msg = message.content.substring(0,message.content.length).split(" ");
	if(message.author.id != 274874910126374924){
		var hasFoundTrigger = new Boolean(false);
		for (i = 0; i < msg.length; i++) {
			if(hasFoundTrigger == false){
				var string = msg[i]; 
				string = string.toLowerCase();
				string = string.replace('?','');
				string = string.replace('!','');
				hasFoundTrigger = true; //will be set to false if the string doesnt match
				switch(string){
					case "sd":
						message.channel.sendMessage("sd = :coffin:");
						break;
					case "thanks":
						message.channel.sendMessage("shut up");
						break;
					case "razzmann":
						message.channel.sendMessage("you mean baddmann?");
						break;
					case "yugo":
						message.channel.sendMessage("yugo = balanced");
						break;
					case "wargame":
						message.channel.sendMessage("sd > wg");
						break;
					case "patton":
						message.channel.sendMessage("$50/hr lessons from the Streamsniper himself! Available now!");
						break;
					case "ban":
						var x = i + 1;
						message.channel.sendMessage("Banning " + msg[x] + " in 3..2..1..");
						break;
					case "faustmann":
						var x = i + 1;
						message.channel.sendMessage("faustmann = imbalance mod...");
						break;
					case "karagoth":
						var x = i + 1;
						message.channel.sendMessage("everyone knows that deck cheney = karagoth");
						break;
					case "heli":
						var y = i + 1;
						if(msg[y] == "rush"||"rushing"||"rushes"){
							message.channel.sendMessage("just buy more AA duh");
						}
						break;
					case "tactical":
						message.channel.sendMessage("tactical 10v10 on mudfight is the only way to play the game");
						break;
					case "flx":
						message.channel.sendMessage("You mean FLseXy?");
						break;
					case "not"://not here to fuck around 
						var y = i + 1;
						if(msg[y] == "here"){
							y++;
							if(msg[y] == "to"){
								y++;
								if(msg[y] == "fuck"){
									y++;
									if(msg[y] == "around"){
										message.channel.sendMessage("We're here to snipe.");
									}
								}
							}
						}
						y = 0;
						break;
					default:
						hasFoundTrigger = false;
				}
			}
		}
	}	
});

bot.login(token);










