var kirbies = require('./kirbies'),
    totalKirbies
;

totalKirbies = kirbies.length;

function kirbyDance (amount) {
    var dance,
        ind
    ;

    dance = [];
    ind = 0;

    if (amount < 0) {
        ind = 1;
        amount = -amount + 1;
    }

    for (; ind < amount; ind += 1) {
        var mod = ind % totalKirbies;
        dance.push(kirbies[mod]);
    }

    return dance.join(' ');
}

module.exports = kirbyDance;
