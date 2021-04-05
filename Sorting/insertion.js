// Time Complexity :-
// --- worst case : O(n^2)
// --- best case : O(n)

// Space complexity : O(1)

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
    let num = 0;
    for (let i = 1; i < array.length; i++) {
        // Choosing the first element in our unsorted subarray
        let current = array[i];
        // The last element of our sorted subarray
        let j = i - 1;
        while ((j > -1) && (current < array[j])) {
            array[j + 1] = array[j];
            j--;
            num++
        }
        array[j + 1] = current;
    }
    return array;

}

console.log(insertionSort(numbers))