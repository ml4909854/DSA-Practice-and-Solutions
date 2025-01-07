let array = [
    [1 ,2 ,3],
    [4 ,5 ,6],
    [7 , 8 ,9]

]


let rows = 3
let columns = 3

// photoframpe pattern

for(let i = 0 ; i<rows ; i++){
    let row = ""
    for(let j = 0 ; j<columns; j++){
        if( i===rows-1 ||j=== columns-1){
            row+="* "
        }else{
            row+="  "
        }
    }
    console.log(row)
}