const {Listener} = require('discord-akairo')
const { MessageEmbed } = require('discord.js');

class guildMemberUpdateListener extends Listener{
    constructor(){
        super('guildMemberListener', {
            emitter: 'client',
            event: 'guildMemberUpdate'
        });
    }

    exec(oldMember, newMember){
        const oldStatus = oldMember.premiumSince;
        const newStatus = newMember.premiumSince;

        //Exemple a modifier
        const embedAddBoost = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Some title')
        .setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
        .setDescription('Some description here')
        .addFields(
            { name: newMember.user.tag, value: "Viens de booster le serveur !" }
        )
        .setImage('https://i.imgur.com/AfFp7pu.png')
        .setTimestamp()
        .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

        if (!oldStatus && newStatus) {
            this.client.channels.cache.get('866047187535921172').send({embeds: [embedAddBoost]})
        }

        if(oldStatus && !newStatus){
            this.client.channels.cache.get('866047187535921172').send(`Oh déséspoir, ${newMember.user.tag} viens de retirer son boost !`)
        }
    }
}

module.exports = guildMemberUpdateListener