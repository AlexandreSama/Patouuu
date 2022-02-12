const {
    Command
} = require('discord-akairo')
const Discord = require('discord.js');

class ServerinfosCommand extends Command {
    constructor() {
        super('serverinfos', {
            aliases: ['serverinfos', "sv", "discord"]
        });
    }
       
    exec(message) {

         message.delete()

         let guild = message.guild;

        let lien =  new Discord.MessageEmbed()
        .setTitle(`Infos du serveur ${guild.name}`)
        .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic : true}))
        .addField("Nombres d'utilisateurs", `${guild.memberCount}`, true)
        .addField("Nombres de channels", `${guild.channels.cache.size}`, true)
        .addField("Propriétaire du serveur", `<@${guild.ownerId}>`, true)
        .addField("Role le plus haut", `${guild.roles.highest}`, true)
        .addField("Région du serveur", `${guild.preferredLocale}`, true)
        .addField('Date de création du serveur', `${guild.createdAt}`, true)
        .setFooter(`Id du serveur: ${guild.id}`)
        
        message.channel.send({embeds: [lien]})
    }
}

module.exports = ServerinfosCommand;