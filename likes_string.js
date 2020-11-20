let array1 = []
let array2 = ["Peter"]
let array3 = ["Jacob", "Alex"]
let array4 = ["Max", "John", "Mark"]
let array5 = ["Alex", "Jacob", "Mark", "Max"]

function likes(names) {
    // TODO
    let string = ""
    if(names.length === 1){
            string = `${names[0]} likes this`
    } else if(names.length === 2){
            string = `${names[0]} and ${names[1]} like this`
    } else if(names.length === 3){
            string = `${names[0]}, ${names[1]} and ${names[2]} like this`
    } else if(names.length > 3){
            let plusCount = names.length - 2
            string = `${names[0]}, ${names[1]} and ${plusCount} others like this`
    } else {
        string = "no one likes this"
    }
  console.log(string)
            

  }

  likes(array5)

