const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const config = require('../../config.json');
module.exports = {
    name: 'ping',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}ping',

    execute(client, message) {
        const embed = new MessageEmbed()

            .setColor(0x348a58)
            .setDescription(`<a:uwu_heart:845407815723384892> Ping : **${client.ws.ping}ms** !`);
        message.channel.send(embed);
    },
};