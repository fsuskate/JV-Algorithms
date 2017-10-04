function mystery(n) {
    var r = 0;
    for (var i = 1; i <= (n - 1); i++) {
        console.log("i = " + i);
        for (var j = (i + 1); j <= n; j++) {
            console.log("j = " + j);
            for (var k = 1; k <= j; k++) {
                console.log("k = " + k);
                r = r + 1;
                console.log("R = " + r);
                console.log("");
            }
        }
    }

    return r;
}

//console.log(mystery(4));

function pesky(n) {
    var r = 0;
    for (var i = 1; i <= n; i++) {
        console.log("i = " + i);
        for (var j = 1; j <= i; j++) {
            console.log("j = " + j);
            for (var k = j; k <= i + j; k++) {
                console.log("k = " + k);
                r = r + 1;
                console.log("R = " + r);
                console.log("");
            }
        }
    }

    return r;
}

console.log(pesky(4));
