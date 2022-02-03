
function gerar_tabuada() {
    var num= document.getElementById('num')
    var v_num= Number(num.value)
    if (v_num!='') {
        var div2 = document.getElementsByTagName('div')[1]
        div2.innerHTML=''
        div2.style.minWidth='100px'
        div2.style.maxWidth='300px'
        div2.style.textAlign='justify'
        div2.style.border='1px solid black'
        div2.style.margin='auto'
        div2.style.fontSize='0.8em'
        var lista= document.createElement('ul')
        div2.appendChild(lista)

        for (var x = 0; x <= 10; x++) {
        var conta = v_num * x
        var li= document.createElement('li')
        lista.appendChild(li)
        li.style.listStyleType ='none'
        li.innerText=`${v_num} x ${x} = ${conta}`
        }
   } else {
     alert('Digite algum número por favor.')  
   }
}