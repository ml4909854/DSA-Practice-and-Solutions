let array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let rows = 3;
let columns = 3;

// N shape pattern
// first print the first column
// second print secondaray diagonal
// third print the last column

for (let i = 0; i < rows; i++) {
  let row = " ";
  for (let j = 0; j < columns; j++) {
   if(j===0 || j===columns-1 || (i+j === columns-1 && i!==0 && i!==rows-1)){
    row += array[i][j] + " ";
   }else{
    row+="  "
   }
  }
  console.log(row)
}
