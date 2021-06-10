const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const config = require('../../config.json');
module.exports = {
    name: 'queue',
    aliases: ['sıra', 'liste'],
    category: 'Music',
    utilisation: '{prefix}queue',

    execute(client, message) {
        const embed = new MessageEmbed()
            .setColor('#ff2323')
            .setDescription(`${client.emotes.error} Bir sesli kanalda değilsin!`);
        if (!message.member.voice.channel) return message.channel.send(embed);

        const embed2 = new MessageEmbed()
            .setColor('#ff2323')
            .setDescription(`${client.emotes.error} Aynı ses kanalında değilsiniz!`);
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(embed2);

        const queue = client.player.getQueue(message);

        const embed3 = new MessageEmbed()
            .setColor('#ff2323')
            .setDescription(`${client.emotes.error} Bir müzik çalmıyor!`);
        if (!client.player.getQueue(message)) return message.channel.send(embed3);

        const embed4 = new MessageEmbed()
            .setColor('#a134d8')
            .setDescription(`**${message.guild.name} Sunucusunun Müzik Sırası ${client.emotes.queue} ${client.player.getQueue(message).loopMode ? '(Tekrar)' : ''}**\n\n**Şuan Çalıyor :** ${queue.playing.title} | ${queue.playing.author}\n\n` + (queue.tracks.map((track, i) => { return `**#${i + 1}** - ${track.title} | ${track.author} (Ekleyen : ${track.requestedBy.username})` }).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `And **${queue.tracks.length - 5}** other songs...` : `Çalma listesinde **${queue.tracks.length}** şarkı var...`}`));
        message.channel.send(embed4);
    },
};

