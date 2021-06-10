const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const config = require('../../config.json');
module.exports = {
    name: 'ban',
    aliases: ['yasakla'],
    category: 'Moderation',
    utilisation: '{prefix}ban [kullanıcı]',

    execute(client, message, args) {
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("<:panik:845427069403398164> Üzgünüm bir moderatör değilsin.");
        let user = message.mentions.users.first();

        if (message.mentions.users.size < 1) return message.reply(`${config.prefix}ban [kullanıcı] | Kullanıcıyı etiketleyip tekrar deneyin.`).catch(console.error);

        if (!message.guild.member(user).bannable) return message.reply('Rolü benden üstün olanlara moderasyon komutları kullanamam.');
        message.guild.member(user).ban();
        message.channel.send(`**${user.tag}** sunucudan yasaklandı! <a:banned:844984028170944552>`);
    },
};