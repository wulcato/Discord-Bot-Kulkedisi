
module.exports = async (client, member) => {
  if (member.guild.id != '660426200392531968') return;
  const channelid = '717489700776181832'; //welcome
  const targetchannelid = '745364042629120081'; //rules 
  console.log(member)

  const message2 = `**${member.user.tag}** , Sunucudan Ayrıldı. `

  const channel = member.guild.channels.cache.get(channelid)
  channel.send(message2)

};