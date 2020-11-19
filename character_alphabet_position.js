const { SDK_VERSION } = require("firebase-admin")

let string1 = "The sunset sets at twelve o' clock."

function alphabetPosition(text) {
    let alphas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let lower_cased = text.toLowerCase()
    let split_string = lower_cased.split('')
    let alpha_obj = {}
    for(let i = 0; i < alphas.length; i++){
        alpha_obj[alphas[i]] = i + 1

    }

    console.log(split_string)
  
    let reg = new RegExp(/[a-z]/gi)
    let position_array = []
    for(let i = 0; i < split_string.length; i++){

        if(typeof alpha_obj[split_string[i]] === 'number'){
            console.log(split_string[i])
            position_array.push(alpha_obj[split_string[i]])
        }

        console.log(alpha_obj[split_string[i]])




        

    }
   console.log(position_array)
   let answer = position_array.join(" ")
   console.log(answer)
    //return text;
  }


  alphabetPosition(string1)



  //simpler version with less steps as usual:
  function alphabetPosition(text) {
    return text
      .toUpperCase()
      .match(/[a-z]/gi)
      .map( (c) => c.charCodeAt() - 64)
      .join(' ');
  }
