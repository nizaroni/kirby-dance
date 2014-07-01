var kirbies = require('./kirbies'),
    totalKirbies
;

totalKirbies = kirbies.length;

function kirbyDance (amount) {
    var dance,
        ind
    ;

    dance = [];

    for (ind = 0; ind < amount; ind += 1) {
        var mod = ind % totalKirbies;
        dance.push(kirbies[mod]);
    }

    return dance.join(' ');
}

module.exports = kirbyDance;
