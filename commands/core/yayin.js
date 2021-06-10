const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const config = require('../../config.json');
module.exports = {
    name: 'yayin',
    aliases: [],
    category: 'Core',
    utilisation: '{prefix}yayin <command name>',

    execute(client, message, args) {
        if (message.author.id === config.owner) {

            const embed = new MessageEmbed()
                .setTitle('Twitch.TV/Wulcato')
                .setURL('https://twitch.tv/wulcato')
                .setColor(10181046)
                .setImage('https://cdn.discordapp.com/attachments/660433529510952971/823978013178724392/ca2b5def2455605787254a93a74fafe6.webp')
                .setDescription("Haşmetli, Kasvetli, Kocaman, Büyük bir PatlıcanMan <:eggplant:823979319478059089>")
                .setFooter('WulNar', client.user.avatarURL());
            //message.channel.send("**https://twitch.tv/wulcato**");
            //message.channel.send(embed);
            const channel = client.channels.cache.get('814980816769253376');
            channel.send('<:partying_face:823976366390116393>  <https://www.twitch.tv/wulcato> Yayın Başladı!   ||@everyone|| ', {
                embed: embed,
            });


        } else {
            message.reply("Uhm. No no no!")
        }
    },
};