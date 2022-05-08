function verificar(){
   
    var year = document.getElementById('year')

    var img = document.getElementById('img')
    
    var fsex = document.getElementsByName('radsex')
    
    var res = document.getElementById('res')

    var anoN = Number(year.value)
    
    var agora = new Date()
    var anoAT = agora.getFullYear()
    

    var genero 
    
    if(fsex[0].checked){
        genero = 0
     }else{
        genero = 1
     }
    if(anoN != anoAT && anoN > 1872 ){
        var age = anoAT - anoN 
    switch(genero){
        case 0:
            if(age < 12){
                genero = 'Masculino'
                res.innerHTML = `Você é uma criança de ${age} anos, do genero ${genero}`
                img.src = 'men/kid.jpg'
            }else if(age < 19){
                genero = 'Masculino'
                res.innerHTML = `Você é um adolecente de ${age} anos, do genero ${genero}`
                img.src = 'men/teen.jpg'
            }else if(age < 60){
                genero = 'Masculino'
                res.innerHTML = `Você é um adulto de ${age} anos, do genero ${genero}`
                img.src = 'men/adult.jpg'
            }else{
                genero = 'Masculino'
                res.innerHTML = `Você é um idoso de ${age} anos, do genero ${genero}`
                img.src = 'men/old.jpg'
            }
         break
        case 1:
            if(age < 12){
                genero = 'Feminino'
                res.innerHTML = `Você é uma criança de ${age} anos, do gênero ${genero}`
                img.src = "woman/kid.png"
            }else if(age < 19){
                genero = 'Feminino'
                res.innerHTML = `Você é um adolescente de ${age} anos, do gênero ${genero}`
                img.src = 'woman/teen.jpg'
            }else if(age < 60){
                genero = 'Feminino'
                res.innerHTML = `Você é um adulto de ${age} anos,  do gênero ${genero}`
                img.src = 'woman/adult.png'
            }else{
                genero = 'Feminino'
                res.innerHTML = `Você é um idoso de ${age} anos, do gênero ${genero}`
                img.src = 'woman/old.png'
            }
        break    
    }
    }else{
        window.alert('[ERRO] ano de nascimento invalido ')
    }
}