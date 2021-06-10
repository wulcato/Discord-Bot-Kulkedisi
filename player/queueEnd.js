const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const config = require('../config.json');
module.exports = (client, message, queue) => {
    const embed = new MessageEmbed()
        .setColor('#00c1ff')
        .setDescription(`<a:purpledance:844960085209251860> Müzik kalmadı! Odadan ayrıldı.`);
    message.channel.send(embed);
};