let array = [1, 2, 3, 4]

function findLrgIndex(array) {
    let result = 0
  
    for(let i = 0; i < array.length; ++i){
        console.log(array[i])
        result *= array[i]
    }
    return result
}



console.log(findLrgIndex(array))