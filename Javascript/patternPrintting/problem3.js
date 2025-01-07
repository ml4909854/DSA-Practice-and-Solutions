//  print the diagonal elements

let array = [
    [1 ,2 , 3],
    [4 ,5 , 6],
    [7 ,8 , 9]
]
for(let i = 0; i<array.length; i++){
    let row = ""
    for(let j = 0 ; j<array.length; j++){
        if(i === j){
            row+=array[i][j]+" "
        }else{
            row+=" "
        }
    }
    console.log(row)
}

//  so that this is the printing the diagonal array of the solution and the value is the given 
// so the answer will it will print the diagonal