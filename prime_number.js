let prime0 = 13 //true
let prime1 = 9 
let smallprime = 3
let prime2 = 2 //true
let prime3 = 1039224169//false

let prime75 = 75 //false
let prime45 = 45 //false



function isPrime(num) {
    let result = false;
    let i = 2
    let array = []
    while(i <= num){
        array.push(i)
        i++
        if(i*i > num){
            array.push(i)
            break
        }
    }
    console.log(array)
    let checkNumber = []
    if(num < 2){
        return result
    } else {
        
        for(let i = 0; i < array.length; i++){
            if(num % array[i] === 0 && array[i] === num){
                console.log('caught first condition')
                result = true
            } else {
                checkNumber.push(num % array[i] === 0)
            }
        }
        if(checkNumber.find(e => e === true)){
            result = false
        } else {
            result = true
        }
    }
    console.log(checkNumber)
    
     return result

}

console.log(isPrime(prime75))


//simpler solution:
// function isPrime(num) {
//     if (num < 2) return false;
//     const limit = Math.sqrt(num);
//     for (let i = 2; i <= limit; ++i) {
//       if (num % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }
