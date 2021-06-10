const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const config = require('../../config.json');
module.exports = {
    name: 'temizle',
    aliases: ['clear'],
    category: 'Moderation',
    utilisation: '{prefix}temizle [adet/max100]',

    execute(client, message) {

        //if (!message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])) return message.channel.send("Üzgünüm bir moderatör değilsin.");
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("<:panik:845427069403398164> Üzgünüm bir moderatör değilsin.");

        const args = message.content.split(' ').slice(1); // All arguments behind the command name with the prefix
        const amount = args.join(' '); // Amount of messages which should be deleted

        if (!amount) return message.reply(`${config.prefix}temizle [adet/max100]`); // Checks if the `amount` parameter is given
        if (isNaN(amount)) return message.reply('sadece sayılarr'); // Checks if the `amount` parameter is a number. If not, the command throws an error

        if (amount > 100) return message.reply('100\'den fazla mesajı bir arada silemem!'); // Checks if the `amount` integer is bigger than 100
        if (amount < 2) return message.reply('en az 2 mesaj silebilirim'); // Checks if the `amount` integer is smaller than 1


        message.channel.bulkDelete(amount);
        message.reply(`**${amount}** tane mesaj başarıyla silindi!`)
            .then(message => {
                message.delete({ timeout: 3000 })
            })

    },
};