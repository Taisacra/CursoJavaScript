function verificar(){
    var date = new Date()
    var ano = date.getFullYear()
    var Fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (Fano.value.length == 0 || Fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(Fano.value)
        //res.innerHTML = `Idade calculada: ${idade}`
        var gênero =''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade  < 10) {
                //crianca
                img.setAttribute('src','HomemCrianca.png')
            }else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'HomemJovem.png')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'HomemAdulto.png')
            }else{
                //idoso
                img.setAttribute('src', 'Homemidoso.png')
            }
    
        }else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src','MulherCrianca.png')         
            }else if (idade < 21) {
                img.setAttribute('src','MulherJovem.png')
            }else if (idade < 50) {
                img.setAttribute('src','MulherAdulta.png')
            }else{
                img.setAttribute('src','MulherIdosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML =`Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
    
    
}