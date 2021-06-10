const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const config = require('../../config.json');
module.exports = {
    name: 'clear-queue',
    aliases: ['cq', 'sırayıtemizle', 'listeyitemizle', 'mtemizle'],
    category: 'Music',
    utilisation: '{prefix}clear-queue',

    execute(client, message) {
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
            .setDescription(`${client.emotes.error} Bir müzik çalmıyor!`);
        if (!client.player.getQueue(message)) return message.channel.send(embed3);

        const embed4 = new MessageEmbed()
            .setColor('#ff2323')
            .setDescription(`${client.emotes.error} Sırada sadece bir şarkı var.`);
        if (client.player.getQueue(message).tracks.length <= 1) return message.channel.send(embed4);

        client.player.clearQueue(message);

        const embed5 = new MessageEmbed()
            .setColor('#3aff00')
            .setDescription(`${client.emotes.success} **Sıra temizlendi**!`);
        message.channel.send(embed5);
    },
};