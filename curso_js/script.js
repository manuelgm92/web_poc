// Configuración
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Cambia solo el código debajo de esta línea
for(let i = 0; i < contacts.length;i++){
    if (contacts[i].firstName === name){
      if (prop in contacts[i]){
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
}
    return "No such contact";

  // Cambia solo el código encima de esta línea
}

document.write(lookUpProfile("Kristian", "lastName"));






// Cambia solo el código debajo de esta línea

 // function updateRecords(records, id, prop, value) {
 //   if


 //   } 
 //    return records;

//document.write(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));


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