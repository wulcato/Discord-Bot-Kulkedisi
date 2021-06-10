const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const config = require('../config.json');
module.exports = (client, message, query, tracks, content, collector) => {
    const embed2 = new MessageEmbed()
        .setColor('#3aff00')
        .setDescription(`${client.emotes.success} Seçim **iptal edildi!**`);
    const embed3 = new MessageEmbed()
        .setColor('#3aff00')
        .setDescription(`${client.emotes.error} **1** ile **${tracks.length}** arası geçerli bir seçim giriniz!`);

    if (content === 'cancel') {
        collector.stop();
        return message.channel.send(embed2);
    } else message.channel.send(embed3);
};