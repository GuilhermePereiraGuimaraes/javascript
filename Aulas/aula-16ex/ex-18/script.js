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
        valores.push(num_v)
        let item= document.createElement('option')
        item.text=`Valor ${num_v} adicionado`
        lista.appendChild(item)
        res.innerHTML=''
    } else {
        window.alert('Valor ínvalido ou já está na lista')
    }
    num.value=''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione alguns valores antes de finalizar !!')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma= 0
        let media= 0
        for (let pos in valores) {

            if (valores[pos]>maior) {
                maior=valores[pos]
            }
            if (valores[pos]<menor) {
                menor=valores[pos]
            }
            soma+=valores[pos]
        }
        media = soma/total

        res.innerHTML=''
        res.innerHTML += `<p>Ao todo temos <strong>${total}</strong> número(s)</p>`
        res.innerHTML += `<p>O maior valor é <strong>${maior}</strong></p>`
        res.innerHTML += `<p>O menor valor é <strong>${menor}</strong></p>`
        res.innerHTML += `<p>A soma de todos os valores é <strong>${soma}</strong></p>`
        res.innerHTML += `<p>A média é igual à <strong>${media}</strong></p>`
    }
}