const TradeOfferManager = require('steam-tradeoffer-manager');
const SteamCommunity = require('steamcommunity');
const SteamUser = require('steam-user');
const SteamTotp = require('steam-totp');
const TeamFortress2  = require('tf2');
const fs = require('fs');
const path = require('path');

const commandsFolder = path.join(__dirname, './commands');
const functions = require('./functions/functions.js');
const craftReclaimed = require('./functions/craftReclaimed.js')
const craftRefined = require('./functions/craftRefined.js')
const defIndexJSON = require('./items/defIndex.json');
const config = require('./config.json');

const client = new SteamUser();
const tf2 = new TeamFortress2(client);
const community = new SteamCommunity();
const manager = new TradeOfferManager({
	steam: client,
	community: community,
	language: 'en'
});

const logOnOptions = {
	accountName: config.username,
	password: config.password,
	twoFactorCode: SteamTotp.generateAuthCode(config.sharedSecret),
    identitySecret: config.identitySecret,
};

client.logOn(logOnOptions);

client.on('loggedOn', () => {
    console.clear();
	console.log('Logged On.');
	client.setPersona(SteamUser.EPersonaState.Online);
	client.gamesPlayed(440);
});
client.on('webSession', (sessionid, cookies) => {
	manager.setCookies(cookies);
	community.setCookies(cookies);
	community.startConfirmationChecker(5000, config.identitySecret);
});

function acceptOffer(offer) {
	offer.accept((err) => {
			community.checkConfirmations();
			console.log("I accepted an offer.")
			client.chatMessage(config.ownerID, "✅ I accepted an offer.")
			if (err) console.log("There was an error accepting the offer.\n"+err)
	})
}
function declineOffer(offer) {
	offer.decline((err) => {
			console.log("I declined an offer.")
			client.chatMessage(config.ownerID, "❌ I declined an offer.")
			if (err) console.log("There was an error declining the offer.")
	})
}
function processOffer(offer) {
    if (offer.isGlitched() || offer.state === 11){
        console.log('Offer was glitched, declining.');
    } else if (offer.partner.getSteamID64() == config.ownerID){
        acceptOffer(offer);
    } else {
        var ourItems = offer.itemsToGive;
        var theirItems = offer.itemsToReceive;

        if (ourItems.length <= 0 && theirItems.length >= 0) {
            console.log('Offer was a donation, accepting.');
            acceptOffer(offer);
        } else {
            console.log('Offer was not a donation, declining.');
            declineOffer(offer);
        }
    }
}
function autoMelt(){
    if(tf2.haveGCSession){
        if(functions.countItemsByDefIndex(tf2.backpack, defIndexJSON.ScrapMetal) >= 3){
            craftReclaimed.craftReclaimed(tf2, 1);
            client.chatMessage(config.ownerID, "⏱ Auto melting scrap.")
        }

        if(functions.countItemsByDefIndex(tf2.backpack, defIndexJSON.ReclaimedMetal) >= 3){
            craftRefined.craftRefined(tf2, 1);
            client.chatMessage(config.ownerID, "⏱ Auto melting reclaimed.")
        }
    }
}

manager.on('newOffer', (offer) => {
    processOffer(offer);
    console.log("New trade offer.")
});

tf2.on('connectedToGC', function() {
    console.log("Connected to tf2 game server.");
});
tf2.on('backpackLoaded', function() {
    console.log("Backpack loaded.");
    setInterval(autoMelt, 5000);
});
tf2.on('craftingComplete', function(){
    console.log("Craft completed.")
    client.chatMessage(config.ownerID, "⚠️ Craft completed.")
});
tf2.on('itemAcquired', function(){
    console.log("Item acquired.")
    client.chatMessage(config.ownerID, "📦 Item acquired.")
})
tf2.on('itemRemoved', function(){
    console.log("Item removed.")
    client.chatMessage(config.ownerID, "🗑️ Item removed.")
})

client.setOption("promptSteamGuardCode", false);

fs.readdirSync(commandsFolder).forEach(file => {
    if(file.endsWith('.js')){
        const commandName = file.split('.')[0];
        const command = require(path.join(commandsFolder, file));
        client.on('friendMessage', (steamID, message) => {
            if (message.startsWith(commandName)) {
                command(client, tf2, steamID, message);
            }
        });
    }
});

module.exports = {
    client,
    tf2
};