let array = [
    [1 ,2, 3 , 4],
    [5 , 6 ,7 ,8],                                  
    [9 , 10 , 11 ,  12],
    [13 , 14 , 15 , 16]
]


// let array = [
//     [1 ,2, 3 , 4], -->top 0
//ind  [00 , 01 , 02, 03]
//     [5 , 6 ,7 ,8],
//ind [10, 11, 12 , 13]
//     [9 , 10 , 11 , 12],
//ind [20 , 21 , 22 , 23]
//     [13 , 14 , 15 , 16]
// ind [30 , 31 , 32 , 32]
// ]

// console.log(array.length)   array.length it will print the rows and 
// console.log(array[0].length) array[0].length it will print the columns of the matrix



let top = 0;
let bottom = array.length - 1;
let left = 0;
let right = array[0].length - 1;

let bag = "";
while (top <= bottom && left <= right) {
    // First, print the top columns elements
    for (let row = left; row <= right; row++) {
        bag += array[top][row] + " ";
    }
    top++;

    // Now, print the right rows elements
    for (let col = top; col <= bottom; col++) {
        bag += array[col][right] + " ";
    }
    right--;


    // now prints the element of the last row elements means all the column element of last row
    if(top<=bottom){
        for(let row = right ; row>=left ; row--){
            bag+=array[bottom][row]+" "
        }
        bottom--
    }
    if(left<=right){
       for(let col = bottom ; col>=top ; col--){
        bag+=array[col][left]+ ' '
       }
       left++
    }
   
}

console.log(bag);

//  this is the code for the spiral reversal
