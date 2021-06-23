const a1 = [1, 2, 3]
const a2 = [4, 5, 6]
//Concat
//const a3 = a1.concat(a2, [7, 8, 9], 'Erickson')

//... rest -> spread
const a3 = [...a1, ...a2, 'Erickson', ...[7, 8, 9]]


console.log(a3, typeof a3)
