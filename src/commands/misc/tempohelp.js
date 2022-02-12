const {
    Command
} = require('discord-akairo')
const Discord = require('discord.js');

class AideCommand extends Command {
    constructor() {
        super('aide', {
            aliases: ['aide', "commandes", "aides", "help"]
        });
    }
       
    exec(message) {

         message.delete()

        let lien =  new Discord.MessageEmbed()
        .setColor('00FFA6')
        .setTitle(`Menu des commandes disponibles :`)
        .setAuthor('Patouuu', 'https://zupimages.net/up/21/49/h8q2.png')
        .setDescription('**Commandes Administrations :**\n-Clear\n\n**Commandes Fun :**\n-8ball\n-hug\n-marry\n-meurtre\n-punch\n-Roblox [Pseudo]\n\n**Commandes gestions :**\n-botinfos\n-botinvite\n-ping\n\n**Commandes Autres :**\n-liste\n-l\n\n\n***Ce menu est temporaire , il va chnager dans pas longtemps.***')
        .setImage('https://cdn.discordapp.com/attachments/914606821468151868/916302440125562890/standard_35.gif')
        .setTimestamp() 
        .setFooter(`Commande by Phénix Team's | Tout droit reservée © 2020-2022`)
        
        message.channel.send({embeds: [lien]})
    }
}

module.exports = AideCommand;