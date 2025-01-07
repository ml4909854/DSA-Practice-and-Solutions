let array = [
    [1 ,2 , 3],
    [4 ,5 , 6],
    [7 ,8 , 9]
]

let rows = 3
let columns = 3

for(let i = 0; i<rows ; i++){
    let row = ""
    for(let j = 0 ; j<columns ; j++){
       if(i+j === rows-1){
        row+=array[i][j]
       }
       else{
    row+=" "
       }
    }
    console.log(row)
}