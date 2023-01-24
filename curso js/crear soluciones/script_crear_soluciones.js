//PROBLEMA A


dineroCofla = prompt("¿Cuanto dinero tienes cofla?");
dineroRoberto = prompt("¿Cuanto dinero tienes roberto?");
dineroPedro = prompt("¿Cuanto dinero tienes pedro?");

dineroCofla = parseInt(dineroCofla);
dineroRoberto = parseInt(dineroRoberto);
dineroPedro = parseInt(dineroPedro);

if (dineroCofla >= 0.6 && dineroCofla < 1) {
	alert("Cofla, comprate el helado de Agua"):
	alert("y te sobran " + (dineroCofla - 0.6));

}
else if (dineroCofla >= 1 && dineroCofla <1.6) {
	alert("Cofla, comprate el helado de Crema");
	alert("y te sobran " + (dineroCofla -1));
}
else if (dineroCofla >= 1.6 && dineroCofla <1.7) {
	alert("Cofla, comprate el helado de Heladix");
	alert("y te sobran " + (dineroCofla -1.6));

}
else if (dineroCofla >= 1.7 && dineroCofla <1.8) {
	alert("Cofla, comprate el helado de Heladovich")
	alert("y te sobran " + (dineroCofla -1.7));

}
else if (dineroCofla >= 1.8 && dineroCofla <2.9) {
	alert("Cofla, comprate el helado de Helardo");
	alert("y te sobran " + (dineroCofla -1.8));
}
else if (dineroCofla >= 2.9) {
	alert("Cofla, comprate el helado con confites o el Pote de 1/4Kg");
	alert("y te sobran " + (dineroCofla -2.9));

}
else {
	alert("Lo siento Cofla, no te llega para un helado")
	
}



if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
	alert("Roberto, comprate el helado de Agua");

}
else if (dineroRoberto >= 1 && dineroRoberto <1.6) {
	alert("Roberto, comprate el helado de Crema");

}
else if (dineroRoberto >= 1.6 && dineroRoberto <1.7) {
	alert("Roberto, comprate el helado de Heladix");

}
else if (dineroRoberto >= 1.7 && dineroRoberto <1.8) {
	alert("Roberto, comprate el helado de Heladovich");

}
else if (dineroRoberto >= 1.8 && dineroRoberto <2.9) {
	alert("Roberto, comprate el helado de Helardo");

}
else if (dineroRoberto >= 2.9) {
	alert("Roberto, comprate el helado con confites o el Pote de 1/4Kg");

}
else {
	alert("Lo siento Roberto, no te llega para un helado")
}



if (dineroPedro >= 0.6 && dineroPedro < 1) {
	alert("Pedro, comprate el helado de Agua")
}
else if (dineroPedro >= 1 && dineroPedro <1.6) {
	alert("Pedro, comprate el helado de Crema")
}
else if (dineroPedro >= 1.6 && dineroPedro <1.7) {
	alert("Pedro, comprate el helado de Heladix")
}
else if (dineroPedro >= 1.7 && dineroPedro <1.8) {
	alert("Pedro, comprate el helado de Heladovich")
}
else if (dineroPedro >= 1.8 && dineroPedro <2.9) {
	alert("Pedro, comprate el helado de Helardo")
}
else if (dineroPedro >= 2.9) {
	alert("Pedro, comprate el helado con confites o el Pote de 1/4Kg");
}
else {
	alert("Lo siento Pedro, no te llega para un helado")
} 


/* "use strict";

const definirCompra = (n) => {
	let din = prompt(`Dinero de ${n}`);
	if (din >= 0.6 && din < 1) return (`${n}: Helado de agua.`);
	if (din >= 1 && din < 1.6) return (`${n}: Helado de crema.`);
	if (din >= 1.6 && din < 1.7) return (`${n}: Helado de heladix.`);
	if (din >= 1.7 && din < 1.8) return (`${n}: Helado de heladovich.`);
	if (din >= 1.8 && din < 1.9) return (`${n}: Helado de helardo.`);
	if (din >= 2.9) return (`${n}: Helado de confites o pote de 1/4kg.`);
	else return (`$ {n}: No te llega para ningún helado.`);
}

console.log(definirCompra("Cofla"));
console.log(definirCompra("Pedro"));
console.log(definirCompra("Roberto"));

*/

//PROBLEMA B












