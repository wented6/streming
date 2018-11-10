const Discord = require('discord.js');
const client = new Discord.Client();
const developers = ['228139766573432832'];


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame(`mmM`,'https://www.twitch.tv/WE')
  client.user.setStatus("idle")
});

client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!developers.includes(message.author.id)) return;

if (message.content.startsWith('.wkDpdwDwl1l114llwss.')) {
client.user.setActivity(argresult, {type:'WATCHING'});
    message.channel.send(`${argresult} \` `)
} else 
if (message.content.startsWith('SeDAst21q.a')) {
client.user.setActivity(argresult , {type:'LISTENING'});
    message.channel.send(` ${argresult} \` `)
} else 
if (message.content.startsWith('Wee')) {
  client.user.setGame(argresult, "https://www.twitch.tv/WE");
  client.user.setStatus("idle")
   message.channel.send(`${argresult} \` `)
}
});

client.on('message', message => {
        if (!developers.includes(message.author.id)) return;
  if (message.content === 'owdoawowddwkowdokokwdokokk1o131141ds') {
  let channel = client.channels.get('444873938691031040');

  channel.join()
  .then(connection => console.log('Connected'))
  .catch(console.error);
    
  }
          
});
client.login(process.env.BOT_TOKEN);
