const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const config = require('../config.json');
module.exports = (client, message, queue, track) => {
    const embed5 = new MessageEmbed()
        .setColor('#3aff00')
        .setDescription(`${client.emotes.music} **${track.title}** Sıraya Eklendi!`);

    message.channel.send(embed5);
};