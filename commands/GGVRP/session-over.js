const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
    name: "serverend",
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        if (message.deletable) message.delete();
        if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(`${message.member} You do not have permissions to use this command.`)

        const time = args.slice(1).join(" ")

        message.channel.send(`Server ending, Thanks for joining ${message.member} session.`);
    },
};
