const {
    Command
} = require('discord-akairo');
const { ChannelTypes } = require('discord.js');

class BroadcastCommand extends Command {
    constructor() {
        super('broadcast', {
            aliases: ['broadcast', 'bdc', 'bd'],
            args: [{
                id: "broadcastMessage", match: "content"
            }]
        });
    }

    exec(message, args) {
        message.delete();

        if(message.author.id === "724693796499095552" || message.author.id === "256892994504884224"){
            this.client.channels.cache.forEach(channel => {
                if(channel.name === "maj-patouuu-bot"){
                    channel.send({content: args.broadcastMessage})
                }else{
                    console.log('test')
                }
            })
        }else{
            message.channel.send("Pauvre fou, tu n'a pas la force nécessaire pour faire cet commande")
        }
    }
}

module.exports = BroadcastCommand;