const cajaTexto = document.querySelector(".cajita")
const espacio = document.querySelector(".espacio")
let boton = document.querySelector("#copiar");
let advertencia = document.querySelector(".advertencia");
const texto = cajaTexto.value;

 /*Funcion verificacion del texto */

function verificar(texto){
    
    const regex = /[@#$%^&*()":;{}|<>]/g; 
    const regexMayusculas = /[A-Z]/g; 
    const regexTildes = /[áéíóúÁÉÍÓÚ]/g;

    if (regex.test(texto) || regexMayusculas.test(texto) || regexTildes.test(texto)){
        return false
    }
    return true;
}
 /*Botones */

function btnEncriptar() { 
    const texto = cajaTexto.value;
    if(verificar(texto)){ 
        const txtEncriptado = encriptar(texto);
        espacio.value = txtEncriptado;
        cajaTexto.value = "";
        espacio.style.backgroundImage = "none";
        boton.textContent = "Copiar";
        advertencia.style.color = "rgb(253,250,67)";
    } else{
        advertencia.style.scale = (1.2);
        advertencia.style.color = "red";
        cajaTexto.value = "";
    }
}
    
function btnDesencriptar(){
    const texto = cajaTexto.value;
    if(verificar(texto)){ 
    const txtDesencriptado = desencriptar(cajaTexto.value);
    espacio.value = txtDesencriptado;
    cajaTexto.value = "";
    espacio.style.backgroundImage = "none";
    boton.textContent = "Copiar";
    advertencia.style.color = "white";
    } else {
        advertencia.style.scale(1.2);
        advertencia.style.color = "red";
        cajaTexto.value = "";
    }
}
function btnCopiar(){
    navigator.clipboard.writeText(espacio.value);
    boton.textContent = "Copiado";
    espacio.value = "";
    espacio.style.backgroundImage = "url(img/Nucleo.gif)";
}

/*Funciones encriptado desencriptado */

function encriptar(stringEncriptado){
    let codigoMatriz = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < codigoMatriz.length; i++){
        if(stringEncriptado.includes(codigoMatriz[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(codigoMatriz[i][0], codigoMatriz[i][1])
        }
    }
    return stringEncriptado;
}
function desencriptar(stringDesencriptado){
    let codigoMatriz = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < codigoMatriz.length; i++){
        if(stringDesencriptado.includes(codigoMatriz[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(codigoMatriz[i][1], codigoMatriz[i][0])
        }
    }
    return stringDesencriptado;
}