function parimp(n) { // n é o paramentro
    //ação
    if (n % 2 == 0) {
        return'Par' // retorno
    }else{
        return'ímpar' // retorno
    }
}

let res = parimp(100)// chamada linha qu efaz o disparo da ação
console.log(res) 
console.log(parimp(101))// sem precisar de variável 