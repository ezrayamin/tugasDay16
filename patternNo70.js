//    0
//   101
//  21012
// 3210123
//432101234

n  = 4
let pattern = ""
for (let i = 0; i <= n; i++) {
    // isi spacing
    for (let j = 0; j < n - i; j++) {
        pattern += " "
    }
    for (let k = 0; k < 2 * i + 1; k++) {
        k > i ? pattern += `${k-i}` :
        pattern += `${i-k}`
    }
    pattern +='\n'
}
console.log(pattern)

