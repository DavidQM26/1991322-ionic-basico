var usuario=document.getElementById("usuario");
var contraseña=document.getElementById("contraseña");
var currentDiv = document.getElementById("mensaje");

function usuarioRegistrado(){
    limpiaCampo();
    currentDiv.innerHTML="";
    var usuario=document.getElementById("usuario");
    var newDiv= document.createElement("div");
    var newContent = document.createTextNode("Registro con éxito " + usuario.value);
    newDiv.appendChild(newContent);
    currentDiv.appendChild(newDiv);
    limpiarCampos();
}

    function usuarioLogeado(){
        currentDiv.innerHTML="";
        var usuario=document.getElementById("usuario");
        var newDiv= document.createElement("div");
        var newContent = document.createTextNode("Inicio sesión con éxito " + usuario.value);
        newDiv.appendChild(newContent);
        currentDiv.appendChild(newDiv);
        limpiarCampos();
    }
    
    function limpiarCampos(){
        usuario.value = "";
        contraseña.value= "";
    }
    
    function limpiaCampo(){
        document.getElementById("mensaje").value = "";
    }
