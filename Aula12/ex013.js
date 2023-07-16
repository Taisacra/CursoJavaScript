//CONDIÇÃO ANINHADA
var agora = new Date()
var hora = agora.getHours()// pega a hora atual do sistema 
// var hora = 12
console.log(`Agora são exatamente ${hora}`)
if (hora < 12) {
    console.log('Bom dia!')    
} else if (hora <= 18) {
    console.log('Boa tarde!')
}else if (hora >18) {
    console.log('Boa noite!')
}