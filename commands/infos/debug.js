const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const config = require('../../config.json');
module.exports = {
    name: 'debug',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}debug',

    execute(client, message) {
        const embed = new MessageEmbed()

        .setColor(0x348a58)
        .setDescription(`<a:uwu_heart:845407815723384892> **${client.user.username}** connected in **${client.voice.connections.size}** channels !`);
        message.channel.send(embed);
        //test
    },
};