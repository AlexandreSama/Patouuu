const {
    Listener
} = require('discord-akairo')
const mysql = require('mysql2');
const config = require('../../util/config')

class guildCreateListener extends Listener {
    constructor() {
        super('guildCreateListener', {
            emitter: 'client',
            event: 'guildCreate'
        });
    }

    exec(guild) {

        const connection = mysql.createConnection({
            host: config.mysqlAuth.host,
            user: config.mysqlAuth.user
        });

        connection.query('CREATE DATABASE' + "`" + guild.id + "`", function (err, results) {
            if (err) {
                console.log('Je reçois une erreur lors de la création de la base de données du serveur ' + guild.name + ' ! La voici : ' + err.message)
            }
            if (results) {
                connection.query(`CREATE TABLE settings (id INT PRIMARY KEY NOT NULL, categoryTickets BIGINT NOT NULL)`, function (err, results) {
                    if (err) {
                        console.log('Je recois une erreur lors de la création de la table du serveur ' + guild.name + ' ! La voici : ' + err.message)
                    }
                    if (results) {
                        console.log('La base de données et la table ont bien été crée pour le serveur ' + guild.name)
                    }
                })
            }
        })
    }
}

module.exports = guildCreateListener