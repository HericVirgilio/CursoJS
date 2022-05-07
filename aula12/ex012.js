var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora}`)
if(hora < 12 && hora > 5){
    console.log('estamos no periodo matutino')
}else if(hora >= 12 && hora < 18){
    console.log('agora estamos no periodo verspertino')
}else if(hora >= 18){
    console.log('estamos no periodo noturno')
}else{
    console.log('estamos na madrugada')
}