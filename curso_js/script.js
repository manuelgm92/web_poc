let count = 0;

function cc(card) {
    if(card <= 6){
        count++
    } else if(card >= "10"){
        count--
    }
    

    return count + (count > 0 ? " Bet" : " Hold");
}

cc(2); cc(3); cc(7); cc('K'); cc('A');









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