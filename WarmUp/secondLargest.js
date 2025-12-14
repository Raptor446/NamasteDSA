/*
 What if the array is empty or it has only 1 element ask the interviewer and return.
 What if if we have duplicate largest like [10,20,20]-> (&& arr[i] !== largest) this will handle duplicates.
 What if the array has  negative numbers?
*/

function secondLargest (arr) {
    let largest = -Infinity
    let secondLargest = -Infinity
    const arrlength = arr.length
    if (arrlength <= 1) {
        return -1 // This should be asked to Interviewer
    }
    for (let i = 0; i < arrlength; i++) {
        if (arr[i] > largest) {
            secondLargest = largest
            largest = arr[i]
        } else if (arr[i] > secondLargest && arr[i] !== largest) { // This is imp don't forget this.
            secondLargest = arr[i]
        }
    }
    return secondLargest === -Infinity ? "No second largest found" : secondLargest
}

console.log(secondLargest([4,9,0,2,8,7,1]))
console.log(secondLargest([]))
console.log(secondLargest([4]))
console.log(secondLargest([-2,-4,-6,-8]))
console.log(secondLargest([10,20,20]))
console.log(secondLargest([20,20]))
