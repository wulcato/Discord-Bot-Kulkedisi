const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const config = require('../config.json');
module.exports = (client, message, queue, playlist) => {
    //message.channel.send(`**${client.emotes.music} - ${playlist.title}** sıraya eklendi (**${playlist.tracks.length}** songs) !`);
    const embed = new MessageEmbed()
        .setColor('#3aff00')
        .setDescription(`**${client.emotes.music}  ${playlist.title}** sıraya eklendi (**${playlist.tracks.length}** parça) !`);
    message.channel.send(embed);
};