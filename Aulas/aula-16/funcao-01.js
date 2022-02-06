function parimp(n) {
    if (n%2==0) {
        return 'Par'
    } else {
        return 'Ímpar'
    }
}
let num = 161
let conta = parimp(num)
console.log(`O número ${num} é ${conta}`)