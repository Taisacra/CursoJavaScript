let numAdd = document.getElementById('inserir')
let ltNum = document.getElementById('listaNum')
let res = document.querySelector('div#res')
let valores = []

function isNum(n){
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    }else{
        return false
    }
}

// vai receber um número e uma lista do if
function inLista(n, l){
    if (l.indexOf(Number(n)) != -1) {
        return true
    }else{
        return false
    }

}

function Adicionar(){
    /*só vai adicionar se for verdade os dois:
    1-Número analisado é um número
    2- Número não estiver na lista 
    senão vai mostra vum alert 
    */
    if (isNum(numAdd.value) && inLista(numAdd.value, valores)) {
        window.alert('Tudo ok')
    }else{
        window.alert('Valor inválido ou já encontrado na lista')
    }

   
}