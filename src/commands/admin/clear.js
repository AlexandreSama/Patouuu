const {
    Command
} = require('discord-akairo')
const Discord = require('discord.js');

class clearCommand extends Command {
    constructor() {
        super('clear', {
            aliases: ['clear'],
            userPermissions: "MANAGE_MESSAGES",
            args: [{
                id: "numberClear", type: "number", match: 'content'
            }]
        });
    }

    exec(message, args) {

        if(!args.numberClear){
             message.channel.send("Tu dois me donner un nombre de messages a supprimer stp !")
        }else{
            message.channel.bulkDelete(args.numberClear);
            message.channel.send("Un membre du staff viens de supprimer : " + args.numberClear + " messages.")
        }

    }
}

module.exports = clearCommand;