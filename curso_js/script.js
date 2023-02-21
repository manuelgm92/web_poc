let tamaño = 8;

let output = "";

for (let x = 0; x < tamaño; x++){
    for (let y = 0 ; y < tamaño; y++){
        if ((x + y) % 2 ==0){
        output += " ";
    } else {
        output += "#";
    }
}
    output+= "\n"

}


    console.log(output);


















// for ( let i = "#"; i.length <= 7; i+= "#"){
//     console.log(i);
// }

// let i = 1;
// i++;

// for (i = 1; i <= 100; i++) {
//     let output = "";    
    
//     if ( i % 3 == 0 && i % 5 == 0){
//     output = "FizzBuzz"
//     }
//     if (i % 3 == 0 && i % 5 !== 0 ){
//        output = "Fizz"
//     } else if ( i % 5 == 0 && i % 3 !== 0){
//         output += "Buzz"
//     } 
    
//     console.log(output || i);
    
// }

