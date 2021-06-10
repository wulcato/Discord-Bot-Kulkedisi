const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const config = require('../config.json');
module.exports = (client, error, message, ...args) => {
    switch (error) {
        case 'NotPlaying':
            const embed = new MessageEmbed()
                .setColor('#ff2323')
                .setDescription(`${client.emotes.error} Bu sunucuda çalınan müzik yok!`);
            message.channel.send(embed);
            break;
        case 'NotConnected':
            const embed2 = new MessageEmbed()
                .setColor('#ff2323')
                .setDescription(`${client.emotes.error} Herhangi bir ses kanalına bağlı değilsiniz!`);
            message.channel.send(embed2);
            break;
        case 'UnableToJoin':
            const embed3 = new MessageEmbed()
                .setColor('#ff2323')
                .setDescription(`${client.emotes.error} Ses kanalınıza katılamıyorum, lütfen izinlerimi kontrol edin!`);
            message.channel.send(embed3);
            break;
        case 'VideoUnavailable':
           const embed4 = new MessageEmbed()
                .setColor('#ff2323')
                .setDescription(`${client.emotes.error} ${args[0].title} ülkenizde mevcut değil! Geçiliyor...`);
                message.channel.send(embed4);
            break;
        case 'MusicStarting':
            message.channel.send(`Müzik başlıyor... Lütfen bekleyin!`);
            const embed5 = new MessageEmbed()
            .setColor('#ff2323')
            .setDescription(`Müzik başlıyor... Lütfen bekleyin!`);
            message.channel.send(embed5);
            break;
        default:

            const embed6 = new MessageEmbed()
            .setColor('#ff2323')
            .setDescription(`${client.emotes.error} Bir şeyler yanlış gitti...\nError : ${error}`);
            message.channel.send(embed6);
    };
};
