const {
    Command
} = require('discord-akairo')
const Discord = require('discord.js');

class LienUtileCommand extends Command {
    constructor() {
        super('liens', {
            aliases: ['liens', "l"]
        });
    }
       
    exec(message) {

         message.delete()

        let lien =  new Discord.MessageEmbed()
        .setColor('#0FFF00')
        .setTitle(`Liens utiles GMOD`)
        .setAuthor('Patouuu', 'https://zupimages.net/up/21/49/h8q2.png')
        .setDescription('Lien du Forum [ici](https://phenixrp.hosterfy.fr/forums).\n Lien de la boutique [ici](https://phenixrp.hosterfy.fr/boutique/). \n Lien collection DarkRP [ici](http://steamcommunity.com/sharedfiles/filedetails/?id=2558973581).\n Lien collection murder [ici](https://steamcommunity.com/sharedfiles/filedetails/?id=2634396112). \n Lien du discord officiel [ici](https://discord.gg/BpPWaQq).\n\n**Ip de nos serveurs:**\n\nIp serveur DarkRP: connect game2-fr.hosterfy.com:63025\n Ip serveur Murder: connect game7-fr.hosterfy.com:63974')
        .setImage('https://cdn.discordapp.com/attachments/867467104411058186/914553896637181952/liens_utile_2.gif')
        .setTimestamp() 
        .setFooter(`Commande by Phénix Team's | Tout droit reservée © 2020-2022`, 'https://imgur.com/Tgi17M8.png')
        
        message.channel.send({embeds: [lien]})
    }
}

module.exports = LienUtileCommand;