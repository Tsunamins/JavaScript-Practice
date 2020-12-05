let string1 = "hello"
let string2 = "hi there"
let enS1 = "h2ll4"
let enS2 = "h3 th2r2"

let a = 1
let e = 2
let i = 3
let o = 4
let u = 5

let arr_vowels = [a, e, i, o, u]

let vowels = {
    "a": 1,
    "e": 2,
    "i": 3,
    "o": 4,
    "u": 5
}

function encode(string) {
    let encoded = ""
    for(let i = 0; i < string.length; i++){
        switch(string[i]){
            case "a":
                encoded = encoded.concat("1")
                break;
            case "e":
                encoded = encoded.concat("2")
                break;
            case "i":
                encoded = encoded.concat("3")
                break;
            case "o":
                encoded = encoded.concat("4")
                break
            case "u":
                encoded = encoded.concat("5")
                break
            default:
                encoded = encoded.concat(string[i])
                break;
        }


    }
    console.log(encoded)
    //return encoded
  }
  
  function decode(string) {
      let decoded = ""
      for(let i = 0; i < string.length; i++){
        switch(string[i]){
            case "1":
                decoded = decoded.concat("a")
                break;
            case "2":
                decoded = decoded.concat("e")
                break;
            case "3":
                decoded = decoded.concat("i")
                break;
            case "4":
                decoded = decoded.concat("o")
                break
            case "5":
                decoded = decoded.concat("u")
                break
            default:
                decoded = decoded.concat(string[i])
                break;
        }


    }
    console.log(decoded)
    //return decoded
  }

  encode(string2)

  decode(enS2)




