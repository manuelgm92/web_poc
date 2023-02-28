function multiplyAll(arr) {
  let product = 1;
  // Cambia solo el código debajo de esta línea
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr[i].length; j++){
      product = product * arr[i][j];
    }
  }  
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);



document.write(multiplyAll([[1], [2], [3]]));



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