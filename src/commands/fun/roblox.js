const {
    Command
} = require('discord-akairo')
const Discord = require('discord.js');
const snekfetch = require('snekfetch')
const moment = require('moment')

class RobloxCommand extends Command {
    constructor() {
        super('roblox', {
            aliases: ['roblox'],
            args: [{
                id: "robloxUsername", match: "content"
            }]
        });
    }
       
    exec(message, args) {

    message.delete()

    const url = `https://api.roblox.com/users/get-by-username?username=${args.robloxUsername}`; 

    snekfetch.get(url).then(result => { 

        const data = result.body.Id; 

        console.log('test1')

        if (args.robloxUsername.length < 1) return message.channel.send("Tu a besoin de me donner un pseudo pour cet commande")

        if (result.body.Id === "undefined") return message.channel.send("Impossible de trouver le compte a qui appartient ce pseudo " + saybot)

        const url2 = `https://api.roblox.com/ownership/hasasset?userId=${data}&assetId=102611803`; 
            
        snekfetch.get(url2).then(a => { 
                let lien =  new Discord.MessageEmbed() 
                    .setColor(0x00A2E8) 
                    .setTitle("Pseudonyme: " + args.robloxUsername) 
                    .setDescription("User ID: " + data)
                    .setFooter("Lien vers le profile : " + `https://web.roblox.com/users/${data}/profile`) 
                    .setThumbnail("https://roblox.com/Thumbs/BCOverlay.ashx?username=" + args.robloxUsername) 
                    .setImage("http://www.roblox.com/Thumbs/Avatar.ashx?x=100&y=100&Format=Png&username=" + args.robloxUsername); 
                const url3 = `https://users.roblox.com/v1/users/${data}`
                console.log('test2')

                snekfetch.get(url3).then(b => {
                    let result = b.body
                    let date = moment(result.created).format("YYYY-MM-DD HH:mm:ss");
                    lien.addField("Date de création du compte", date, true)

                    console.log('test3')
                    message.channel.send({embeds: [lien]})
                })
            })
        })
    }
}

module.exports = RobloxCommand;
