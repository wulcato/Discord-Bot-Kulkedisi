const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const config = require('../config.json');
module.exports = (client, message, track) => {

    const embed5 = new MessageEmbed()
        .setColor('#3aff00')
        .addField(`${message.member.voice.channel.name}`, `${client.emotes.music} **${track.title}**`, true)


    message.channel.send(embed5);
};