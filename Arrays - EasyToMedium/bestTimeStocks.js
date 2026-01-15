// For getting max buying at lowest prize is must

function bestTimeToBuyAndSellStock (nums) {
    let min = Infinity
    let maxProfit = 0
    for (let i = 1; i < nums.length; i++) { // i -> 1 since we cannot sell on same day 
        if (nums[i] < min) {
            min = nums[i]
        }
        if (nums[i]-min > maxProfit) {
            maxProfit = nums[i]-min
        }
    }
    return maxProfit
}

console.log(bestTimeToBuyAndSellStock([7,1,5,3,6,4]))