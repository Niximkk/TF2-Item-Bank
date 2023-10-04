const functions = require('../functions/functions')
const defIndexJSON = require('../items/defIndex.json');

module.exports = (client, tf2, steamID, message) => {
    keys = functions.countItemsByDefIndex(tf2.backpack, defIndexJSON.MannCoSupplyCrateKey);
    scraps = functions.countItemsByDefIndex(tf2.backpack, defIndexJSON.ScrapMetal);
    reclaimeds = functions.countItemsByDefIndex(tf2.backpack, defIndexJSON.ReclaimedMetal);
    refineds = functions.countItemsByDefIndex(tf2.backpack, defIndexJSON.RefinedMetal);
    tickets = functions.countItemsByDefIndex(tf2.backpack, defIndexJSON.TourofDutyTicket);
    itemsAmount = functions.countItem(tf2.backpack)
    others = itemsAmount - keys - scraps - reclaimeds - refineds - tickets;

    client.chatMessage(steamID, 
        `🔩 Scrap Metal: ${scraps}\n`+
        `🔧 Reclaimed Metal: ${reclaimeds}\n`+
        `🪨 Refined Metal: ${refineds}\n`+
        `🗝️ Mann Co. Supply Crate Key: ${keys}\n`+
        `🎫 Tour of Duty Ticket: ${tickets}\n`+
        `♻️ Others: ${others}\n`+
        `🎒 Slots: ${itemsAmount}/${tf2.backpackSlots}`
    );
};