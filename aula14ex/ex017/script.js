function gerar(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('tabuada')

    if(num.value.length == 0){
        window.alert('Vc nao digitou numero nenhum')
    }else{
        let n = Number(num.value)

        tab.innerHTML = ' '
        for(let c = 0; c <=10; c++){
            let item = document.createElement('option')
            item.text = `${c} x ${n} = ${c*n}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
   
}
