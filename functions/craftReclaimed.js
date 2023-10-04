const functions = require('./functions.js');
const defIndexJSON = require('../items/defIndex.json');

function craftReclaimed(tf2, amount) {
    if(functions.countItemsByDefIndex(tf2.backpack, defIndexJSON.ScrapMetal)){
        tf2.craft(functions.findItemsByDefIndex(tf2.backpack, amount*3, defIndexJSON.ScrapMetal))
    }
}

module.exports = {
    craftReclaimed
}