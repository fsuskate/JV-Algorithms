function MergeSort(numbers, low, high) {
    if (low >= high) {
        return;
    }

    var mid = Math.floor((low + high) / 2);

    MergeSort(numbers, low, mid);
    MergeSort(numbers, mid+1, high);
    Merge(numbers, low, mid, high);
}

function Merge(numbers, low, mid, high) {
    var left = low;
    var right = mid + 1;
    var tmp = [];
    var tmpIndex = 0;

    while ((left <= mid) && right <= high) {
        if (numbers[left] < numbers[right]) {
            tmp[tmpIndex] = numbers[left];
            left++;
        } else {
            tmp[tmpIndex] = numbers[right];
            right++;
        }
        tmpIndex++;
    }

    if (left <= mid) {
        while (left <= mid) {
            tmp[tmpIndex] = numbers[left];
            left++;
            tmpIndex++;
        }
    }

    if (right <= high) {
        while (right <= high) {
            tmp[tmpIndex] = numbers[right];
            right++;
            tmpIndex++;
        }
    }

    for (var i = 0; i < tmp.length; i++) {
        numbers[low + i] = tmp[i];
    }
}

var array = [];
for (var i = 0; i < 10; i++) {
    array.push(Math.floor(Math.random() * 100));
}

MergeSort(array, 0, array.length);

console.log(array);
