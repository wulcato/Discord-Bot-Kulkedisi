
module.exports = async (client, member) => {
  if (member.guild.id != '660426200392531968') return;
  let myRole = member.guild.roles.cache.get("660431141869977631"); //role
  member.roles.add(myRole);
  const channelid = '717489700776181832'; //welcome
  const targetchannelid = '745364042629120081'; //rules 
  console.log(member)

  const message2 = `Hoşgeldin <@${member.id}> ! Lütfen  ${member.guild.channels.cache
    .get(targetchannelid)} ' i okumayı unutma!`

  const channel = member.guild.channels.cache.get(channelid)
  channel.send(message2)
};


