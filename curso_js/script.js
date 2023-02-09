do {
	let nota = prompt("Introduce tu nota");
	
  	if (Number(nota) == nota) {
		//SI LA NOTA ES ENTRE 0 Y 10 COMPRUEBA EL RANGO Y DA UN MENSAJE
		if (nota > 0 && nota <= 10) {
			if (nota < 3) {
				alert("Muy deficiente");
			}
			else if (nota < 5) {
				alert("Insuficiete");
			}
			else if (nota < 6) {
				alert("Suficiente");
			}
			else if (nota < 7) {
				alert("Bien");
			}
			else if (nota < 9) {
				alert("Notable"); 5
			}
			else if (nota >= 9) {
				alert("Sobresaliente");
			}
		}
		//SI LA NOTA NO ES ENTRE 0 Y 10
		else {
			alert("Nota erronea");
		}
	}
	//SI LA NOTA INTRODUCIDA NO ES UN NÚMERO
	else {
		//SI SE HA PULSADO ACEPTAR SIN INTRODUCIR NADA
		if (nota != undefined) {	//No es Undefined cuando se pulsa aceptar.
			alert("Introduce un numero valido");
		}
	}
//EL BUCLE VUELVE ARRIBA MIENTRAS NO SE HAYA PULSADO CANCELAR
} while (nota != undefined);	
