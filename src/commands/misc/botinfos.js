const {
    Command
} = require('discord-akairo')
const Discord = require('discord.js');

class botInfos extends Command {
    constructor() {
        super('botinfos', {
            aliases: ['botinfos'],
        });
    }

    exec(message) {

        const embed = new Discord.MessageEmbed()
            .setAuthor(this.client.user.username, this.client.user.avatarURL)
            .setColor(0x00A2E8)
            .addField("Memoire", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}` + "MBS", true)
            .addField("Latence", Date.now() - message.createdTimestamp + "ms", true)
            .addField('Utilisateurs Totales', `${this.client.users.cache.size}`, true)
            .addField('Channels Totales', `${this.client.channels.cache.size}`, true)
            .addField('Serveurs Totales', this.client.guilds.cache.size.toLocaleString(), true)
            .addField('Date de création du bot', this.client.user.createdAt.toLocaleString())
            .addField('Librairie', `discord.js 13`, true)
            .addField('Node.js Version', process.version, true)
            .addField('Bot Version', "0.1.2", true)
            .setTimestamp()
            .setFooter(this.client.user.username, this.client.user.avatarURL);

        message.channel.send({
            embeds: [embed]
        })
    }
}

module.exports = botInfos;