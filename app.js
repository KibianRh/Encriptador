let textIngresado = "";
let portapapeles = "";
let algoQueCopiar;


const textoValido = /^[a-z ñ\s]+$/;


let imagenLupa = document.querySelector(".logo-lupa");
let interruptorBoton =  document.getElementById("copiar");

algoQueCopiar=false; 



function encrip(opcion) {
  
    textIngresado = document.querySelector(".analizador").value;
  
    let mensajeClave = textIngresado;

    if (validarTexto() === true) {

        if (opcion === 1) {
          
            validarBusqueda(mensajeClave,encriptador(mensajeClave));

           } else{
            
           
            validarBusqueda(mensajeClave,desencriptador(mensajeClave));      
           }
    } else {
        
        algoQueCopiar=false 
        textIngresado = document.querySelector(".analizador").value;
        return;
    }
}

function validarTexto() {
    
    if (textIngresado === "") {
        algoQueCopiar=false;
        mostrarResultado("error", "No ha ingresado ningun tipo de texto.");
        
        
        return false;

    } else if (!textoValido.test(textIngresado)) {
        algoQueCopiar=false; 
        mostrarResultado("error", "¡Recuerda! Sólo letras minúsculas y sin acentos.");
        return false;

      
        } else {
          
            return true;
        }
}

function validarBusqueda(textoInicial,TextoFinal){
   
    if (textoInicial === TextoFinal) {

   
        algoQueCopiar=false; 
        mostrarResultado("Mensaje no encontrado", "");
        
     } else {

        
        algoQueCopiar=true; 
        mostrarResultado("", TextoFinal);
        
    }
    return;
} 

function mostrarResultado(resultadoBusqueda, mensaje) {
   

  
    let mostradorNoticia = document.querySelector(".alert");
    let mostradorMensaje = document.querySelector(".m-recibido");

    
    if (resultadoBusqueda === "error") {

       
        interruptorimagen(false);
        
        
        botonCopiar=false; 
        mostradorNoticia.innerHTML = "¡ERROR!";
        mostradorMensaje.innerHTML = mensaje;
        
       
       
    } else if (resultadoBusqueda === "Mensaje no encontrado") {
        
       
        interruptorimagen(false);
        botonCopiar=false; 
       
        mostradorNoticia.innerHTML = "¡Ningún mensaje fue encontrado!";
        mostradorMensaje.innerHTML = "Ingresa el texto que desee encriptar o desencriptar.";
       


    } else {

       
        interruptorimagen(true);
        
      
        botonCopiar=true; 
        mostradorNoticia.innerHTML = "¡Mensaje obtenido!";
        mostradorMensaje.innerHTML = mensaje;
        portapapeles = mensaje;

    }
 return;
}

function encriptador(encriptado) {

    encriptado = encriptado
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return encriptado;
}

function desencriptador(mensajeSecreto) {
    
    mensajeSecreto = mensajeSecreto
         .replace(/ufat/g, "u")
         .replace(/ober/g, "o")
         .replace(/ai/g, "a")
         .replace(/imes/g, "i")
         .replace(/enter/g, "e");
    return mensajeSecreto;
}



function copiarEnPortapapeles(){
    
    let botonCopiar = document.getElementById("copiar");
      
    if (algoQueCopiar === true) {
        
        botonCopiar.innerText = "Texto Copiado!";
        botonCopiar.style.backgroundColor = "rgb(13, 187, 80";
        botonCopiar.style.color = "white";
    }else{
        
         botonCopiar.innerText = "Nada que copiar!";
         botonCopiar.style.backgroundColor = "rgb(229, 15, 15)";
         botonCopiar.style.color = "white";
    }
  
  
      setTimeout(function() {
          botonCopiar.innerText = "Copiar";
          botonCopiar.style.backgroundColor = ""; 
          botonCopiar.style.color = ""; 
      }, 1000);
    navigator.clipboard.writeText(portapapeles);
    
    return;
}



function interruptorimagen(comado){

    if(window.innerWidth > 770){

       
        if(comado === true){

           
            imagenLupa.style.display = 'none'
          
        }else{
           
            imagenLupa.style.display = 'flex';
            
        }      
    }
}    

