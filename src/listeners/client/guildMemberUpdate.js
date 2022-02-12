const {Listener} = require('discord-akairo')

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

        if (!oldStatus && newStatus) {
            this.client.channels.cache.get('942048925538459688').send(`${newMember.user.tag} viens de booster le serveur, merci a lui !`)
        }

        if(oldStatus && !newStatus){
            this.client.channels.cache.get('942048925538459688').send(`Oh déséspoir, ${newMember.user.tag} viens de retirer son boost !`)
        }
    }
}

module.exports = guildMemberUpdateListener