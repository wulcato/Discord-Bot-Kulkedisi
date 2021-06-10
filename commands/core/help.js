const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const config = require('../../config.json');
const prefix = config.prefix;
module.exports = {
    name: 'help',
    aliases: ['h', 'yardım', 'yardim'],
    category: 'Core',
    utilisation: '{prefix}help <command name>',

    execute(client, message, args) {
        if (!args[0]) {
            const infos = message.client.commands.filter(x => x.category == 'Infos').map((x) => '`.' + x.name + '`').join('\n ');
            const music = message.client.commands.filter(x => x.category == 'Music').map((x) => '`.' + x.name + '`').join('\n ');
            const usersc = message.client.commands.filter(x => x.category == 'User').map((x) => '`.' + x.name + '`').join('\n ');
            const moderationc = message.client.commands.filter(x => x.category == 'Moderation').map((x) => '`.' + x.name + '`').join('\n ');
            const embed2 = new MessageEmbed()
                .setThumbnail(client.user.avatarURL({ size: 128 }))

                .setDescription(`Prefix = .\nMüzik filtreleri için ${config.prefix}filter komutunu kullanın (örnek : ${config.prefix}filter 8D)\n`+"`.yardım [komutadı]` yazarak detaylı yardım sekmesini görebilirsiniz.")
                .setAuthor(client.user.username + " Yardım Sekmesi")
                .setColor('#E67E22')
                .addField('Kullanıcı Komutları', usersc, true)
                .addField('Mod Komutları', moderationc, true)
                .addField('Bot Komutları', infos, true)
                .addField('Müzik Komutları', music, true)
                
                .setFooter('WulNar', client.user.avatarURL());
            message.channel.send(embed2);
        } else {
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return message.channel.send(`${client.emotes.error} böyle bir komutu bulamadım!`);
            const embed3 = new MessageEmbed()
            .setThumbnail(client.user.avatarURL({ size: 128 }))

            .setDescription(`Detaylı Komut bilgileri.`)
            .setAuthor(client.user.username + " Yardım Sekmesi")
            .setColor('#E67E22')
            .addField('Komut', command.name, true)
            .addField('Kategori', command.category, true)
            .addField('Takma Adları (Aliases)', command.aliases.length < 1 ? 'Yok' : command.aliases.join(', ') ,true)
            .addField('Kullanımı', command.utilisation.replace('{prefix}', prefix), true)
            .setFooter('WulNar', client.user.avatarURL());
        message.channel.send(embed3);
        };
    },
};