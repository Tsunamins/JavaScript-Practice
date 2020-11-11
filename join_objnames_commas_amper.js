let list1 = [ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]
let list2 = [ {name: 'Bart'}, {name: 'Lisa'} ]
let list3 = [ {name: 'Bart'} ]
let list4 = []



function list(names){
  //your code here
 
  let beginning = []
  let finalString = ''
  for(let i = 0; i<names.length; i++){
   
    beginning.push(names[i].name)


  }
  let last = beginning.pop()
 
  let string = beginning.join(", ")
  
  if(names.length === 0){
      finalString = ''
    
  } else if(names.length === 1) {
    finalString = last

  } else {
    finalString = `${string} & ${last}`
  }
  console.log(finalString)

  
  
  
  
}

list(list2)