function validarFormulario(){
    if(validarFormulario2()){
        alert("Formulario correcto!");
        return true; //indicar que el formulario se envia
    }else{
        alert("Formulario incorrecto!");
        return false; //indica que el formulario no es correcto
    }
}

function validarFormulario2() {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje');

    if (nombre.length < 3) {
        mensaje.innerText = "El nombre debe tener al menos 3 caracteres.";
        mensaje.style.color = "red";
        return false; //nos indica que esta ocurriendo un error
    }

    if (!email.includes('@') && !email.includes('.')) { //si no conlleva las dos da error
        mensaje.innerText = "El email no es válido.";
        mensaje.style.color = "red";
        return false; //indica que no esta correcto
    }

    mensaje.innerText = "Formulario enviado correctamente.";
    mensaje.style.color = "green";
    return true; //indica que todo esta correcto
}
