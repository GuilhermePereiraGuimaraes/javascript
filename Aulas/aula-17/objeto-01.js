let amigo= {nome: 'José', 
sexo: 'M', 
peso: 85.4, 
engordar(p=0){
    console.log('Engordou')
    this.peso+=p
    return this.peso
}
} 
amigo.engordar(76.3)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)