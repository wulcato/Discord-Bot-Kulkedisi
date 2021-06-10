const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const config = require('../../config.json');
module.exports = {
    name: 'filter',
    aliases: ['filtre'],
    category: 'Music',
    utilisation: '{prefix}filter [filter name]',

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
            .setDescription(`${client.emotes.error} Lütfen etkinleştirmek veya devre dışı bırakmak için geçerli bir filtre belirtin!`);
        if (!args[0]) return message.channel.send(embed4);

        const filterToUpdate = client.filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        const embed5 = new MessageEmbed()
            .setColor('#ff2323')
            .setDescription(`${client.emotes.error} Böyle bir filtre yok (8D, vibrato, pulsator...)!`);
        if (!filterToUpdate) return message.channel.send(embed5);

        const filtersUpdated = {};

        filtersUpdated[filterToUpdate] = client.player.getQueue(message).filters[filterToUpdate] ? false : true;

        client.player.setFilters(message, filtersUpdated);

        const embed6 = new MessageEmbed()
            .setColor('#00c1ff')
            .setDescription(`${client.emotes.music} Bu filtreyi **etkinleştiriyorum**. Lütfen Bekleyin... Not: Müzik ne kadar uzunsa, o kadar uzun sürer.`);
        const embed7 = new MessageEmbed()
            .setColor('#00c1ff')
            .setDescription(`${client.emotes.music} Bu filtreyi **devre-dışı** yapıyorum. Lütfen bekleyin... Not: Müzik ne kadar uzunsa, o kadar uzun sürer.`);
        if (filtersUpdated[filterToUpdate]) message.channel.send(embed6);

        else message.channel.send(embed7);
    },
};