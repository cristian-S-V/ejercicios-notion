//Escribe una función que encuentre el factorial de un número.

function factorial(numero){
    let multiplicaion=1

    for (let i=1;i<=numero;i++){
        multiplicaion *=i
    }
    return multiplicaion
}

console.log(factorial(5))
