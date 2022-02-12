const {
    Command
} = require('discord-akairo')
const {ButtonInteraction, MessageEmbed, MessageActionRow, MessageButton} = require('discord.js');

class helpCommand extends Command {
    constructor() {
        super('help2', {
            aliases: ['help2']
        });
    }

    exec(message) {

        const row1 = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setCustomId('fun')
            .setLabel('Fun')
            .setStyle('PRIMARY'),

            new MessageButton()
            .setCustomId('misc')
            .setLabel('Misc')
            .setStyle("SECONDARY")
        )
        
        const embedAccueil = new MessageEmbed()
        .setColor("DARK_GOLD")
        .setTitle('Clique sur un des boutons')
        .setDescription('Clique sur un des boutons pour choisir quel page tu souhaite voir')

        message.channel.send({embeds: [embedAccueil], components: [row1]})

        const filter = (interaction) => {
            if(interaction.user.id === message.author.id) return true;
            return interaction.reply({content: 'Tu ne peut pas cliquer dessus !'});
        };

        const collector = message.channel.createMessageComponentCollector({
            filter,
            max: 1
        });

        collector.on('end', (ButtonInteraction) => {
            const id = ButtonInteraction.first().customId;

            if(id === "fun"){
                console.log('il a cliqué sur Fun !')
            }if (id === "misc") {
                console.log('il a cliqué sur Misc !')
            }
        })
    }
}

module.exports = helpCommand;