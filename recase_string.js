let string1 = "the-stealth-warrior" // returns "theStealthWarrior"
let string2 = "The_Stealth_Warrior" // returns "TheStealthWarrior"

function toCamelCase(str){
    let strArray = []
    if(str.includes('-')){
        console.log("Found -")
        strArray = str.split('-')

    } else {
        console.log("Found _")

        strArray = str.split('_')
    console.log(strArray)

    }
    console.log(strArray)

    for(let i = 1; i<strArray.length; i++){
    
        // let current_letter = strArray[i][0]
        let current_word = strArray[i]
        let upcase_first_letter = strArray[i][0].toUpperCase()
        let sliced_word = current_word.slice(1)
        console.log(current_word)
        console.log(sliced_word)
        console.log(upcase_first_letter)
        let joined_word = upcase_first_letter + sliced_word
        console.log(joined_word)
        strArray[i] = joined_word
        

        // let upcased_letter = current_word[0].toUpperCase()
        // current_word.replace(current_letter, upcased_letter)
        
    }
    let result = strArray.join('')
    console.log(result)
    
}

toCamelCase(string2)


//more eff example:
// function toCamelCase(str){
//     var regExp=/[-_]\w/ig;
//     return str.replace(regExp,function(match){
//           return match.charAt(1).toUpperCase();
//      });
// }