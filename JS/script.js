function enviar(){
    let email= document.getElementById('email')
    let senha= document.getElementById('senha')

    
    if(email.value.length==0 || senha.value.length==0){
        window.alert ('Campo vazio')
    }

}