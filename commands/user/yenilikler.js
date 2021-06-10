const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const config = require('../../config.json');
module.exports = {
    name: 'yenilikler',
    aliases: ['updates', 'changelog'],
    category: 'User',
    utilisation: '{prefix}yenilikler',

    execute(client, message, args) {
        const fotosok = 'https://media.discordapp.net/attachments/660433529510952971/844158081801781258/giphy.gif';
        const embed = new MessageEmbed()


            .setTitle('WulNar Yenilikler', 'https://discord.com/oauth2/authorize?client_id=755176292151853086&scope=bot&permissions=406744318')
            //https://media.discordapp.net/attachments/660433529510952971/844158081801781258/giphy.gif
            .setThumbnail(fotosok)
            .setColor('ORANGE')
            .setImage('https://media.discordapp.net/attachments/843906258889343043/844161207832543232/discord.png')
            .setDescription("WulNar botu her geçen gün güncelleniyor! :sunglasses: Botun Sunucusuna gitmek için [Tıkla!](https://discord.gg/aZJyUeRmGd) \n Botu Kendi Sunucuna Eklemek için [Tıkla](https://discord.com/oauth2/authorize?client_id=755176292151853086&scope=bot&permissions=406744318) ya da .davet yazabilirsin")
            .addField('Yenilikler :ping_pong: ', '**:fleur_de_lis: MÜZİK KOMUTLARI EKLENDİ.\n:fleur_de_lis: Avatar komutunun hataları giderildi.\n:fleur_de_lis: Ban ve Kick komutlarındaki ekstra sebep sorma isteğe bağlı olarak değiştirildi\n :fleur_de_lis: SunucuBilgi Komutu güncellendi.\n:fleur_de_lis: Temizle komutundaki hatalar giderildi.\n:fleur_de_lis: Yardım komutunun kullanıcı komutlarını gösterememe sorunu giderildi.\n:fleur_de_lis: Yeni discord.js versiyonuna geçildi.**')
            .addField('Yakında Gelecek Özellikler', '**:low_brightness: Bütün sunucularda ayarlanabilir Hoşgeldin ve Hoşçakal sistemi.\n:low_brightness: Bütün sunucularda ayarlanabilir Log Sistemi.**')
            .setFooter('WulNar', client.user.avatarURL());
        message.channel.send(embed);
    },
};