//  i want to print a first column of the matrix

let array = [
    [1 ,2 , 3],
    [4 ,5 , 6],
    [7 ,8 , 9]
]

// first column print means
// threee rows are print so the value of the j will be constant j ===0
// and the first loop will continuous run

let rows = 3
let columns = 3

for(let i = 0 ; i<rows ; i++){
   let row = ""
    for(let j = 0 ; j<columns; j++){
      if(j === 0){
        row+=array[i][j]
      }
    }
    console.log(row)   
}

