var insertionSort = function (array) {
    var i = 1;
    var length = array.length;
    while (i < length) {
        var j = i;
        while (j > 0 && a[j-1] > a[j]) {
            var t = a[j];
            a[j] = a[j-1];
            a[j-1] = t;
            j--;
        }
        i++;
    }
}

var a = [8,5,2,19.0,7,4,100,45,66,2,1000,989,0,-1];

console.log("INSERTIONSORT");
insertionSort(a);

for (var i = 0; i < a.length; i++) {
    console.log(a[i]);
}

var partition = function(array, lo, hi) {
    var pivot = array[lo];
    var i = lo - 1;
    var j = hi + 1;
    while (true) {
        do {
            i = i + 1;
        } while (array[i] < pivot);

        do {
            j = j - 1;
        } while (array[j] > pivot);

        if (i >= j) {
            return j;
        }

        // swap
        var t = array[i];
        array[i] = array[j];
        array[j] = t;
    }
}

var quickSort = function (array, lo, hi) {
    if (lo < hi) {
        p = partition(array, lo, hi);
        quickSort(array, lo, p - 1);
        quickSort(array, p + 1, hi);
    }
}

console.log("QUICKSORT");

quickSort(a, 0, a.length - 1);

for (var i = 0; i < a.length; i++) {
    console.log(a[i]);
}
