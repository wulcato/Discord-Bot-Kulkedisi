module.exports = async (client) => {
    console.log(`Logged in as ${client.user.username}. Ready on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users`);

    const log = message => {
        console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
    };
    /*client.user.setActivity(".müzik | .yardım | Müzik Komutları geldi!", {
        type: "STREAMING",
        url: "https://www.twitch.tv/wulcato"
    });*/
    client.user.setActivity(".yardım");
};