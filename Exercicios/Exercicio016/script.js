function Contar() {
    var ini = window.document.getElementById('txtInicio')
    var fim = window.document.getElementById('txtFim')
    var ps = window.document.getElementById('txtPasso')
    var res = window.document.getElementById('res')

    
    if (ini.value.length == 0 || fim.value.length == 0 || ps.value.length == 0 ) {
        res.innerHTML ='Impossível contar!'
        window.alert('[ERRO] Falta dados!')
        
    }else{
        res.innerHTML = 'Contando: <br> '
        let i = Number(ini.value) // converte a caixa de texto em numero
        let f = Number(fim.value)
        let p = Number(ps.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando passo 1')
            p = 1
                                    
        }
       
        if (i < f) { //Contagem crescente
            for (let c = i; c <= f ; c += p) {
                res.innerHTML += ` ${c} \u{1F449} `
            
            }
            res.innerHTML += `\u{1F3C1}!`
            }else{//Contegem descrecente 
                for (let c = i; c >= f ; c -= p) {
                    res.innerHTML += ` ${c} \u{1F449} `
                }
                res.innerHTML += `\u{1F3C1}!`
            }        
        }
}