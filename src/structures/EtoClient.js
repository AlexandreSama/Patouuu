const {
    AkairoClient,
    CommandHandler,
    ListenerHandler
} = require('discord-akairo')

module.exports = class EtoClient extends AkairoClient {
    constructor(config = {}) {
        super({
            ownerID: ["256892994504884224", "724693796499095552", "537619289960873985"], 
            allowedMentions: {
                repliedUser: false,
                parse: ['roles', 'everyone', 'users']
            },
            partials: ['CHANNEL', 'GUILD_MEMBER', 'MESSAGE', 'REACTION', 'USER'],
            presence: {
                status: "online",
                activities: [{
                    name: "+help",
                    type: "LISTENING"
                }]
            },
            intents: 32767
        });

        this.CommandHandler = new CommandHandler(this, {
            allowMention: true,
            prefix: config.prefix,
            defaultCooldown: 2000,
            directory: './commands/',
        });

        this.ListenerHandler = new ListenerHandler(this, {
            directory: './listeners/'
        });

        this.CommandHandler.loadAll();
        this.CommandHandler.useListenerHandler(this.ListenerHandler);
        this.ListenerHandler.loadAll();
    }
}
