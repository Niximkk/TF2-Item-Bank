const functions = require('./functions.js');
const defIndexJSON = require('../items/defIndex.json');

function craftRefined(tf2, amount) {
    if(functions.countItemsByDefIndex(tf2.backpack, defIndexJSON.ReclaimedMetal)){
        tf2.craft(functions.findItemsByDefIndex(tf2.backpack, amount*3, defIndexJSON.ReclaimedMetal))
    }
}

module.exports = {
    craftRefined
}