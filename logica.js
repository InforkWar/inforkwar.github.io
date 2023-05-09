//function encriptar(parrafo){

//}




//var botonEncriptar = document.getElementById('buttonEncriptar');
//botonEncriptar.onclick = encriptar;


var parrafo = "";
var parrafoNuevo = "";

function encriptacion() {
    parrafoNuevo = "";
    parrafo = document.getElementById("ingresoTexto1").value;
        for(var i=0; i< parrafo.length; i++){
            if(parrafo[i] == "a"){parrafoNuevo += "ai";}
            else if(parrafo[i] == "e"){parrafoNuevo += "enter";}
            else if(parrafo[i] == "i"){parrafoNuevo += "imes";}
            else if(parrafo[i] == "o"){parrafoNuevo += "ober";}
            else if(parrafo[i] == "u"){parrafoNuevo += "ufat";}
            else if(parrafo[i] == " "){parrafoNuevo += " ";}
            else {parrafoNuevo += parrafo[i]};

        }
    
    var textoSaliente = document.getElementById("descifrado");
    textoSaliente.textContent = parrafoNuevo;
}

var parrafoDesencriptado = "";
var parrafoEncriptado = "";

function desencriptacion(){
    parrafoDesencriptado = "";
    parrafoEncriptado = document.getElementById("ingresoTexto2").value;
    var tabla = {
        "ai" : "a", "enter":"e", "imes":"i", "ober":"o", "ufat":"u"};

    var i = 0;
        while (i < parrafoEncriptado.length){
            var encontrado = false;
            for(var cadenaEncriptada in tabla){
                if(parrafoEncriptado.substr(i, cadenaEncriptada.length) === cadenaEncriptada){
                    parrafoDesencriptado += tabla[cadenaEncriptada];
                    encontrado = true;
                    i += cadenaEncriptada.length;
                    break;
                }
            }
            if (!encontrado){
                parrafoDesencriptado += parrafoEncriptado[i];
                i++;
            }
        }
   




    var textoSaliente = document.getElementById("descifrado");
    textoSaliente.textContent = parrafoDesencriptado;
}


var botonCopy = document.getElementById("buttonCopy");
botonCopy.addEventListener("click",function(){
    
    var contenidoCopiado = document.getElementById("descifrado").value;
    navigator.clipboard.writeText(contenidoCopiado);
    alert("Tu mensaje ha sido copiado");
})

    var botonEncriptar = document.getElementById("buttonEncriptar");
    botonEncriptar.onclick = encriptacion;
 

    var botonDesencriptar = document.getElementById("buttonDesencriptar");
    botonDesencriptar.onclick = desencriptacion;
