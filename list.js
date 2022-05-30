const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTgwNjgxMzQxMzk1OTU5ODQ5.GDHPUN.h4iU3RmSi0AXSSUuWtZBOcSignDGgG83D0F_iw"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`I am online!`)
})



client.login(process.env.token)
