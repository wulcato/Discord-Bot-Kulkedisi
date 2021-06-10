const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const config = require('../../config.json');
module.exports = {
    name: 'nowplaying',
    aliases: ['np', 'çalan', 'çalıyor', 'playing'],
    category: 'Music',
    utilisation: '{prefix}nowplaying',

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

        const track = client.player.nowPlaying(message);
        const filters = [];

        Object.keys(client.player.getQueue(message).filters).forEach((filterName) => client.player.getQueue(message).filters[filterName]) ? filters.push(filterName) : false;
        const embed4 = new MessageEmbed()
            .setColor('#f300ff')
            .setAuthor(track.title)
            .setFooter('WulNar', client.user.avatarURL())
            .addField('Kanal', track.author, true)
            .addField('İsteyen', track.requestedBy.username, true)
            .addField('Liste?', track.fromPlaylist ? 'Evet' : 'Hayır', true)

            .addField('İzlenme', track.views, true)
            .addField('Süresi', track.duration, true)
            .addField('Filtre', filters.length + '/' + client.filters.length, true)

            .addField('Ses Düzeyi', client.player.getQueue(message).volume, true)
            .addField('Tekrarlama?', client.player.getQueue(message).repeatMode ? 'Evet' : 'Hayır', true)
            .addField('Durdurma?', client.player.getQueue(message).paused ? 'Durduruldu' : 'Devam ediyor', true)

            .addField('İlerleme çubuğu', client.player.createProgressBar(message, { timecodes: true }), true);

        if (!client.player.getQueue(message)) return message.channel.send(embed3);
        message.channel.send(embed4);
    },
};