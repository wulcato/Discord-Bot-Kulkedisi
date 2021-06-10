const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const config = require('../../config.json');
module.exports = {
    name: 'davet',
    aliases: ['invite'],
    category: 'User',
    utilisation: '{prefix}davet',

    execute(client, message, args) {
        const embed = new MessageEmbed()
            .setThumbnail(client.user.avatarURL())

            .setTitle('WulNar', 'https://discord.com/oauth2/authorize?client_id=755176292151853086&scope=bot&permissions=406744318')
            .setURL('https://twitch.tv/wulcato')
            .setColor(10181046)
            .setImage('https://cdn.discordapp.com/attachments/843906258889343043/844068336627482674/discord.gif')
            .setDescription("Ş-Şey WulNar'ı Beğendin mi :point_right: :point_left: Kendi Sunucuna Eklemek için [Tıkla!](https://discord.com/oauth2/authorize?client_id=755176292151853086&scope=bot&permissions=406744318) ")
            .addField('Davet Linki', 'https://discord.com/oauth2/authorize?client_id=755176292151853086&scope=bot&permissions=406744318')
            .setFooter('WulNar', client.user.avatarURL());
        message.channel.send(embed);
    },
};