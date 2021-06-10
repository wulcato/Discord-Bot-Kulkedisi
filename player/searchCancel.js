const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const config = require('../config.json');
module.exports = (client, message, query, tracks) => {
    const embed = new MessageEmbed()
        .setColor('#ff2323')
        .setDescription(`${client.emotes.error} Geçerli bir yanıt sağlamadınız... Lütfen komutu tekrar gönderin!`);
    message.channel.send(embed);
};