let array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let rows = 3;
let columns = 3;

// Z Shape pattern
// first step to print first row
// second step to print the secondary diagonal
// third step to print a last row

for (let i = 0; i < rows; i++) {
  let row = "";
  for (let j = 0; j < columns; j++) {
    if (i === 0 || i === rows - 1|| (i+j===columns-1 && i!==0 && j!==rows-1)) {
      row += array[i][j] + " *";
    }else{
      row+="  "
    }
  }
  console.log(row);
}
