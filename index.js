document.querySelector(".form-input").addEventListener('submit', function (event) {
    if(!validateName() || !validateEmail() || !validatePhone() || !validaMessage()){
        event.preventDefault() //evita que el formulario se envie.
    }
})   

function validateName(){
    let nameValue = document.querySelector(".input-name").value;
    
    if(nameValue === ""){
        alert("Por favor, completa el campo del nombre.")
        return false;

    } else if(nameValue.length < 5){
        alert("El nombre debe tener al menos 5 caracteres.");
        return false;

    } else if(!/^[a-zA-Z ]+$/.test(nameValue)){
        alert("El nombre solo debe contener letras y espacios.")
        return false;
    }
    return true;
}

function validateEmail(){
    let emailValue = document.querySelector(".input-mail").value;

    if(emailValue === ""){
        alert("Por favor, completa el campo de email.")
        return false;
    }else{

        let emailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ;

        if(!emailFormat.test(emailValue)){
            alert("El email introducido no es valido, ingresa un email valido.");
            return false;
        } else {
            return true;
        }
    }
}

function validatePhone(){
    let phoneValue = document.querySelector(".input-phone").value;

    if(phoneValue === ""){
        alert("Por favor, completa el campo de teléfono.")
        return false;

    } else if(phoneValue.length !==9) {
        alert("El teléfono introducido no tiene 9 digitos.");
        return false;
    
    } else if(isNaN(phoneValue)){
        alert("El teléfono introducido no son números. Ingrese un número de teléfono válido.");
        return false;

    } else{
        return true;
    }
    
}

function validaMessage(){

    let messageValue = document.querySelector(".input-massage").value

    if(messageValue === ""){
        alert("Por favor, completa el campo de menssage")
    } else if(messageValue.length < 21){
        alert("El texto debe contener al menos 20caracteres.")
        return false;

    }else{
        return true;
    }
}





