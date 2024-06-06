//Escribe una función que determine si un número es par o impar.

function parImpar(numero){
    if(numero%2===0){
        return `El numero ${numero} es par`
    }
    else{
        return `El numero ${numero} es impar`
    }
}
console.log(parImpar(6))