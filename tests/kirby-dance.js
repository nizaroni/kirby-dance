var tape = require('tape'),
    kirbyDance = require('..'),
    dance
;

tape('kirby-dance', function (t) {
    t.test('works with a few normal numbers', function (t) {
        dance = kirbyDance(4);
        t.equal(dance, "<('.'<) (>'.')> <('.'<) (>'.')>");

        dance = kirbyDance(7);
        t.equal(dance, "<('.'<) (>'.')> <('.'<) (>'.')> <('.'<) (>'.')> <('.'<)");

        dance = kirbyDance(12);
        t.equal(dance, "<('.'<) (>'.')> <('.'<) (>'.')> <('.'<) (>'.')> <('.'<) (>'.')> <('.'<) (>'.')> <('.'<) (>'.')>");
        t.end();
    });

    t.test('works with zero', function (t) {
        dance = kirbyDance(0);
        t.equal(dance, "");
        t.end();
    });

    t.test('works with no argument', function (t) {
        dance = kirbyDance();
        t.equal(dance, "");
        t.end();
    });

    t.test('explodes with not a number', function (t) {
        var error;

        try {
            kirbyDance('kirby');
        } catch (err) {
            error = err;
        }

        t.error(error);
        t.end();
    });
})
