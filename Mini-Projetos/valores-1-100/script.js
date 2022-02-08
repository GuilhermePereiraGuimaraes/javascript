var num= document.getElementById('num')
let res = document.getElementById('res')
var lista = document.getElementById('lista_n')
var array = []

function adicionar() {
    var num_v = Number(num.value)
    if (num.value=='' || num_v<1 || num_v>100 || array.indexOf(num_v) != -1) {
        alert('Valor ínvalido ou já digitado')
    } else {
        // caso o valor não seja invalido ele adiciona no fim do array e mostra na tela 
        //que o valor foi adicionado
        array.push(num_v)
        var opcao = document.createElement('option')
        opcao.value= array.length
        opcao.innerHTML=`Valor ${num_v} adicionado`
        lista.appendChild(opcao)
    }
}

function finalizar() {
    //ordena o array de forma ascendente
    array.sort(function(a,b){return a-b})
    if (lista.length==0) {
        //caso a lista esteja vazia ele exibe um alerta
        window.alert('Adicione alguns números para poder finalizar')
    } else {
        res.innerHTML=''
    
        var txt= document.createElement('p')
        txt.innerHTML=`Ao todo, temos <strong>${array.length}</strong> números adicionados`
        res.appendChild(txt)
    
        var maior_valor= array[array.length-1]
        txt.innerHTML+=`<p>O maior número é <strong>${maior_valor}</strong></p>`
    
        var menor_valor= array[0]
        txt.innerHTML+= `<p>O menor número é <strong>${menor_valor}</strong></p>`

        var somar= function() {
            let soma=0
            for (let index in array) {
               soma+=array[index]
            }
            return soma
        }
        txt.innerHTML+=`<p>A soma dos valores é <strong>${somar()}</strong></p>`

        var media= somar()/array.length
        txt.innerHTML+= `A media é igual à <strong>${media}</strong>`
    }
}
function resetar() {
    lista.innerHTML=''
    array=[]
    num.value=''
    res.innerHTML=''
}