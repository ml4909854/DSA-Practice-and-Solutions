

const array = [
    [1 ,2 , 3],
    [4 ,5 , 6],
    [7 ,8 , 9]
]

let rows = 3
let columns = 3
for(let i = 0 ; i<rows ; i++){
    let row = ""

    for(let j = 0 ; j<columns ; j++){
        row+=array[i][j]
    }
    console.log(row)
}
for(let i = 0 ; i<columns ; i++){
    let row = ""

    for(let j = 0 ; j<rows ; j++){
        row+=array[i][j]
    }
    console.log(row)
}

//  if the value of the colums and the rows are eual so the output of both the lopp are eual