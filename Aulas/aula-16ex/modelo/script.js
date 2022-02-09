let num= document.querySelector('input#f_num')
let lista= document.querySelector('select#f_lista')
let res= document.querySelector('div#res')
let valores = []

function isNumero(n) {
   return Number(n)>=1 && Number(n)<=100 
}
function inLista(n,v) {
    return v.indexOf(Number(n)) == -1
}

function adicionar() {
    let num_v = Number(num.value)
    if (isNumero(num.value) && inLista(num.value, valores)) {
        alert('ok')
        valores.push(num_v)
    } else {
        window.alert('Valor ínvalido ou já está na lista')
    }
}