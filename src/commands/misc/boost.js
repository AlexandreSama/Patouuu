const {
    Command
} = require('discord-akairo')
const Discord = require('discord.js');

class BoostCommand extends Command {
    constructor() {
        super('boost', {
            aliases: ['boost'],
            category: 'Misc',
            description: {
                content: "Cette commande vous donne la liste des avantages de boost",
                usage: 'boost',
                examples: ['boost']
            }
        });
    }
       
    exec(message) {

         message.delete()

        let lien =  new Discord.MessageEmbed()
        .setColor('F700FF')
        .setTitle(`Ci-Joint se trouve une liste des avantages disponible avec nitro booster`)
        .setAuthor('Patouuu', 'https://zupimages.net/up/21/49/h8q2.png')
        .setDescription('```Petite précision ses avantages peuvent évoluer et/ou être modifier (si une modfi est faite vous en serez averti avant , ses avantages sont valable uniquement sur ce discord : discord.gg/BpPWaQq)```')
        .addFields(
            { name: '◻️ `Avantage n°1`', value: '>>> Une fois le boost activer vous recevez un accès au channel <#941831727352008734> \n***Contacter en cas de problèmes un <@&839878650010140672>***' },
            { name: '\u200B', value: '\u200B' },
            { name: '◻️ `Avantage n°2`', value: '>>> Un rôle custome pour tout les booster (<@&749353590912450560>)\n***Contacter en cas de problèmes un <@&839878650010140672>***', inline: true },
            { name: '\u200B', value: '\u200B' },
            { name: '◻️ `Avantage n°3`', value: '>>> Une promotions de 15% sur tout nos services (premium bot , pack gmod ,...)\n***Contacter en cas de problèmes un <@&839878650010140672>*** ', inline: false },
            { name: '\u200B', value: '\u200B' },
            { name: '◻️ `Disclaimer`', value: '>>> Si vous avez des idées d\'ajouts d\'avantages faite les dans <#745314702795472936>', inline: false },
            
            
        )
        .setImage('https://img.phenixmg.fr/8fl8hk.gif')
        .setTimestamp() 
        .setFooter(`Commande by Phénix Team's | Tout droit reservée © 2020-2022`, 'https://zupimages.net/up/21/49/h8q2.png')
        
        message.channel.send({embeds: [lien]})
    }
}

module.exports = BoostCommand;