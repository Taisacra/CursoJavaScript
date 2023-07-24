let valores = [8, 3, 6, 9, 7]
console.log(valores)
valores.sort() //Ordena o array
console.log(`Array ordenado: ${valores}`)

/*//Mostra os elementos do array por indice
for (let c = 0; c < valores.length; c++) {
    console.log(`Posição ${c}: ${valores[c]}`)
    //console.log(valores[c])
}*/


// OUTRA FORMA MAIS SIMPLIFICADA DE ESCREVER O FOR PARA ARRAY ESSA SINTASE SÓ FUNCIONA PARA ARRAY E OBJETO
//Para cada posição(c) em valores eu voun mostrar o (valores[pos])
for(let c in valores){
    console.log(`Posição ${c}:  ${valores[c]}`)
}

//Procura no vetor o valor informado no parentese e retorna a chave onde esse valor se encontra
let c = valores.indexOf(8)
if(c == -1){
    console.log('O valor não foi encontrado!')
}else{
    console.log(`O valor está na posição ${c}`)// se retornar -1 é pq não encontrou o valor informado
}