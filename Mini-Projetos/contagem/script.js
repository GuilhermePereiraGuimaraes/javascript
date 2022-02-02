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
    
    if (v_fim>v_inicio && v_passos>0 && inicio.value!='') {
        var p_res=document.createElement('p')
        res.appendChild(p_res)
        for (c = v_inicio; c < v_fim; c+=v_passos) {
            p_res.innerHTML+=`${c}&#x1F449 `
        }
        p_res.innerHTML+='&#x1F3C6'
    } else {
        res.innerHTML='<p>Impossível contar</p>'
    }
   
}