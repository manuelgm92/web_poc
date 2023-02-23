// Configuración
function phoneticLookup(val) {
  let result = "";

  const lookup = {
  "alpha": "Adams",
  "bravo": "Boston",
  "charlie": "Chigaco",
  "delta": "Denver",
  "echo": "Easy",
  "foxtrot": "Frank"
  };
  
  result = lookup[val];
  
  return result;
}

document.write(phoneticLookup("charlie"));




// let esPar = (n) => {
//     if (n === 0) { 
//         return true;
//     }
//     else if (n == 1) {
//         return false;
//     } else if (n < 0) {
//         return esPar(-n)
//     } else {
//         return esPar(n - 2)
//     }
// }

// document.write(esPar(-2));