function findSmallest (arr) {
    let smallest = Infinity
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i]
        }
    }
    return smallest
}

console.log(findSmallest([0,-1,-7,8,9]))
