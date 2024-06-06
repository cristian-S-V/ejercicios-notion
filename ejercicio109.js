//Escribe una función que encuentre el valor mínimo en un arreglo de números.


function valorMin(arr) {
    if (arr.length === 0) {
        throw new Error("El arreglo no puede estar vacío");
    }
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

// Ejemplo de uso
let numbers = [1, 2, 3, 4, 5];
console.log(valordMin(numbers)); 