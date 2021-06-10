const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const config = require('../../config.json');
module.exports = {
    name: 'çöq',
    aliases: [],
    category: 'User',
    utilisation: '{prefix}çöq',

    execute(client, message, args) {
        const embed = new MessageEmbed()

            .setColor(0x348a58)
            .setImage('https://cdn.discordapp.com/attachments/802925449427550218/810861773817118760/tenor.gif')
            .setFooter('WulNar', client.user.avatarURL());
        message.channel.send(embed);
    },
};