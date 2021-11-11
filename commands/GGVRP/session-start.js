const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
    name: "startup",
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        if (message.deletable) message.delete();
        if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(`${message.member} You do not have permissions to use this command.`)
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!args[0]) return message.channel.send(`${message.member} Please provide when the server is going to start`)

        const time = args.slice(0).join(" ")

        message.channel.send(`server is being started by ${message.member}, if any staff would want to co, dm owner of the session. Server will be starting in ${time}.`);
    },
};
