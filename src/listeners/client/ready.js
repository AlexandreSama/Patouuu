const {Listener} = require('discord-akairo');
const mysql = require('mysql2');
const config = require('../../util/config')

class ReadyListener extends Listener{
    constructor(){
        super('ready', {
            emitter: 'client',
            event: 'ready'
        });
    }

    exec(){

        console.log('Nique sa mère !');

        const connection = mysql.createConnection({
            host: config.mysqlAuth.host,
            user: config.mysqlAuth.user
        });
        
        connection.connect(err => {
            if(err){
                console.log('Je n\'arrive pas a me connecter au serveur ! Voici l\'erreur : ' + err.message)
            }else{
                console.log('Connection réussi..... On peut y aller !')
            }
        })
    }
}

module.exports = ReadyListener