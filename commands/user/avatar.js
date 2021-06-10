const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const config = require('../../config.json');
module.exports = {
    name: 'avatar',
    aliases: ['a'],
    category: 'User',
    utilisation: '{prefix}avatar [kullanıcı]',

    execute(client, message, args) {
        const user = message.mentions.users.first() || message.author;

        const embed = new MessageEmbed()
            // .setTitle(user.username)
            .setColor(0xff0000)
            .setDescription(`WulNar Avatar :ringed_planet:`)
            .setImage(user.avatarURL({ size: 4096, format: 'png', dynamic: true }))
            .setAuthor(user.tag)
            .setFooter('WulNar', client.user.avatarURL());
        message.channel.send(embed);
    },
};