function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora <12) {
        //boa tarde
        img.src = 'manha.png'
        document.body.style.background = '#ffd699'
    }else if (hora >= 12 && hora <18) {
        //boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#b36b00'
    }else{
        //boa noite
        img.src = 'noite.png'
        document.body.style.background = '#00334d'
    }
}
