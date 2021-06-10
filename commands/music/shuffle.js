const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const config = require('../../config.json');
module.exports = {
    name: 'shuffle',
    aliases: ['sh', 'karıştır'],
    category: 'Music',
    utilisation: '{prefix}shuffle',

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

        const success = client.player.shuffle(message);
        const embed4 = new MessageEmbed()
            .setColor('#3aff00')
            .setDescription(`${client.emotes.success}  **${client.player.getQueue(message).tracks.length}** tane şarkı karıştırıldı!`);
        if (success) message.channel.send(embed4);
    },
};