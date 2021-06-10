const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const config = require('../../config.json');
module.exports = {
    name: 'kick',
    aliases: ['at'],
    category: 'Moderation',
    utilisation: '{prefix}kick [kullanıcı]',

    execute(client, message, args) {
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("<:panik:845427069403398164> Üzgünüm bir moderatör değilsin.");
        let user = message.mentions.users.first();

        if (message.mentions.users.size < 1) return message.reply(`${config.prefix}kick [kullanıcı] | Kullanıcıyı etiketleyip tekrar deneyin.`).catch(console.error);

        if (!message.guild.member(user).kickable) return message.reply('Rolü benden üstün olanlara moderasyon komutları kullanamam.');
        message.guild.member(user).kick();
        message.channel.send(`**${user.tag}** sunucudan atıldı! <a:clapp:844984531983007754> `);
    },
};