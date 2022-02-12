const {
    Listener
} = require('discord-akairo');
const Discord = require("discord.js");

class InteractionCreateListener extends Listener {
    constructor() {
        super('interactionCreate', {
            emitter: 'client',
            event: 'interactionCreate'
        });
    }

    async exec(interaction) {

        await interaction.deferUpdate();

        if (interaction.isButton()) {

            let interactionCategory = interaction.customId.toString().split("_");

            switch (interactionCategory[0]) {
                case "suggestion":
                    if (!interaction.member.permissions.has("ADMINISTRATOR")) return;

                    switch (interactionCategory[1]) {

                        case "accept":

                            let embedAccept = interaction.message.embeds[0].setColor("#00ff00");
                            await interaction.message.edit({
                                embeds: [embedAccept],
                            });

                            break
                        case "deny":

                            let embedDeny = interaction.message.embeds[0].setColor("#ff0000");
                            await interaction.message.edit({
                                embeds: [embedDeny],
                            });


                            break

                    }

                    break
            }

        }
    }
}

module.exports = InteractionCreateListener