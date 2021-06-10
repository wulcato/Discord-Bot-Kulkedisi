const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const config = require('../../config.json');
module.exports = {
    name: 'resume',
    aliases: ['devam','sürdür'],
    category: 'Music',
    utilisation: '{prefix}resume',

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

        if (!client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} Bu müzik zaten çalıyor!`);

        const success = client.player.resume(message);

        if (success) message.channel.send(`${client.emotes.success} ${client.player.getQueue(message).playing.title} **DEVAM ETTİRİLDİ!**`);
    },
};