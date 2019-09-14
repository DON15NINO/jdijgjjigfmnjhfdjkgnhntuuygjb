const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const adminprefix = "*";//تذكير نغير البرفكس
const devs = ['534808591731785779','355690814112006144'];//zمهم نحط الايدي
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' '); //حقوق GMZN Host
    if (!devs.includes(message.author.id)) return;
   
if (message.content.startsWith(adminprefix + 'ply')) { //حقوق GMZN Host
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق الحساب إلى **`) //حقوق GMZN Host
} else
 
if (message.content.startsWith(adminprefix + 'tw')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**تم تغيير تويتش الحساب إلى  ${argresult}**`) //حقوق GMZN Host
}
});

client.login(process.env.BOT_TOKEN);
