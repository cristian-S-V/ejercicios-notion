//Escribe una función que encuentre el valor máximo en un arreglo de números.

function valorMax(arr) {
    if (arr.length === 0) {
        throw new Error("El arreglo no puede estar vacío");
    }
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

let numbers = [1, 2, 3, 4, 5];
console.log(valorMax(numbers)); 