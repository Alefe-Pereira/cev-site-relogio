function carregar() 
{

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas.`

//dia
if (hora >= 0 && hora < 12) 

{   
    img.src = '../img/fotomanha.png'
    document.body.style.background = '#e9d19e'
}

//tarde
else if (hora >= 12 && hora <= 18) 

{    
    img.src = '../img/fototarde.png'
    document.body.style.background = '#e89134b9'
}

//noite
else 

{
    img.src = '../img/fotonoite.png'
    document.body.style.background = '#1f3d51'
}

}