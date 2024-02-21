var articulotxt=document.getElementById("art");
var montotxt=document.getElementById("mon");
var divtotal = document.getElementById("total");

var articulo = "";
var monto = 0;

var total = 0;

function crearLista(){
    var articulotxt=document.getElementById("art");
    var montotxt = document.getElementById("mon");
    var newDiv = document.createElement("div");
    var newContent = document.createTextNode(articulotxt.value+",   "+montotxt.value+"$");
    newDiv.appendChild(newContent);
    var currentDiv = document.getElementById("lista");
    document.body.insertBefore(newDiv, currentDiv);
    sumaProductos();
    limpiarCasilla();
}

function sumaProductos(){
    monto = parseInt(montotxt.value);
    total = total + monto;
    var newDiv = document.createElement("div");
    var newContent = document.createTextNode(total);
    newDiv.appendChild(newContent);
    var currentDiv = document.getElementById("total");
    document.body.insertBefore(newDiv, currentDiv);
}

function limpiarCasilla(){
    articulotxt.value="";
    montotxt.value="";
}

    
