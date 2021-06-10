const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const config = require('../config.json');
module.exports = (client, message, queue) => {
    const embed = new MessageEmbed()

        .setColor('#ff2323')
        .setDescription(`${client.emotes.error} Ses kanalında başka üye olmadığından müzik durduruldu!`);

    message.channel.send(embed);
};