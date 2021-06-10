const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const config = require('../../config.json');
module.exports = {
    name: 'volume',
    aliases: ['ses', 'düzey', 'sesdüzeyi'],
    category: 'Music',
    utilisation: '{prefix}volume [1-100]',

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

        const embed4 = new MessageEmbed()
            .setColor('#ff2323')
            .setDescription(`${client.emotes.error} Lütfen sayı giriniz!`+" | `.volume [1-100]`");
        if (!args[0] || isNaN(args[0]) || args[0] === 'Infinity') return message.channel.send(embed4);

        const embed5 = new MessageEmbed()
        .setColor('#ff2323')
        .setDescription(`${client.emotes.error} Lütfen geçerli bir sayı giriniz!`+" | `.volume [1-100]`");
        if (Math.round(parseInt(args[0])) < 1 || Math.round(parseInt(args[0])) > 100) return message.channel.send(embed5);

        const success = client.player.setVolume(message, parseInt(args[0]));

        const embed6 = new MessageEmbed()
        .setColor('#3aff00')
        .setDescription(`${client.emotes.success} Ses seviyesi ayarlandı : **${parseInt(args[0])}%** !`);
        if (success) message.channel.send();
    },
};