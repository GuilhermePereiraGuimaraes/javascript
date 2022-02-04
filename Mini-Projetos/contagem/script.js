var res= document.getElementById('res')
res.innerHTML='<p>Preparado para contar....</p>'

function contar() {
    var inicio= document.getElementById('inicio')
    var fim= document.getElementById('fim')
    var passos = document.getElementById('passos')
    var v_inicio = Number(inicio.value)
    var v_fim = Number(fim.value)
    var v_passos= Number(passos.value)
    res.innerText=''
    
    if (inicio.value == '' || fim.value == '' || passos.value == '') {
        res.innerHTML='<p>Impossível contar</p>'
    } else {
        if (v_passos==0) {
            alert('Desconsiderando o passo 0 mudando para 1')
            v_passos=1
        }
        var p_res=document.createElement('p')
        res.appendChild(p_res)
        if (v_fim>v_inicio) {
            //contagem crescente
            for (c = v_inicio; c <= v_fim; c+=v_passos) {
                p_res.innerHTML+=`${c}&#x1F449 `
            }  

        } else {
            //contagem regressiva
            for (c = v_inicio; c >= v_fim; c-=v_passos) {
                p_res.innerHTML+=`${c}&#x1F449 `
            }
        } 
        p_res.innerHTML+='&#x1F3C6'
    }
   
}