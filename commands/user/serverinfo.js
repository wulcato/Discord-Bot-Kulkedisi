const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const config = require('../../config.json');
const moment = require('moment');
const chalk = require('chalk');
module.exports = {
    name: 'serverinfo',
    aliases: ['sunucubilgi'],
    category: 'User',
    utilisation: '{prefix}serverinfo',

    execute(client, message, args) {
        var serverIcon = message.guild.iconURL({ dynamic: true });


        const filterLevels = {
          DISABLED: 'Kapalı',
          MEMBERS_WITHOUT_ROLES: 'Rolsüz',
          ALL_MEMBERS: 'Herkes'
        };
      
        const verificationLevels = {
          NONE: 'YOK',
          LOW: 'Düşük',
          MEDIUM: 'Orta',
          HIGH: 'YÜKSEK (╯°□°）╯︵ ┻━┻',
          VERY_HIGH: 'ÇOK YÜKSEK ┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻'
        };
      
        const regions = {
          brazil: 'Brazil',
          europe: 'Europe',
          hongkong: 'Hong Kong',
          india: 'India',
          japan: 'Japan',
          russia: 'Russia',
          singapore: 'Singapore',
          southafrica: 'South Africa',
          sydeny: 'Sydeny',
          'us-central': 'US Central',
          'us-east': 'US East',
          'us-west': 'US West',
          'us-south': 'US South'
        };
        const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
        const members = message.guild.members.cache;
        const channels = message.guild.channels.cache;
        const emojis = message.guild.emojis.cache;
      
        const embed = new MessageEmbed()
          .setTitle(message.guild.name)
          .setColor(0x348a58)
          .addField('Sahip', message.guild.owner, false)
          .addField('Bölge', '`' + regions[message.guild.region] + '`', true)
          .addField('Boost Tier ', '`' + `${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : 'YOK'} (${message.guild.premiumSubscriptionCount || '0'})` + '`', true)
          .addField('Aktif Filtre', '`' + `${filterLevels[message.guild.explicitContentFilter]}` + '`', true)
          .addField('Üyeler', '`' + `${message.guild.memberCount} (${members.filter(member => member.user.bot).size} BOT)` + '`', true)
          .addField('Doğrulama Seviyesi', '`' + verificationLevels[message.guild.verificationLevel] + '`', true)
          .addField('Emojiler', '`' + emojis.size + '`', true)
          .addField('Roller', '`' + roles.length + '`', true)
          .addField('Yazı Kanalları', '`' + `${channels.filter(channel => channel.type === 'text').size}` + '`', true)
          .addField('Ses Kanalları', '`' + `${channels.filter(channel => channel.type === 'voice').size}` + '`', true)
      
          .addField('Oluşturulma Tarihi', `${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).format('LL')} [${moment(message.guild.createdTimestamp).fromNow()}]`)
          .setThumbnail(serverIcon)
          .setFooter('WulNar', client.user.avatarURL());
        message.channel.send(embed);
    },
};