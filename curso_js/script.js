function chainToSwitch(val) {
    let answer = "";
   
    switch(val){
      case "bob":
        answer = "Marley";
        break;
      case 42:
        answer = "The Answer";
        break;
      case 1:
        answer = "There is no #1"
        break;
      case 99:
        answer = "Missed me by this much!"
        break;
      case 7:
        answer = "Ate Nine"
        break;
  
    }
  
    return answer;
  }
  
  
document.write(chainToSwitch(7));






















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