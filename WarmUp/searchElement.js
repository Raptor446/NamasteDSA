function searchElement (arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return i
        }
    }
    return -1
}

console.log(searchElement([4,3,7,0,5], 6))
