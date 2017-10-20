function fib_r(n) {
    console.log(n);

    if (n == 0) return 0;
    if (n == 1) return 1;

    return fib_r(n - 1) + fib_r(n - 2);
}

function fib_d(n) {
    var f = [];

    f[0] = 1;
    f[1] = 1;

    for (var i = 2; i < n; i++) {
        f[i] = f[i - 1] + f[i - 2];
    }

    return f[n-1];
}

console.log(fib_r(9));
console.log(fib_d(9));