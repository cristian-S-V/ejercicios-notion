//Escribe una función que determine si un año es bisiesto.

function añoBisiesto (año){
    if((año%4===0&&400===0)||(año%400===0)){
        return true
    }
    else{
        return false
    }
}
console.log(añoBisiesto(2020))
console.log(añoBisiesto(2019))
console.log(añoBisiesto(2000))