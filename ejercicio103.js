//Escribe una función que encuentre el mayor de tres números.

function mayor(...array){

    let mayorr=0
    for(let i=0;i<array.length;i++){
        if(array[i]>mayorr){
            mayorr=array[i]
            
        }
        
    }
    return mayorr
    
}

console.log(mayor(1,5,9,6,3,8))