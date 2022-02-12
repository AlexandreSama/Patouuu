const EtoClient = require('./structures/EtoClient');
const Config = require('./util/config')
const {
    exec
} = require("child_process");
const io = require('@pm2/io')

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