function caseInSwitch(val) {
    let answer = "";
    switch(val){
        case 1: 
        return "alpha"
        break;        
        
        case 2:
        return "beta"
        break;
        
        case 3:
        return "gamma"
        break;
        
        case 4:
        return "delta"
        break;
    }
    return answer;
}

document.write(caseInSwitch(1));



























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