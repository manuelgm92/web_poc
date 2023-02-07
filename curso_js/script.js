
let free = false;

const validarCliente = (time) => {
  let edad = prompt("Qué edad tienes?");
  if (edad >= 18){
    if(time >= 2 && time < 7 && free == false){
      alert("Puedes pasar gratis")
      free = true;
    } else {
      alert("Puedes pasar pero pagando la entrada.")
    }
  } 
else {
  alert("Lo siento, no puedes pasar.")
}
}



validarCliente(23);
validarCliente(24);
validarCliente(0.50);
validarCliente(1);
validarCliente(2);
validarCliente(3);