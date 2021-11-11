const { Message, Client } = require("discord.js");

module.exports = {
    name: "co",
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        if (message.deletable) message.delete();
        if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(`${message.member} You do not have permissions to use this command.`)

        message.channel.send(`${message.member} is going to be a co of the session`);
    },
};
