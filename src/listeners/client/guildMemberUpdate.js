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
            .setColor('#0099ff')
            .setTitle('Une personne vient de boost le discord un grand merci a elle')
            .setAuthor({
                name: oldMember.user.username,
                iconURL: oldMember.user.displayAvatarURL,
            })
            .setDescription('L\équipe du staff de phénixMG vous remerci pour le boost !')
            .addFields({
                name: newMember.user.tag,
                value: "Viens de booster le serveur !"
            })
            .setImage('https://i.imgur.com/AfFp7pu.png')
            .setTimestamp()
            .setFooter({
                text: 'Ses avantage de booster vous ont était donner automatiquement',
                iconURL: 'https://zupimages.net/up/21/49/h8q2.png'
            });

        if (!oldStatus && newStatus) {
            this.client.channels.cache.get('866047187535921172').send({
                embeds: [embedAddBoost]
            })
        }

        //Exemple a modifier
        const embedRemoveBoost = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Un boost vient d\'être retirer')
            .setAuthor({
                name: oldMember.user.username,
                iconURL: oldMember.user.displayAvatarURL,
                
            })
            .setDescription('Ah une personne n\'as pas renouveler son abonnement nitros xD ! ')
            .addFields({
                name: newMember.user.tag,
                value: "Viens de retirer son boost du serveur !"
            })
            .setImage('https://i.imgur.com/AfFp7pu.png')
            .setTimestamp()
            .setFooter({
                text: 'Ses avantages de nitros booster vous ont étit retirer automatiquement',
                iconURL: 'https://i.imgur.com/AfFp7pu.png'
            });

        if (oldStatus && !newStatus) {
            this.client.channels.cache.get('942048925538459688').send({
                embeds: [embedRemoveBoost]
            })
        }
    }
}

module.exports = guildMemberUpdateListener