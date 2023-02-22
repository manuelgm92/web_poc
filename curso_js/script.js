function switchOfStuff(val) {
    let answer = "";
    switch(val){
        case "a": 
            return "apple";
    
        case "b": 
            return "bird";
            break;

        case "c": 
            return "cat";
            break;

        default: 
            return "stuff";
            break;
    }
  

  return answer;
  }
  
document.write(switchOfStuff("2"));






















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