//examples
//Test.assertSimilar(twoSum([1,2,3], 4).sort(numericalCompare), [0,2]);
//Test.assertSimilar(twoSum([1234,5678,9012], 14690).sort(numericalCompare), [1,2]);
//Test.assertSimilar(twoSum([2,2,3], 4).sort(numericalCompare), [0,1]);


function twoSum(numbers, target) {

  let found = null

    for(let i = 0; i < numbers.length; i++){
        let current = numbers[i]

        let number_to_find = target - current
        console.log(number_to_find)
        console.log(numbers.indexOf(current))
        console.log(numbers.indexOf(number_to_find))
        let first_number = numbers.indexOf(current)
        let match_sum = numbers.indexOf(number_to_find)

        if(match_sum >= 0){
            found = [first_number, match_sum].reverse()
            break;
        }
   
        
  
  }
  
  console.log(found)
}

twoSum([1,2,3], 4)