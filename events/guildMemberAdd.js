// please check https://github.com/wulcato/guildMemberExample
module.exports = async (client, member) => {
  if (member.guild.id != 'your main guild id') return;
  let myRole = member.guild.roles.cache.get("role id"); //role
  member.roles.add(myRole);
  const channelid = 'welcome channel id'; //welcome
  const targetchannelid = 'target channel'; //rules 
  console.log(member)

  const message2 = `Hoşgeldin <@${member.id}> ! Lütfen  ${member.guild.channels.cache
    .get(targetchannelid)} ' i okumayı unutma!`

  const channel = member.guild.channels.cache.get(channelid)
  channel.send(message2)
};


