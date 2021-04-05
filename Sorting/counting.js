// Time Complexity :-
// --- worst case : O(n + k)
// --- best case : O(n + k)

// Space complexity : O(n + k)


const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const countingSort = (arr, n = arr.length) => {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let range = max - min + 1;
    let count = new Array(range).fill(0);
    let output = new Array(n).fill(0);

    //Store the frequency
    for (let i = 0; i < n; i++) {
        count[arr[i] - min]++;
    }

    //Accumulate the frequency
    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }

    //Sort based on frequency
    for (let i = n - 1; i >= 0; i--) {
        output[count[arr[i] - min] - 1] = arr[i];
        count[arr[i] - min]--;
    }

    return output;
}

console.log(countingSort(numbers, numbers.length))