

const array = [
    [1, 2, 3],
    [4, 5, 6]

];

let rows = 2
let colums = 3
//  nested loop 
// first loop for all the rows
// second loop for all the columns

for(let i = rows-1 ; i>=0 ; i--){
    let row  = ""
    for(let j = colums-1; j>=0; j--){
        row +=array[i][j]+ " "
    }
    console.log(row)
}