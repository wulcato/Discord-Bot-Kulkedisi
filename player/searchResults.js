const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const config = require('../config.json');
module.exports = (client, message, query, tracks) => {
    const embed5 = new MessageEmbed()
        .setColor('#00c1ff')
        .setAuthor(`Arama Sonuçları - ${query}`)
        .setFooter('WulNar', client.user.avatarURL())
        .setTimestamp(new Date())
        .setDescription(`${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`);
        
    message.channel.send(embed5);
};