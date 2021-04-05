// Itrative Binary Search  //  
const itrative = (list, target) => {
    let low = 0;
    let high = list.length - 1;
    let guess, mid;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        guess = list[mid];
        if (guess === target) return mid;
        if (guess < target) low = mid + 1
        else high = mid - 1;
    }
    return null;
}


console.log(itrative([5, 1, 8, 3], 2));


// Recursive Binary Search  //
function recursive(arr, searchNumb) {
    var length = arr.length;
    var midPoint = Math.floor(length / 2);
    if (arr[midPoint] > searchNumb) {

        var newArr = arr.slice(0, arr[midPoint]);
        return recursive(newArr, searchNumb);

    } else if (arr[midPoint] < searchNumb) {

        var newArr = arr.slice(midPoint, arr.length);
        return recursive(newArr, searchNumb);

    } else {
        return arr
    }
}


console.log(recursive([5, 1, 8, 3], 2));