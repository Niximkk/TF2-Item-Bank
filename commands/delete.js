const functions = require('../functions/functions')
const defIndexJSON = require('../items/defIndex.json');

module.exports = (client, tf2, steamID, message) => {
    const id = parseInt(message.split(' ')[1]);
    tf2.deleteItem(id)
    client.chatMessage(steamID, "🗑️ Attempting to delete the item "+id)
    console.log("Attempting to delete the item "+id)
};