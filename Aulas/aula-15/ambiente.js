var num = [2,1,3]
num[3]= 9
num.push(7)
console.log(num)
console.log(num.length)
console.log(num.sort())
console.log('')
for (let index in num) {
   console.log(`A posição ${index} tem ${num[index]}`)
}
console.log(num.indexOf(3))