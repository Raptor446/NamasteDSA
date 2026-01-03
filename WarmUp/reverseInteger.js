function reverseInteger (n) {
    let rev = 0
    let ncopy = n
    n = Math.abs(n)
    while (n > 0) {
        let rem = n % 10
        rev = (10 * rev) + rem
        n = Math.floor(n/10)
    }
    let limit = Math.pow(2,31)
    if (rev < -limit || rev > limit) return 0 // for 32-bit integer range [-231, 231 - 1]
    // if (ncopy < 0) {
    //     return -rev
    // } else {
    //     return rev
    // }
    return ncopy < 0 ? -rev : rev

}

console.log(reverseInteger(123))
console.log(reverseInteger(-456))
