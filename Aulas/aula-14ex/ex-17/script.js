function tabuada() {
    let num = document.getElementById('txt_num')
    let tab = document.getElementById('sel_tab')
    tab.innerHTML=''

    if (num.value.length==0) {
        window.alert('Digite um número para gerar a tabuada')
    } else {
        let n= Number(num.value)
        let c= 1
        while (c <= 10) {
            let item = document.createElement('option')
            item.value=`v${c}`
            item.innerText=`${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}