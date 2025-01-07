let array = [
    [1 ,2 ,3],
    [4 ,5 ,6],
    [7 , 8 ,9]

]

// print last columns means last values are printed menas i loop runs multiple times becuase we are run loop in a various 3 rows therefore i loop runs 

let rows = 3
let columns = 3

for(let i = 0 ; i<rows ; i++){
    let row  = ""
    for(let j = 0 ; j<columns; j++){
        if(j === columns-1){
          row+=array[i][j]+" "
        }else{
            row+=" "
        }
    }
    console.log(row)
}
