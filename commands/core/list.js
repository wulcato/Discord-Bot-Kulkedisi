const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const config = require('../../config.json');
module.exports = {
    name: 'list',
    aliases: [],
    category: 'Core',
    utilisation: '{prefix}list <command name>',

    execute(client, message, args) {
        if (message.author.id === config.owner) {

            message.reply("Toplam Sunucu : `" + client.guilds.cache.size + "` | Toplam Kullanıcı`" + client.users.cache.size + "`")
            client.guilds.cache.forEach(guild => {
                message.author.send(`${guild.name} | ${guild.id} | ${guild.memberCount}`);
                console.log(`${guild.name} | ${guild.id} | ${guild.memberCount}`);
            })


        } else {
            message.reply("Uhm. No no no!")
        }
    },
};