function reverseString (num) {
    let len = num.length
    let half = Math.floor(len/2)
    for (let i = 0; i < half; i++) {
       let temp = num[i]
       num[i] = num [len-1-i]
       num[len-1-i] = temp
    }
}
