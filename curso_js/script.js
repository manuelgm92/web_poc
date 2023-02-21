let esPar = (n) => {
    if (n === 0) { 
        return true;
    }
    else if (n == 1) {
        return false;
    } else if (n < 0) {
        return esPar(-n)
    } else {
        return esPar(n - 2)
    }
}

document.write(esPar(-2));