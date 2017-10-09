var A = [1,2,3,4,5];

var rotate = function(d, array) {
    if (d == 0 || d == array.length) {
        return;
    }

    for (var j = 0; j < d; j++) {
        var firstElement = array[0];
        for (var i = 0; i < array.length; i++) {
            array[i] = array[i+1];
        }
        array[array.length-1] = firstElement;
    }
}

var printArray = function(array) {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

printArray(A);
rotate(5, A);
printArray(A);

