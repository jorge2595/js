console. log("HOLA MUNDO")

//variables numericas
var numero = 5;
var x = document.getElementById("numerica");
x.innerHTML = "USO DE LA VARIABLE NUMERICA : " + numero + ".";
console. log("numero: ", numero);


//variable de texto
var palabra = "hola nena te amo clalo"
var x =document.getElementById("texto");
x.innerHTML = "USO DE LA VARIABLE DE TEXTO : " + palabra + ".";
console. log("palabra:", palabra);


//variables boleanas
var  boleana = true;
var x = document.getElementById("bolea");
x.innerHTML = "USO DE LA VARIABLE BOLEANA :" + boleana + ".";
console. log("boleana:", boleana);



//variables de tipo arreglo (array)
var colores = ["rojo", "amarillo","azul"];
var x = document.getElementById("arreglo");
x.innerHTML = "USO DE LA VARIABLE DE ARREGLO :" + colores + ".";
console. log("colores:", colores);

//variables de tipo objeto (objet: propiedad y el valor)
var jugo = {"ingrediente1": "fresa","ingrediente2": "mandarina","ingrediente3": "platano"};
var x = document.getElementById("objeto");
x.innerHTML = "USO DE LA VARIABLE DE OBJETO :" + jugo + ".";
console. log("jugo:", jugo);

/*==================================
variables DOM ('modelo de objetos del documento')
/* El DOM es la estructura de objetos que genera el navegador 
cuando se carga el documento y se puede alterar mediante
javascript para cambiar dinamicamente los contenidos
y aspectos de la pagina
====================================*/

var cajas = document.querySelector("#cajas");
var x = document.getElementById("dom");
x.innerHTML = "USO DE LA VARIABLE DOM :" + cajas + ".";
console.log("cajas:", cajas);

cajas.style.width ="300px";
cajas.style.height ="200px";
cajas.style.background ="blue";

var cajita = document.querySelector("#cajita");
console.log("cajita:", cajita);

cajita.style.width ="500px";
cajita.style.height ="200px";
cajita.style.background ="blue";

