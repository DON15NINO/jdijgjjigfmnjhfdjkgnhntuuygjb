const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
const ytdl = require("ytdl-core");
const { Client, Util } = require('discord.js');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const queue = new Map();
const UserBlocked = new Set();
const prefix = '!'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
 
 
 
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : GMZN Host`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : @ GMZN Host ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setStatus("online")
 
});


const adminprefix = "!";//تذكير نغير البرفكس
const devs = ['534808591731785779','427054148972297728'];//zمهم نحط الايدي
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' '); //حقوق GMZN Host
    if (!devs.includes(message.author.id)) return;
   
if (message.content.startsWith(adminprefix + 'ply')) { //حقوق GMZN Host
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`) //حقوق GMZN Host
} else
 
if (message.content.startsWith(adminprefix + 'tw')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`) //حقوق GMZN Host
}
});

client.login(process.env.BOT_TOKEN);
