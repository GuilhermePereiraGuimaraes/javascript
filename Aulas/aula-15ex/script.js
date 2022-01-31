function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var f_ano= document.getElementById('txtano')
    var res = document.getElementById('res')
    var idade = ano - Number(f_ano.value)
    if (f_ano.value.length == 0 || f_ano.value > ano || idade>110) {
        alert('[ERROR] Verifique os dados e tente novamente')
    } else {
        var f_sex = document.getElementsByName('radsex')
        var genero= ''
        var img= document.createElement('img')
        img.setAttribute('id','foto')
        if (f_sex[0].checked) {
            genero='Homem'
            if (idade>=0 && idade<10) {
                img.setAttribute('src','imagens/bebe-m.png')
            } else if(idade<21){
                img.setAttribute('src','imagens/jovem-m.png')
            } else if (idade < 50) {
                img.setAttribute('src','imagens/adulto-m.png')
            } else{
                img.setAttribute('src','imagens/idoso-m.png')
            }
            
        }
        else{
            genero='Mulher'
            if (idade>=0 && idade<10) {
                img.setAttribute('src','imagens/bebe-f.png')
            } else if(idade<21){
                img.setAttribute('src','imagens/jovem-f.png')
            } else if (idade < 50) {
                img.setAttribute('src','imagens/adulto-f.png')
            } else{
                img.setAttribute('src','imagens/idoso-f.png')
            }
        }
        res.style.textAlign='center'
        res.style.padding='10px'
        res.innerHTML=`<p>É ${genero} e tem <strong>${idade}</strong> anos</p>`
        res.appendChild(img)
    }
}