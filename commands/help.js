const functions = require('../functions/functions')
const defIndexJSON = require('../items/defIndex.json');
const fs = require('fs');
const path = require('path');

module.exports = (client, tf2, steamID, message) => {
    const commandsFolder = path.join(__dirname, './');

    const commands = [];

    fs.readdirSync(commandsFolder).forEach(file => {
        if (file.endsWith('.js')) {
            const commandName = file.split('.')[0];
            const command = require(path.join(commandsFolder, file));
            commands.push({ name: commandName, execute: command });
        }
    });

    const commandNames = commands.map(cmd => cmd.name).join(', ');
    client.chatMessage(steamID, "📁 " + commandNames);
};
