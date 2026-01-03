function pallindrome (n) {
    if (n < 0) return false
    let rev = 0
    let xcopy = n
    while (n > 0) {
        let rem = n % 10
        rev = (10*rev) + rem
        n = Math.floor(n/10) // To get exact number not in decimal
    }
    // if (rev === xcopy) {
    //     return true
    // } else {
    //     return false
    // }
    return rev === xcopy
}

console.log(pallindrome(121))
console.log(pallindrome(1214))
