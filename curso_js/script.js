

class smartphone {
	constructor(color,peso,resolucion,camara,ram){
	this.c = color;
	this.p = peso;
	this.r = resolucion;
	this.cam = camara;
	this.ram = ram;
	this.info = `Color: <b>${this.c}</b> <br>
				Peso: <b>${this.p}</b> <br>
				Resolución: <b>${this.r}</b> <br>
				Cámara: <b>${this.cam}</b> <br>
				Ram: <b>${this.ram}</b> <br>`;
	this.encendido = false;
	}

encender(){
	if(this.encendido == false){
			alert("Encendido");
			this.encendido = true;
	} 	else{
			alert("Apagado");
			this.encendido = false;
		}
	}
reiniciar (){
	if(this.encendido == true){
			alert("Reiniciando");
	} 	else {
			alert("Está apagado");
		}
	}
mostrarInfo(){
	return this.info;
}

tomarFoto(){
	alert(`Foto tomada en una resolución de ${this.r}`);
}

grabarVideo(){
	alert(`Grabando video en ${this.r}`);
}
}

class smartphoneAltaGama extends smartphone {
	constructor(color,peso,resolucion,camara,ram,camara2){
		super(color,peso,resolucion,camara,ram);
		this.cam2 = camara2
		this.info = `Color: <b>${this.c}</b> <br>
				Peso: <b>${this.p}</b> <br>
				Resolución: <b>${this.r}</b> <br>
				Cámara: <b>${this.cam}</b> <br>
				Ram: <b>${this.ram}</b> <br>
				Camara Extra: <b>${this.cam2}</b> <br>`;
	}

gabrarLento (){
	alert("Grabando en cámara lenta")
}

reconocimientoFacial (){
	alert("Reconocimiento facial...");
}

mostrarInfo(){
	return this.info;
}

}

smartphone1 = new smartphone("Rojo", "172g", "1080p", "48mpx", "4gb");
smartphone2 = new smartphone("Azul", "176g", "1444p", "108mpx", "8gb");
smartphone3 = new smartphone("Negro", "165g", "1080p", "50mpx", "6gb");

smartphone4 = new smartphoneAltaGama("Gris", "156g", "2k", "48mpx", "8gb", "FHD");
smartphone5 = new smartphoneAltaGama("Azul Marino", "156g", "2k", "48mpx", "8gb", "FHD");

document.write(`
	${smartphone1.mostrarInfo()} <br>
	${smartphone2.mostrarInfo()} <br>
	${smartphone3.mostrarInfo()} <br>
	${smartphone4.mostrarInfo()} <br>
	${smartphone5.mostrarInfo()} <br>
`)

//probando el primer smartphone
smartphone1.encender();
smartphone1.tomarFoto();
smartphone1.grabarVideo();
smartphone1.reiniciar();
smartphone1.encender();