const {REST,Routes} = require('discord.js');
require('dotenv').config();

const commands = [
    {
        name : "ping",
        description : "Replies with pong!"
    },
    {
        name : "server",
        description : "Replies with server info!"
    },
    {
        name : "user",
        description : "Replies with user info!"
    }
];

const rest = new REST({version : '9'}).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationGuildCommands(process.env.APPLICATION_ID,process.env.GUILD_ID),
            {body : commands}
        );

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();



