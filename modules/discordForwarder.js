// This module require minimal-discord-webhook-node. To install run "npm i minimal-discord-webhook-node" on console.
// Made by Nix.
// Feel free to change what you want!

const functions = require('../functions/functions')
const defIndexJSON = require('../items/defIndex.json');
const { Webhook } = require('minimal-discord-webhook-node');

// Change this.
const hook = new Webhook("YOUR_WEBHOOK_URL");

hook.setUsername('TF2 I.B');
hook.setAvatar('https://raw.githubusercontent.com/Niximkk/TF2-Item-Bank/main/Images/TF2IB%20Icon.png');

module.exports = (client, tf2) => {
    tf2.on('craftingComplete', function(){
        hook.send(`<:Craft:1161517991503069216> | Craft completed!`)
    });
    tf2.on('itemAcquired', function(item){
        hook.send(`<:Alert:1161517989611458683> | Item acquired!\n> ID: ${item.id}`)
    })
    tf2.on('itemRemoved', function(item){
        hook.send(`<:Deleted:1161517993990307942> | Item removed!\n> ID: ${item.id}`)
    })
};