const Discord = require("discord.js");
const info = require("./info.json");
const client = new Discord.Client();
const prefix = "!";

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
    if (msg.content === prefix + "ping") {
        msg.reply("pong!");
    }
    else if (msg.content === prefix + "purge") {
        async function clear() {
            const fetch = await msg.channel.fetchMessages({limit: 99});
            msg.channel.bulkDelete(fetch);
        }
        clear();
        try {
            msg.reply("messages cleared!");
        }
        catch (err) {}
    }
});

client.login(info.token);