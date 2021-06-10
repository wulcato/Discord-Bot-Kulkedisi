const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const config = require('../config.json');
module.exports = (client, message, query) => {
    const embed = new MessageEmbed()
        .setColor('#ff2323')
        .setDescription(`${client.emotes.error} Hmmm.. Bir sorun oldu...\nŞunlardan birini yapmış olmalısın;\n- Sana özel otomatik oluşturulmuş youtube ve ya spotify listesi açmaya çalıştın ( Bir sonraki güncellemede eklenecek ) \n- Çok hızlı komut kullandın!\n- Aradığın şarkı bulunamadı.\n\n Eğer bunlardan biri değilse lütfen destek sunucusuna gelip hatayı bize anlat! katılmak için [tıkla!](https://discord.gg/aZJyUeRmGd)\n${query}`);
    message.channel.send(embed);
};