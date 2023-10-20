//please check https://github.com/wulcato/guildMemberExample
module.exports = async (client, member) => {
  if (member.guild.id != 'your main guild') return;
  const channelid = 'welcome channel id '; //welcome
  const targetchannelid = 'target channel id'; //rules 
  console.log(member)

  const message2 = `**${member.user.tag}** , Sunucudan Ayrıldı. `

  const channel = member.guild.channels.cache.get(channelid)
  channel.send(message2)

};
