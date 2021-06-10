const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const config = require('../../config.json');
module.exports = {
    name: 'müzik',
    aliases: ['music','musics'],
    category: 'Infos',
    utilisation: '{prefix}müzik',

    execute(client, message) {
        const infos = message.client.commands.filter(x => x.category == 'Infos').map((x) => '`.' + x.name + '`').join('\n ');
        const music = message.client.commands.filter(x => x.category == 'Music').map((x) => '`.' + x.name + '`').join('\n ');
        const usersc = message.client.commands.filter(x => x.category == 'User').map((x) => '`.' + x.name + '`').join('\n ');
        const moderationc = message.client.commands.filter(x => x.category == 'Moderation').map((x) => '`.' + x.name + '`').join('\n ');
        const embed2 = new MessageEmbed()
            .setThumbnail(client.user.avatarURL({ size: 128 }))

            .setDescription(`Müzik komutları Eklendi!\nŞu anlık Youtube ve Spotify Desteklemektedir!`)
            .setAuthor(client.user.username + " Müzik Sekmesi")
            .setColor('#E67E22')
            .addField('Müzik Komutları', music, true)
            
            .setFooter('WulNar', client.user.avatarURL());
        message.channel.send(embed2);
    },
};