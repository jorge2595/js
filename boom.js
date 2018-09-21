/*=======================================================================
the Browser Objet Model (BOM) allows JavaScritp to "talk to" the browser.
=======================================================================*/

var w =window.innerWidth
||document.documentElement.clientWidth
||document.body.clientWidth;

var h = window.innerHeight
|| document.documentElement.clientHeight
||document.body.clientHeight;

var x = document.getElementById("prueba");
x.innerHTML = "ancho de la ventana interior del navegador: " + w + ", altura: " + h + ".";

/*==================================================================================
Window Screen heigth
la propiedad Screen.height devulve la altura de la pantalla del visitante en píxeles
====================================================================================*/

document.getElementById("prueba3").innerHTML = "el alto de la pantalla es "  +screen.height;

/*==================================================================================
Window Screen Width
la propiedad Screen.availWidth devulve lo ancho de la pantalla del visitante en píxeles
====================================================================================*/

document.getElementById("ancho").innerHTML = "el ancho de la pantalla es "  +screen.availWidth;

/*==================================================================================
Window Screen Width
la propiedad screen.availHeight devulve la altura de la pantalla disponible. 
====================================================================================*/
 
 document.getElementById("alturadisponible").innerHTML = " altura de pantalla disponible " +screen.availHeight;


/*==================================================================================
Window Screen Width
la propiedad screen.availHeight devulve la altura de la pantalla disponible. 
====================================================================================*/
 document.getElementById("prueba6").innerHTML = "profundidad de color de pantalla: " + screen.colorDepth; 


/*==================================================================================
la propiedad pixelDepth muestra la profundidad de los pixeles en la pantalla. 
====================================================================================*/
 document.getElementById("profundidadpixel").innerHTML = "profundidad del pixel en la pantalla: " + screen.pixelDepth;


/*JS NAVEGADOR

/*==================================================================================
la propiedad cookieEnabled devuelve true si las cookies están habilitadas, de lo contrario false:
====================================================================================*/
 document.getElementById("prueba8").innerHTML ="las cookis estan abilitadas :" + navigator.cookieEnabled;


/*==================================================================================
La propiedad appName devuelve el nombre de la aplicación del navegador
====================================================================================*/
document.getElementById("navegador").innerHTML ="nombre del navegador es: " + navigator.appName;


document.getElementById("prueba10").innerHTML = "navigator.codigo del nombre del  navegador es " + navigator.appCodeName;

