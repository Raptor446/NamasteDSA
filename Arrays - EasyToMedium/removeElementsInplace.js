var removeElement = function(nums, val) {
    let x = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            nums[x] = nums[i]
            x = x + 1
        }
    }
    return x // x maintains the position to where we need to shift
}

console.log(removeElement([1,1,2], 1))
console.log(removeElement([0,0,1,1,1,2,2,3,3,4], 1))
