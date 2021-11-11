const { Client, Collection } = require("discord.js");
const os = require("os")

const client = new Client({
    intents: [ 32767 ], 
    partials: ["CHANNEL"],
    allowedMentions: { parse: ['users', 'roles'], repliedUser: true}
});
module.exports = client;

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");

// Initializing the project
require("./handler")(client);


client.login("ODk5Mjk4NTAyNTUzNzgwMzE0.YWwu_w.24jgkEkm8RY2hlp2oLEbuQa8Ul8");