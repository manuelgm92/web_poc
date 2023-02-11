
class animal {
	constructor(especie, edad, color){
		this.especie = especie;
		this.edad = edad;
		this.color = color;
		this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
	}
	verInformacion (){
		document.write(this.info);
	}

}

let perro = new animal("caniche",13,"marron")

//document.write(perro.info)

perro.verInformacion();