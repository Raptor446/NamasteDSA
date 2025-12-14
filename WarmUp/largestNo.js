function findLargest (arr) {
    let largest = -Infinity // Assume -Infinity or arr[0] for comparison
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }
    return largest
}

console.log(findLargest([5,0,10,8,17,1,50]))
