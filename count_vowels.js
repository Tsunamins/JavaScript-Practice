let string1 = "a bunch of vowels that Alison wrote"
let string2 = "my pyx"

function getCount(str) {
    var vowelsCount = 0;
    let reg = new RegExp(/[AEIOUaeiou]/gi)
    let result = str.match(reg)
    if(result){
        vowelsCount = result.length

    }
    console.log(result)

    
    // enter your majic here
    
    return vowelsCount;
  }

getCount(string2)