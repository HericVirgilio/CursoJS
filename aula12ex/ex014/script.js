function carregar(){
        var msg = document.getElementById('msg')
        var img = document.getElementById('img')
        var data = new Date()
        var hora = data.getHours()
        var min = data.getMinutes() 
        msg.innerHTML = `Agora são ${hora}:${min}`

        if(hora >= 0 && hora < 12){
            //good morning
            img.src = 'morning.jpg' 
            document.body.style.backgroundColor ='#e2cd9f'
        }else if(hora >= 12 && hora < 18){
            //good afternoon
            img.src = 'afternoon.jpg'
            document.body.style.backgroundColor = '#b9846f'
        }else{
            //good night
            img.src = 'night.jpg'
            document.body.style.backgroundColor = '#515154'
        }
} 

