window.onload = function(){

	var imagen = document.getElementById("imagen");
	var browser = navigator.userAgent;
	var n = browser.search("Firefox");
	var c = browser.search("Chrome");
	var s = browser.search("Safari");

	console.log("Expresion: ", n);
	console.log("Expresion: ", c);
	console.log("Expresion: ", s);
	console.log(n > 1);
	console.log(c > 1);
	console.log(s > 1);

	if(n > 1){
		document.getElementById("titulo").innerHTML = "Bienvendio usuario de Firefox";
		imagen.src = "direccion de la imagen con el nombre";
		imagen.style.width = "100px";
		imagen.style.height = "100px";
	}

	if(c > 1){
		document.getElementById("titulo").innerHTML = "Bienvendio usuario de Chrome";
		imagen.src = "img/moto.png"
		imagen.style.width = "500px";
		imagen.style.height = "500px";
	}

	if(s > 1 && c < 1){
		document.getElementById("titulo").innerHTML = "Bienvendio usuario de Safari";
		imagen.src = "direccion de la imagen con el nombre";
		imagen.style.width = "100px";
		imagen.style.height = "100px";
	}

	console.log("imagen: ", imagen);
	console.log("browser: ",imagen);

			
}