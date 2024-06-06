//Escribe una función que invierta una cadena de texto.

function invertir(palabra){
    let separarPalabra=palabra.split("")
    let invertirPalabra=separarPalabra.reverse()
    let unirPalabra=invertirPalabra.join("")
    return unirPalabra

}
console.log(invertir("cosa"))