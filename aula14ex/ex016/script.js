function Contar() {
    var startTxt = document.getElementById('start')
    var endTxt = document.getElementById('end')
    var passoTxt = document.getElementById('passo')
    var msg = document.getElementById('msg')

    let start = Number(startTxt.value)
    let end = Number(endTxt.value)
    let passo = Number(passoTxt.value)


    if(start == 0 || end == 0 || passo == 0){
        window.alert(`[ERRO] Corrija as informaçoẽs!  Você tem que digitar um valor diferente que 0 ` )
    }else{
        if(start < end ){
            for( let c = start ; c <= end ; c += passo ){
                msg.innerHTML += `${c} \u{1F449}`
            }
            msg.innerHTML += `\u{1F3C1}`
        }else{
            window.alert(`[ERRO] Corrija as informaçoẽs! o numero inicial nao pode ser maior q o numero final ` )
        }
    }
}