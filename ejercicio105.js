//Escribe una función que calcule la suma de los primeros n números naturales.

function sumaNumeros(arr ,numero){
    let suma=0
    for(let i=0;i<numero;i++){
        suma += arr[i]
        
    }
    return suma
    
}

console.log(sumaNumeros([1,5,6,8,9,4],4))