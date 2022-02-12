const EtoClient = require('./structures/EtoClient');
const Config = require('./util/config')
const request = require('request')
const {
    exec
} = require("child_process");
const io = require('@pm2/io')

setInterval(() => {
    request("http://45.155.170.110:3001/api/push/zoftCAkwkC?msg=OK&ping=")
    console.log('ping status page')
}, 2000);

let client = new EtoClient({
    prefix: "+"
})

io.action('pull github data (met a jour le bot si tu préfére connard !)', (cb) => {
    exec("git pull", (error, data, getter) => {
        if (error) {
            return cb({
                error: "error.message"
            })
        }
        return cb({
            success: "Action effectué avec succés"
        })
    });
})

client.login(Config.TOKEN)