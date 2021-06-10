const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const config = require('../config.json');
module.exports = (client, message, queue) => {
    const embed = new MessageEmbed()

        .setColor('#ff2323')
        .setDescription(`${client.emotes.error} Kanalla bağlantım kesildiğinden müzik durdu!`);

    message.channel.send(embed);

};