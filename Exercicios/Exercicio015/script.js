function verificar(){
    var date = new Date()
    var ano = date.getFullYear()
    var Fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (Fano.Value.length == 0 || Fano.Value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')[0]
        var idade = ano - Number(Fano.Value)
        //res.innerHTML = `Idade calculada: ${idade}`
        var gênero =''
    }if (fsex[0].checked) {
        gênero = 'Mulher'
    }
    res.style.textAlign = 'center'
    res.innerHTML =`Detectamos ${gênero} com ${idade} anos.`
}