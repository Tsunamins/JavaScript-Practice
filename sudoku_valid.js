
let valid_board = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
  ]

let invalid_board = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2], 
    [6, 7, 2, 1, 9, 0, 3, 4, 8],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]
  ]




function validSolution(board){
    let result = false
    let rows = false
    let columns = false
    let squares = false


    if(!zeroCheck(board)){
        return result
    } else {
        for(let i = 0; i < board.length; i++){

            if(!checkGroup(board[i])){
                break;
            } else {
                rows = true
            }

            if(!checkColumn(board, i)){
                break;
            } else {
                columns = true
            }
        }

        for(let i = 0; i < board.length; i += 3){
            for(let j = 0; j < board.length; j += 3){
                if(!checkSquare(board, i, j)){
                    break;
                } else {
                    squares = true
                }
                
            }

        }


        if(rows && columns && squares){
            result = true
        }



    }  

    return result

  
  }

  function checkSquare(board, i, col){
    let result = false
    let box = []
    for(let j = col; j < col + 3; j++){
        box.push(board[i][j])
        box.push(board[i + 1][j])
        box.push(board[i + 2][j])

    }
    
    if(!checkGroup(box)){
        return result
    } else {
        result = true
        return result
    }
  }

  //whole array and specify column, column will also be i in its own loop
  function checkColumn(board, col){
       let result = false
       let column = [];
       for(let i = 0; i < board.length; i++){
          column.push(board[i][col]);
       }

       if(!checkGroup(column)){
           return result
       } else {
           result = true
           return result
       }
    }


//check a row, column, or boxed group for correct conditions
function checkGroup(group){
    let result = false
    let object = {}
    for(let i = 0; i < group.length; i++){
        if(object[group[i]]){
            object[group[i]] = object[group[i]] + 1
        } else {
            object[group[i]] = 1
        }
    }
    let occurences = Object.values(object).find(a => a > 1)
    if(occurences === undefined){
        result = true 
        return result
    } else {
        return result
    }
}

//if board has any zeros, then board not valid
function zeroCheck(board){
    let valid_board = false
    for(let i = 0; i < board.length; i++){
        if(board[i].includes(0)){
            valid_board = false
            break;
        } else {
            valid_board = true
        }
    }
    return valid_board
}




//console.log(validSolution(valid_board))
console.log(validSolution(invalid_board))