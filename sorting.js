let array1 = [1, 4, 7, 12, 17, 3, 24]

//don't need to worry over parse of numbers for sort
let array2 = ["85", "5", "95"]


//sort ascending
console.log(array1.sort((a,b) => (a-b)))
console.log(array2.sort((a,b) => (a-b)))

//sort descending
console.log(array1.sort((a,b) => (b-a)))
console.log(array2.sort((a,b) => (b-a)))


