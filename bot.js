const Discord = require('discord.js');
const client = new Discord.Client();
const developers = ['510463644535095297'];


const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setGame(`Weeee.
`,'https://www.twitch.tv/By:A7MD');
  console.log('لقد تعلمت أن هناك شيئا بنّاء يأتي من كل هزيمة');
});

client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!developers.includes(message.author.id)) return;

if (message.content.startsWith('wt')) {
client.user.setActivity(argresult, {type:'WATCHING'});
    message.channel.send(`${argresult} \` `)
} else 
if (message.content.startsWith('lsn')) {
client.user.setActivity(argresult , {type:'LISTENING'});
    message.channel.send(` ${argresult} \` `)
} else 
if (message.content.startsWith('3tb')) {
  client.user.setGame(argresult, "https://www.twitch.tv/WE");
  client.user.setStatus("idle")
   message.channel.send(`:white_check_mark:  \` `)
}
});

client.on('message', message => {
        if (!developers.includes(message.author.id)) return;
  if (message.content === 'owdoawowddwkowdokokwdokokk1o131141ds') {
  let channel = client.channels.get('510463644535095297');

  channel.join()
  .then(connection => console.log('Connected'))
  .catch(console.error);
    
  }
          
});
client.login(process.env.BOT_TOKEN);
