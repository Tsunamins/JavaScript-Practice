//product, pop, price
let products = ["Chips,85,5", "Ice Cream,60,15", "Wine,100,20", "Chocolate,60,10"]



//other object making
//Object.assign({}, ['a','b','c']);
//{ ...['a', 'b', 'c'] }

let new_array = []

for(let i = 0; i<products.length; i++){
    new_array.push(products[i].split(","))
    

}
console.log(new_array)

// creates a proper object
let product_object = []
for(let i = 0; i<products.length; i++){
    let product = new_array[i][0]
    let popular = new_array[i][1]
    let price = new_array[i][2]
    let obj = {}
    obj["product"] = product
    obj["popular"] = popular
    obj["price"] = price
    product_object.push(obj)

}

console.log(product_object)

product_object.sort((a, b) => (b.popular - a.popular))

// in the event of alphabetizing(desc)
//product_object.sort((a, b) => (a.product < b.product) ? 1 : -1)
console.log(product_object)



//also to handle secondary properties
//list.sort((a, b) => (a.color > b.color) ? 1 : (a.color === b.color) ? ((a.size > b.size) ? 1 : -1) : -1 )