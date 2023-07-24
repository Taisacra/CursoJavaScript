let amigo = {nome:'Tainá', 
sexo: 'M', 
peso: 60.6, 
engordar(p=0){ // podemos fazer a ação já dentro do objet função
    console.log('engordou')
    this.peso += p //this palavra de auto referencia ao objeto
}}
amigo.engordar(2)
console.log(`Sexo: ${amigo.sexo}`)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)