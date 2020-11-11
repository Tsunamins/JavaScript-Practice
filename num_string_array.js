let num1 = 9119

function squareDigits(num){
  //may the code be with you
  let numString = num.toString()
  console.log(numString)
  let array = numString.split("")
  console.log(array)
  let new_array = array.map(x => parseInt(x*x))
  console.log(new_array)
  let string_again = new_array.join("")
  console.log(string_again)
  
  
}

squareDigits(num1)