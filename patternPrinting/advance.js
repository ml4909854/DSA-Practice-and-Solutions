console.log("advance pattern printing");


function zShapePattern(mat){

    let rows = mat.length
    let columns = mat.length
    console.log(rows , columns , mat)


    // Now drawing nshape patter

    for(let i = 0 ; i<rows ; i++){
           let bag = ""
           for(let j = 0 ; j<rows ; j++){
                if(i === 0 || i === rows-1 || (i!=0 && i!==rows-1 && i+j=== rows-1)){
                    bag += "* "
                }else{
                    bag += "  "
                } 
           }
           console.log(bag)
        
    }
    console.log("z shape is printed")
}


function nShapePattern(mat){
     let rows = mat.length
     let columns = mat.length

     for(let i = 0 ; i<rows ; i++){
        let bag  = ""
        for(let j = 0 ; j<rows ; j++){
            if(j===0 || j===rows-1 || (j!==0 && j!==rows-1 && i===j )){
                bag += "* "
            }else{
                bag+="  "
            }
        }
        console.log(bag)
     }
     console.log("N shape is printed!")
}


function spiralMatrix(mat){
    let rows = mat.length
    
    // first we have to declare a boundares

    let top = 0
    let bottom = mat.length-1
    let left = 0 
    let right = mat.length-1

    // when top is constant left and right is running
    let bag = ""
    for(let i = left ; i<=right ; i++){
        bag += mat[top][i] + " "
    }
    
    for(let i = top; i<=bottom ; i++){
        bag += mat[i][right] + " "
    }
    
    for(let i = right ; i>=left ; i--){
        bag+= mat[bottom][i] + " "
    }
    for(let i = bottom ; i>=bottom ; i--){
        bag+= mat[i][bottom] + " "
    }
   console.log(bag)
}


function diagonalPattern(mat){
    let rows = mat.length
    let columns = mat.length
    console.log(rows , columns , mat)


    // diagonal pattern
    for(let i = 0 ; i<rows ; i++){
        let bag = ""
        for(let j = 0 ; j<rows ; j++){
            if( i=== j || i+j === rows-1){
               bag += "* "
            }else{
                bag +="  "
            }
    
        }
        console.log(bag)
    }
}



function snakePatter(mat){
    let rows = mat.length
    let columns = mat.length
    console.log(rows , columns , mat)
    
    // let run the loop
    for(let i = 0 ; i<rows ; i++){
        let bag = ""
        if(i%2===0){
               for(let j = 0 ; j<rows ; j++){
                bag += mat[i][j] + " "
               }
        }else{
            for(let j = rows-1 ; j>=0 ; j--){
                bag+= mat[i][j] + " "
            }
        }
        console.log(bag)
    }
}



let array = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

// zShapePattern(array)
// nShapePattern(array)
// spiralMatrix(array)
// diagonalPattern(array) // xshapePattern are same
snakePatter(array)
