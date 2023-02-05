"use strict";

let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // por cada i...

  for (let j = 2; j < i; j++) { // buscar un divisor..
    if (i % j == 0) continue nextPrime; // no es primo, ir al próximo i
  }

  alert( i ); // primo
}

/*
let n = prompt("escribe un número",);
let i = 2;

do{
  if (n % i === 0){
    primo=false;
  }
  i++;
} while (i < n);

if ( n % i !=== 0){

}



/*

let sinresto = 


let k = n % i; null;

for (let i = n; i >= 1){
  if (k ==)
}

let resp = 1;








/*let number;

do{
  number = prompt("Ingresa un número mayor a 100","0");
  }
 while (number <= 100);

*/
/*
for (let i = 0; i < 10; i++) {

  if (i % 2) {
    alert( i );
  }

}*/

//for (let i = 0; i < 3; i++) {
/*let i = 0;

while (i < 3) {
    alert(`número ${i}!`);
    
    }
  //alert( `número ${i}!` );
//}


/*let login = prompt("Quién está ahí?","");

if (login == "Admin"){
  let pass = prompt("Contraseña?",""); 
    if (pass == "TheMaster"){
      alert("Bienvenido");
    } 
    else if (pass === "" || pass === null ){
      alert("Cancel");
    } 
    else {
      alert("No te Conozco");
    }
  } 
else if (login == "" || login == null){
  alert("Cancelado");
}  
else {
  alert("No te conozco");
}


/*let message;

message = loggin == "Empleado" ? "Hola!" :
loggin == "Director" ? "Felicidades" :
loggin == "" ? "sin sesión" :
"";

if (login == 'Empleado') {
    message = 'Hola';
  } else if (login == 'Director') {
    message = 'Felicidades';
  } else if (login == '') {
    message = 'Sin sesión';
  } else {
    message = '';
  }*/

  //alert( alert(1) && alert(2) );

  //if (age > 13 && age < 91)