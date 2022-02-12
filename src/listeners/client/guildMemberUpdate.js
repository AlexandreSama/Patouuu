const {
    Listener
} = require('discord-akairo')
const {
    MessageEmbed
} = require('discord.js');

class guildMemberUpdateListener extends Listener {
    constructor() {
        super('guildMemberListener', {
            emitter: 'client',
            event: 'guildMemberUpdate'
        });
    }

    exec(oldMember, newMember) {
        const oldStatus = oldMember.premiumSince;
        const newStatus = newMember.premiumSince;

        //Exemple a modifier
        const embedAddBoost = new MessageEmbed()
            .setColor('#FF2D00')
            .setTitle('Une personne géniale vient de boost')
            .setAuthor(
                oldMember.user.username,
                oldMember.user.displayAvatarURL,
            )
            .setDescription('Ho un boost , toute l\'équipe administratif le remerci , vous pouvez faire la commande +boost pour voir les avantages!')
            .addFields({
                name: newMember.user.tag,
                value: "Viens de booster le serveur discord un grand merci à lui !"
            })
            .setImage('https://img.phenixmg.fr/8fl8hk.gif')
            .setTimestamp()
            .setFooter(
                'Ses avantage de booster lui ont était donner automatiquement',
                'https://zupimages.net/up/21/49/h8q2.png'
            );

        if (!oldStatus && newStatus) {
            this.client.channels.cache.get('942048925538459688').send({
                embeds: [embedAddBoost]
            })
        }

        //Exemple a modifier
        const embedRemoveBoost = new MessageEmbed()
            .setColor('#F3FF00')
            .setTitle('Un boost vient d\'être retirer')
            .setAuthor(
                oldMember.user.username,
                oldMember.user.displayAvatarURL,
                
            )
            .setDescription('Ah une personne n\'as pas renouveler son abonnement nitros xD ! ')
            .addFields({
                name: newMember.user.tag,
                value: "Viens de retirer son boost du serveur !"
            })
            .setImage('https://img.phenixmg.fr/8fl8hk.gif')
            .setTimestamp()
            .setFooter(
                'Ses avantages de nitros booster lui ont étit retirer automatiquement',
                'https://zupimages.net/up/21/49/h8q2.png'
            );

        if (oldStatus && !newStatus) {
            this.client.channels.cache.get('942048925538459688').send({
                embeds: [embedRemoveBoost]
            })
        }
    }
}

module.exports = guildMemberUpdateListener