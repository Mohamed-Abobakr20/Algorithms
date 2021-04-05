//  Linear Search  //
const linearSearch = (list, target) => {
    for (let i = 0; i < list.length; i++) {
        if (list[i] === target) return i
    }
    return null;
}

console.log(linearSearch([5, 1, 8, 3], 2));