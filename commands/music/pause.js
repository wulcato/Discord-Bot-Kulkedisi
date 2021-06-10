const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const config = require('../../config.json');
module.exports = {
    name: 'pause',
    aliases: ['durdur'],
    category: 'Music',
    utilisation: '{prefix}pause',

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
            .setDescription(`${client.emotes.error} Müzik zaten durdurulmuş!`);
        if (client.player.getQueue(message).paused) return message.channel.send(embed4);

        const success = client.player.pause(message);

        const embed5 = new MessageEmbed()
            .setColor('#3aff00')
            .setDescription(`${client.emotes.success} ${client.player.getQueue(message).playing.title} **DURDURULDU!**`);
        if (success) message.channel.send(embed5);
    },
};