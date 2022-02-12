const {
    Command
} = require('discord-akairo')
const Discord = require('discord.js');

class botInvite extends Command {
    constructor() {
        super('botinvite', {
            aliases: ['botinvite']
        });
    }

    exec(message) {

        let lien =  new Discord.MessageEmbed()
        .setColor('#6100FF')
        .setTitle(`Lien d'invitation du bot`)
        .setAuthor('Patouuu', 'https://zupimages.net/up/21/49/h8q2.png')
        .setDescription('Invite moi dans ton serveur en cliquant [ici](https://discord.com/oauth2/authorize?client_id=744170993668587540&scope=bot&permissions=2146958847).')
        .setTimestamp() 
        .setFooter(`Commande by Phénix Team's`)
        
        message.channel.send({embeds: [lien]})
    }
}

module.exports = botInvite;