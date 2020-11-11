let word_freq = {
    Ab: 2,
    An: 25,
    Pe: 52,
    De: 15
}


console.log(word_freq.Ab)
console.log('Ab' in word_freq)
console.log(Object.keys(word_freq))
console.log(Object.values(word_freq))
console.log(Math.max(...Object.values(word_freq)))
let highest_value = Math.max(...Object.values(word_freq))
for(let i in word_freq){
    if(word_freq[i] === highest_value){
        console.log(i)
        console.log(true)
    }
}

