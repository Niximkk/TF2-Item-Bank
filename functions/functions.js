function findItemsByDefIndex(backpack, amount, defIndex) {
    return backpack
    .filter(item => item.def_index === defIndex)
    .slice(0, amount)
    .map(item => parseInt(item.id));
}
function countItemsByDefIndex(backpack, targetDefIndex) {
    return backpack.reduce((count, item) => count + (item.def_index === targetDefIndex ? 1 : 0), 0);
}
function countItem(backpack) {
    return backpack.length;
}

module.exports = {
    findItemsByDefIndex,
    countItemsByDefIndex,
    countItem,
}