function contar() {
    let ini = document.getElementById('txt_i')
    let fim = document.getElementById('txt_f')
    let passos = document.getElementById('txt_p')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passos.value.length == 0) {
        res.innerHTML='Impossível Contar..'
        window.alert('[ERROR] Faltam dados')
    } else {
        res.innerHTML='Contando... <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passos.value)
        
        if (i<f) {
            //contagem crescente
            for(let c = i; c<=f ; c+=p){
                res.innerHTML+=` ${c} \u{1F91C}`
            }
        } else {
            //contagem regressiva
            for(let c = i; c>=f ; c-=p){
                res.innerHTML+=` ${c} \u{1F91C}`
            }
        }
        res.innerHTML+='\u{1F468}\u{200D}\u{1F4BB}'
    }
}