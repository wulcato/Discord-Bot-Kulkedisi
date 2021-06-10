const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const config = require('../../config.json');
module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat', 'tekrar', 'tekrarla'],
    category: 'Music',
    utilisation: '{prefix}loop',

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
            .setDescription(`${client.emotes.error} Bir müzik çalmıyor!`);
        if (!client.player.getQueue(message)) return message.channel.send(embed3);

        if (args.join(" ").toLowerCase() === 'queue') {
            if (client.player.getQueue(message).loopMode) {
                client.player.setLoopMode(message, false);
                const embed4 = new MessageEmbed()
                    .setColor('#3aff00')
                    .setDescription(`${client.emotes.success} Tekrarlama modu **devredışı** !`);
                return message.channel.send(embed4);
            } else {
                client.player.setLoopMode(message, true);
                const embed5 = new MessageEmbed()
                    .setColor('#3aff00')
                    .setDescription(`${client.emotes.success} Tekrarlama modu **etkinleştirildi** ! tüm kuyruk sonsuza dek tekrarlanacak!`);
                return message.channel.send(embed5);
            };
        } else {
            if (client.player.getQueue(message).repeatMode) {
                client.player.setRepeatMode(message, false);
                const embed6 = new MessageEmbed()
                    .setColor('#3aff00')
                    .setDescription(`${client.emotes.success} Tekrarlama modu **devredışı** !`);
                return message.channel.send(embed6);
            } else {
                client.player.setRepeatMode(message, true);
                const embed7 = new MessageEmbed()
                    .setColor('#3aff00')
                    .setDescription(`${client.emotes.success} Tekrarlama modu **etkinleştirildi** ! tüm kuyruk sonsuza dek tekrarlanacak!`);
                return message.channel.send(embed7);
            };
        };
    },
};