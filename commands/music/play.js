const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const config = require('../../config.json');
module.exports = {
    name: 'play',
    aliases: ['p', 'çal', 'oynat'],
    category: 'Music',
    utilisation: '{prefix}play [name/URL]',

    execute(client, message, args) {
        const embed = new MessageEmbed()
            .setColor('#ff2323')
            .setDescription(`${client.emotes.error} Bir sesli kanalda değilsin!`);
        if (!message.member.voice.channel) return message.channel.send(embed);

        const embed2 = new MessageEmbed()
            .setColor('#ff2323')
            .setDescription(`${client.emotes.error} Aynı ses kanalında değilsiniz!`);
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(embed2);

        const embed3 = new MessageEmbed()
            .setColor('#ff2323')
            .setDescription(`${client.emotes.error} Müzik adı ve ya URL yazın!`);
        if (!args[0]) return message.channel.send(embed3);

        client.player.play(message, args.join(" "), { firstResult: true });
    },
};