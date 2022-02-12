const {
    Command
} = require('discord-akairo')
const mysql = require('mysql2');
const config = require('../../util/config')

class CreateTicketCommand extends Command {
    constructor() {
        super('createTicket', {
            aliases: ['open']
        });
    }

    exec(message) {
        // create the connection to database
        const connection = mysql.createConnection({
            host: config.mysqlAuth.host,
            user: config.mysqlAuth.user,
            database: `${message.guild.name}`
        });

        connection.query(`SELECT ticketCategory FROM settings`, function(err, results){
            if(err){
                message.channel.send("Erreur lors de la récupération des données, veuillez contacter un administrateur")
                console.log("Erreur lors de la récupération de la catégorie Ticket du client : " + message.guild.name + " !")
            }
            if(results){
                console.log(results)
            }
        })
    }
}

module.exports = CreateTicketCommand;