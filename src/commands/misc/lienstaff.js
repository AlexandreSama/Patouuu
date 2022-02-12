const {
    Command
} = require('discord-akairo')
const Discord = require('discord.js');

class LienStaffCommand extends Command {
    constructor() {
        super('lienstaff', {
            aliases: ['lienStaff', "lstaff"]
        });
    }
       
    exec(message) {

         message.delete()

        let lien =  new Discord.MessageEmbed()
        .setColor('F000FF')
        .setTitle(`Liens utiles Staff`)
        .setAuthor('Patouuu', 'https://zupimages.net/up/21/49/h8q2.png')
        .setDescription('Suivis point staffing [ici](https://docs.google.com/spreadsheets/d/1U3pqUOU3Q6KPn2gTeEzMZTmfFl2_iwoZgWoEvkU8448/edit?usp=sharing).\n Lien demande de ban [ici](https://docs.google.com/spreadsheets/d/18nubdvEoslLaVFnhqPpBKZxH2OaboVkuS5aAzL-O_bk/edit?usp=sharing). \n Lien tableau des sanctions [ici](https://docs.google.com/spreadsheets/d/1BspOHvDxtI4i1z3KWaeOJeHl_wYM2GGBxbiM9qhOqRI/edit?usp=sharing). \n Lien report bug (serveur) [ici](https://docs.google.com/spreadsheets/d/1paFfcFIEqWnLNzd0_oRpEnNNGMUT0wecLYDG6tmLce8/edit?usp=sharing).')
        .setImage('https://cdn.discordapp.com/attachments/870356020906577970/914556696997822494/liens_staff_2.gif')
        .setTimestamp() 
        .setFooter(`Commande by Phénix Team's | Tout droit reservée © 2020-2022`, 'https://zupimages.net/up/21/49/h8q2.png')
        
        message.channel.send({embeds: [lien]})
    }
}

module.exports = LienStaffCommand;