const {Listener} = require('discord-akairo')
const mysql = require('mysql2');
const config = require('../../util/config')

class guildDeleteListener extends Listener{
    constructor(){
        super('guildDeleteListener', {
            emitter: 'client',
            event: 'guildDelete'
        });
    }

    exec(guild){

        const connection = mysql.createConnection({
            host: config.mysqlAuth.host,
            user: config.mysqlAuth.user
        });

        connection.query('DROP DATABASE' + "`" + guild.id + "`", function(err, results){
            if(err){
                console.log('Je reçois une erreur lors de la création de la base de données du serveur ' + guild.name + ' ! La voici : ' + err.message)
            }
            if(results){
                console.log('La base de données du serveur ' + guild.name + ' a bien été effacé !')
            }
        })
    }
}

module.exports = guildDeleteListener