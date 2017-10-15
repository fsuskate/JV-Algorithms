// Array a has the items to sort, array b is a work array
var topDownMergeSort = function(a, b, n) {
    b = copyArray(a, 0, n, b);

    return topDownSplitMerge(b, 0, n, a);
}

var copyArray = function(a, begin, end) {
    var b = [];
    for (var i = begin; i < end; i++) {
        b.push(a[i]);
    }
    return b;
}

// Sort the given run of array a using array b as a source.
// begin is inclusive, end it exclusive
var topDownSplitMerge = function(b, begin, end, a) {
    if (end - begin < 2) return b; // if run size == 1, it's sorted

    // split the run longer than 1 item into halves
    middle = Math.floor((end + begin) / 2);

    // recursively sort both runs from array b into a
    b = topDownSplitMerge(a, begin, middle, b);
    b = topDownSplitMerge(a, middle, end, b);

    // merge the resulting runs from array b into array a
    return topDownMerge(b, begin, middle, end, a);
}

// Left source half is a[begin to middle-1]
// Right source half is a[middle to end-1]
// Result is b[begin to end-1]
var topDownMerge = function(a, begin, middle, end, b) {
    var i = begin;
    var j = middle;

    // While there are elements in the left or right runs
    for (var k = begin; k < end; k++) {
        // if left run head exists and is <= existing right run head
        if (i < middle && (j >= end || a[i] < a[j])) {
            b[k] = a[i];
            i++;
        } else {
            b[k] = a[j];
            j++;
        }
    }

    return b;
}

var a = [];
var b = [];

for (var i = 0; i < 10; i++) {
    var value = Math.floor((Math.random() * 100));
    a.push(value);
}

for (var i = 0; i < a.length; i++) {
    console.log(a[i]);
}

topDownMergeSort(a, b, a.length);

for (var i = 0; i < b.length; i++) {
    console.log(b[i]);
}