const fs = require('fs');
const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const client = new Discord.Client();

//require('./util/eventLoader')(client);

const { Player } = require('discord-player');

const moment = require('moment');
const chalk = require('chalk');

client.player = new Player(client, {
  ytdlDownloadOptions: {
      filter: "audioonly"
  }
})
client.config = require('./config/bot');
const config = require('./config.json');
client.emotes = client.config.emojis;
client.filters = client.config.filters;
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

const log1 = '844064040534671360';




fs.readdirSync('./commands').forEach(dirs => {
    const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));

    for (const file of commands) {
        const command = require(`./commands/${dirs}/${file}`);
        console.log(`Loading command ${file}`);
        client.commands.set(command.name.toLowerCase(), command);
    };
});

const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const player = fs.readdirSync('./player').filter(file => file.endsWith('.js'));

for (const file of events) {
    console.log(`Loading discord.js event ${file}`);
    const event = require(`./events/${file}`);
    client.on(file.split(".")[0], event.bind(null, client));
};


for (const file of player) {
    console.log(`Loading discord-player event ${file}`);
    const event = require(`./player/${file}`);
    client.player.on(file.split(".")[0], event.bind(null, client));
};

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('Pong!');
    }
    if (msg.content === '.emojis') {
        msg.channel.send('<a:fired:845569611494719489>\n<a:purpledance:844960085209251860>\n<a:pepedance:844970823973339146>\n<a:clapp:844984531983007754>\n<a:banned:844984028170944552>\n<a:uwu_heart:845407815723384892>\n<:panik:845427069403398164>');
    }
    if (msg.content === '.restartforce') {
      if (msg.author.id !== config.owner) return;
      msg.channel.send('yeniden başlatılıyor...').then(() => {
      process.exit(1);
    })
    };
});
client.on("guildCreate", (guild, msg) => {
    const joinserverembed = new MessageEmbed()
      .setTitle("Sunucuya Eklendi!")
      .addField("Sunucu Adı:", `${guild.name} (${guild.id})`)
      .addField("Sunucu Sahibi:", `${guild.owner.user.tag} (${guild.owner.user.id})`)
      .addField('Üyeler', '`' + `${guild.memberCount}` + '`')
      .addField('Oluşturulma Tarihi', `${moment(guild.createdTimestamp).format('LT')} ${moment(guild.createdTimestamp).format('LL')} [${moment(guild.createdTimestamp).fromNow()}]`)
      .setColor("GREEN")
      .setThumbnail(guild.iconURL({ dynamic: true }))
      .setFooter('WulNar', client.user.avatarURL());
    console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
    client.channels.cache.get(log1).send(joinserverembed);
  });
  
  client.on("guildDelete", (guild, msg) => {
    const leftserverembed = new MessageEmbed()
      .setTitle("Sunucudan Ayrıldı!")
      .addField("Sunucu Adı:", `${guild.name} (${guild.id})`)
      .addField("Sunucu Sahibi:", `${guild.owner.user.tag} (${guild.owner.user.id})`)
      .addField('Üyeler', '`' + `${guild.memberCount}` + '`')
      .addField('Oluşturulma Tarihi', `${moment(guild.createdTimestamp).format('LT')} ${moment(guild.createdTimestamp).format('LL')} [${moment(guild.createdTimestamp).fromNow()}]`)
      .setColor("RED")
      .setThumbnail(guild.iconURL({ dynamic: true }))
      .setFooter('WulNar', client.user.avatarURL());
    console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
    client.channels.cache.get(log1).send(leftserverembed);
  
  });

  client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
  });
  
  client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
  });
  
  //client.login(process.env.TOKEN);
  client.login('your secret token');
