var num= document.getElementById('num')
var num_v = Number(num.value)
var lista = document.getElementById('lista_n')

function adicionar() {
    if (num.value=='' || num_v<1) {
        alert('Valor ínvalido')
    } else {
        alert('tudo certo')
    }
    
}