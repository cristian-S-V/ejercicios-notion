//100Escribe una función que reciba un array de números y devuelva true si el array contiene al menos un número par.

function arrayNumero(...array){
    for(let i=0;i<array.length;i++){
        if(array[i]%2===0){
            return`Existe un numero par ${array[i]}`
        }
    }
    return "No existe ningun numero par en el array"
}

console.log(arrayNumero(1,3,5,7,3,4))