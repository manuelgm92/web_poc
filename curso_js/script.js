// Configuración
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Cambia solo el código debajo de esta línea
function updateRecords(records, id, prop, value) {
  if (prop !== "tracks" && value !== ""){
    records[id][prop] = value;
  } 
  else if (prop === "tracks" && value !== "" && records[id].hasOwnProperty("tracks") === false){
    records[id][prop] = [value];
  }
  else if (prop === "tracks" && value !== ""){
    records[id][prop].push(value);
  } 
  else if (value === ""){
    delete records[id][prop];
  }
    
   return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');








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