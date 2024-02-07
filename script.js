var cmpTexto=document.getElementById("campo");

function mostrarPantalla(){
    alert(cmpTexto.value);
}

function limpiarCampo(){
    cmpTexto.value="";
}

function obtenerNumero(){
    var newRandomColor = Math.floor(Math.random()*16777215).toString(16);
    return newRandomColor;
}

function cambiarColor(){
    var color = "#"+obtenerNumero();
    document.body.style.backgroundColor = color;
}