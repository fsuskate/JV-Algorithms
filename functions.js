function powerRecursive(base, exponent) {
    if (exponent == 0) {
        return 1;
    } else {
        return base * power(base, exponent-1);
    }   
}

function multiplyRecursive(number, times) {
    if (times == 0) {
        return 0;
    } else {
        return number + multiply(number, times-1);
    }
}

function factorialRecursive(number) {
    if (number == 1) {
        return 1;
    }
    return number * factorialRecursive(number - 1);
}

function log() {
    // TODO
}

function factorial(number) {
    var result = 1;
    for (var i = 1; i < number; i++) {
        result *= i + 1; 
    }
    return result;
}

function power(base, exponent) {
    var result = 1;
    for (var i = 0; i < exponent; i++) {
        result *= base;
    }

    return result;
}

function multiply(number, times) {
    var result = 0;
    for (var i = 0; i < times; i++) {
        result += number;
    }

    return result;
}

function isEven(number) {
    var result = number - 2;
    if (result == 0) {
        return true;
    } else if (result == 1) {
        return false;
    }

    return isEven(result);
}

console.log(power(2, 100));
console.log(powerRecursive(2, 100));
console.log(multiply(2, 10));
console.log(multiplyRecursive(2, 10));
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(13));
console.log(isEven(1000));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(7));
console.log(factorial(100));

console.log(factorialRecursive(3));
console.log(factorialRecursive(4));
console.log(factorialRecursive(5));
console.log(factorialRecursive(6));
console.log(factorialRecursive(7));
console.log(factorialRecursive(100));
