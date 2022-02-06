function fatorial(n=0) {
    var fat=1
    for(let c = 0; n>c; n--){
        fat*=n
    }
    return fat
}
console.log(fatorial(5))