//Escribe una función que calcule la media de un arreglo de números.

function calculateMedia(arr) {
    if (arr.length === 0) {
        throw new Error("El arreglo no puede estar vacío");
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}


let numbers = [1, 2, 3, 4, 5];
console.log(calculateMedia(numbers)); 