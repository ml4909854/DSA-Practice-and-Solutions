//problem 1.  row wise printing
// outer loop print the loop rows. And the inner loop print the separete columns of that rows

function rowWisePrinting(mat) {
  let n = mat.length;
  //
  console.log(n);
  let bag = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      bag += mat[i][j] + " ";
    }
  }
  console.log(bag);
}

// problem 2 column wise printing.
// the outer loop goes through the each columns. And the inner loop goes throw the rows

function columnWisePrinting(mat) {
  console.log(mat);
  let size = mat.length;
  console.log(size);
  let bag = "";
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      bag += mat[j][i] + " ";
    }
  }
  console.log("columns wise printing");
  console.log(bag);
}

// rverse row wise printing.
// Outer loop goese trhough each row.
// inner looop goes right to left. (that is from last column to first column)
function reverseRowWisePrinting(mat) {
  let size = mat.length;
  console.log(size);
  console.log(mat);

  let bag = "";
  for (let i = 0; i < size; i++) {
    // we are printing the code. in row wise.
    // but in the we are printing first last column then second last column
    // value then third last column value.
    // on that codition we have to reverse the loop of the column
    for (let j = size - 1; j >= 0; j--) {
      bag += mat[i][j] + " ";
    }
  }
  console.log(bag);
  console.log("the value is printed in a revese row wise direcetion");
}

// Now here we are goint to print
// column reverse direction.
// outer loop goes through the column
// the inner row goes bottom to top from last to first
// so we move upward inside each column

function reverseColumnWisePrinting(mat) {
  let size = mat.length;

  let bag = "";
  for (let i = 0; i < size; i++) {
    for (let j = size - 1; j >= 0; j--) {
      bag += mat[j][i] + " ";
    }
  }
  console.log(
    "the matrix value si printed in the column reverse wise printing"
  );
  console.log(bag);
}

function lastRowPrintFirst(mat) {
  // Now  in thes code i want last row is printed first/
  // then second last
  // then third last
  // 13 14 15 16 9 10 11 12 5 6 7 8 1 2 3 4
  // i want these type of output
  // Now the loop runs on the element of the arrat
  // but i want the loop runs on the last row of the matrix
  // and then runs on each column of the matrix from left to right direction

  let size = mat.length;
  console.log(size);
  console.log(mat);
  let bag = "";
  for (let i = size - 1; i >= 0; i--) {
    for (let j = 0; j < size; j++) {
      bag += mat[i][j] + " ";
    }
  }
  console.log(
    "last row print first. means row is reversed. but column from left to right"
  );
  console.log(bag);
}

function lastRowPrintFirstButInReverseDirection(mat) {
  // last row will print first and column start from
  // right to left in these time means. The output of the code will be
  // related to the
  // similar like 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1

  let size = mat.length;
  console.log(size);
  console.log(mat);

  let bag = "";
  // here i am going to print last row first
  for (let i = size - 1; i >= 0; i--) {
    // now last row is printed but i want
    // every element of the last row or
    // every column of last row is in a reverse
    // direction.
    for (let j = size - 1; j >= 0; j--) {
      // column is also printed in a reverse direction
      bag += mat[i][j] + " ";
    }
  }
  console.log(
    "last row print first but in reverse direction every element in the last row print in a reverse direction"
  );
  console.log(bag);
}

function lastColumnPrintFirst(mat) {
  // so in these code i want to print the last column first
  // means printing will be column wise direction
  // but i walso but the last column will print in the
  // top to bottom direction. means the output will be
  // similar 4 8 12 16 3 7 11 15 2 6 10 14 1 5 9 13
  // the output like these
  let size = mat.length;
  console.log(size);
  console.log(mat);
  let bag = "";
  // now i am going to print last column first it will be in reverse dirction
  // so the loop will be in a reverse direction.
  for (let i = size - 1; i >= 0; i--) {
    // now the last column is printed.
    // but the row value is on the top to bottom direction
    // so there is a no need to reverse the rows. we have to print
    // the rows in a top to bottom direction
    for (let j = 0; j < size; j++) {
      bag += mat[j][i] + " ";
    }
  }
  console.log("last column print first in the top to bottom direction");
  console.log(bag);
}

function lastColumnPrintFirstLastValueOfRowPrintFirst(mat) {
  // last colum print first
  // last row value also print first
  // means the output like last column and last row value of that partcular time
  // output 16 12 8 4 15 11 7 3 14 10 6 2 13 9 5 1
  let size = mat.length;
  console.log(size);
  console.log(mat);
  let bag = "";
  for (let i = size - 1; i >= 0; i--) {
    // column are print in a reverse order like 4 8 12 16
    for (let j = size - 1; j >= 0; j--) {
      // rows are print in a reverse order like 16 12 8 4
      bag += mat[j][i] + " ";
    }
  }
  console.log(
    "last column print first. and last value of that partcular column print first "
  );
  console.log(bag);
}

function printZigzagRowWise(mat) {
  // here i am going to print the zigzag patter of the matrix.
  // IN the firt time the loop will be look like
  // 1 2 3 4 then next time 8 7 6 5 then 9 10 11 12 thn 13 14 15 16

  let size = mat.length;
  console.log(size);
  console.log(mat);

  // In first iteration the codition is even becuase 0 is in
  // even category. the outer loop runs from top to bottom
  // these row run from row wise and inner loop runs from left to right
  // in the second condition the outer loop run in a top to bottom direction
  // but the inner loop runs in a opposite direction right to left

  let bag = "";
  for (let i = 0; i < size; i++) {
    console.log("This loop runs four times");
    if (i % 2 === 0) {
      // this runs on a even conditon
      // here is row wise printing form top to bottom
      // her is inner loop from left to right means both loop are positive
      for (let j = 0; j < size; j++) {
        bag += mat[i][j] + " ";
      }
      console.log("even");
    } else {
      // this run when the codition is odd
      // this is the row wise printing
      // the router loop runs from top to bottom direction
      // means first loop is positive
      // but inner loop runs from right to left means
      // outer loop is traverse and inner loop is reverse in direction

      for (let j = size - 1; j >= 0; j--) {
        bag += mat[i][j] + " ";
      }
      console.log("odd");
    }
  }
  console.log(bag);
  console.log("The output is in a zig zag patter.");
}

function printSshapePatter(mat) {
  // now here i am going to try build a s shape patter
  let size = mat.length;
  console.log(size);
  console.log(mat);

  // to print the loop we are goint to the like row wise
  // in a outer loop the direction is top to bootom
  // means loop is positive. but in
  // the inner loop the direction is right to left means first
  // inner loop is negative. Then in a second codition.
  // the inner loop wiil be positive

  let bag = "";
  for (let i = 0; i < size; i++) {
    if (i % 2 === 0) {
      for (let j = size - 1; j >= 0; j--) {
        bag += mat[i][j] + " ";
      }
    } else {
      for (let j = 0; j < size; j++) {
        bag += mat[i][j] + " ";
      }
    }
  }
  console.log("s shape patter is printed");
  console.log(bag);
}

// Zig zag column wise
function zigZagColumnWise(mat) {
  let size = mat.length;
  console.log(size);
  console.log(mat);

  // here is the there is a column wise printing
  // the first time the roop runs from left to right it is correct
  // means outer loop is positive the also the inner loop
  // is also postive bebcause it is runs from top to bottom
  // next iterationg inner loop will be negative
  let bag = "";
  for (let i = 0; i < size; i++) {
    if (i % 2 === 0) {
      for (let j = 0; j < size; j++) {
        bag += mat[j][i] + " ";
      }
    } else {
      for (let j = size - 1; j >= 0; j--) {
        bag += mat[j][i] + " ";
      }
    }
  }
  console.log(bag);
  console.log("These is the column wise zigzag pattern");
}

function printDiagonal(mat) {
  let size = mat.length;
  console.log(size);
  console.log(mat);

  // here in these question i am going to fetch
  // the diagonal of the matrix. It was a very easy topic. How
  // whenerver i === j this condition is follows. Means. we can see that what is the answer of these code

  let bag = "";
  for (let i = 0; i < size; i++) {
    // both the loop is postive in that case
    // we are going to the top to bottom direction in that case
    // the inner loop runs from left to right direction
    // means both loop are positive
    for (let j = 0; j < size; j++) {
      if (i === j) {
        bag += mat[i][j] + " "; // that are the diagonal elements are helps to printed the elements
      }
    }
  }
  console.log("diagonal element are printed successfully!");
  console.log(bag);
}

function secondaryDiagonal(mat) {
  let size = mat.length;
  console.log(size);
  console.log(mat);
  // this code is print the reverse diagonal of the code.
  // but there is a codition to find the reverse diagonal is
  // sum of the code is i + j = size -1. That is used to find
  // find the reverse diagonal code.

  let bag = "";
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (i + j === size - 1) {
        bag += mat[i][j] + " ";
      }
    }
  }
  console.log("reverse diagonal is printed");
  console.log(bag);
}

function printNShapePatter(mat) {
  console.log("N shape pattern");
  let size = mat.length;
  console.log(size);
  console.log(mat);

  // N shape patter means we have a need to first column
  // and last column and the diagonal elements.
  // we have to print based on a column wise printing
  // here in these code the outer right to left that means
  // outer loop is postive . but the inner loop is runs ont
  // bottom to the top that means inner loop is negative
  // now let us try to solve these N shape pattern problem

  let bag = "";
  for (let i = 0; i < size; i++) {
    // first loop is positive becuase it runs from left to right
    for (let j = size - 1; j >= 0; j--) {
      // i want only first column and the last column and the diagonal part
      // for first column i can say that i == 0 and i size =-1 for the last column
      // and for diagonal i === j
      if (i === 0 || i === size - 1 || (i === j && i != 0 && i != size - 1)) {
        bag += mat[j][i] + " "; // these is the column wise priting. That why I write like that.
      }
    }
  }
  console.log("N shape patter is printed.");
  console.log(bag);
}

function printZshapePatter(mat) {
  // now here i am going to draw a z shape pattern
  let size = mat.length;
  console.log(size);
  console.log(mat);

  // now in a z shape patter the struture like
  // the outer loop run from left to right means the
  // outer loop is postive. and the innter loop also runs
  // let to right direction means the inner loop is also
  // postive. buth there is a one case the secondary diagonal
  // are going to printed. So here i am going to solve the
  // problem related to the dsa.

  let bag = "";
  for (let i = 0; i < size; i++) {
    // first loop is positive beacause z goes to the
    // left to right direction and intter loop is also postive
    for (let j = 0; j < size; j++) {
      // but there is a one codiition here
      if (
        i === 0 ||
        i === size - 1 ||
        (i + j === size - 1 && i !== 0 && i !== size - 1)
      ) {
        bag += mat[i][j] + " ";
      }
    }
  }
  console.log("Z shape printed");
  console.log(bag);
}

function printReverseNShape(mat) {
  let size = mat.length;
  console.log(size);
  console.log(mat);

  // here i am going to print the reverse of n
  // first i have to print the last column then first
  // column then the secondary diagonal
  // last column means we have to run the code on the bases
  // of column wise there is last column means
  // the outer loop is reverse. because it run
  // runs from right to left and in this code
  // inner loops runs top to bottom means inner loop will be positive

  let bag = "";
  for (let i = size - 1; i >= 0; i--) {
    for (let j = size - 1; j >= 0; j--) {
      if (
        i === 0 ||
        i === size - 1 ||
        (i + j === size - 1 && i !== 0 && i !== size - 1)
      ) {
        bag += mat[j][i] + " ";
      }
    }
  }
  console.log("These code is for reversed N");
  console.log(bag);
}

function printReverseZShape(mat) {
  let size = mat.length;
  console.log(size);
  console.log(mat);

  // outer loop runs from top to bottom
  // direction it means outer loop will be positive
  // because these is the row wise printing
  // the the inner element return in a reverse order
  // it means inner loop will be right to left means inner
  // loop will be negative

  let bag = "";
  for (let i = 0; i < size; i++) {
    for (let j = size - 1; j >= 0; j--) {
      if (i === 0 || i == size - 1 || (i === j && i !== 0 && i !== size - 1)) {
        bag += mat[i][j] + " ";
      }
    }
  }
  console.log(bag);
  console.log("reverse z shaped");
}

function printSpiralPattern(mat) {
  // Now here i am going to print the spiral pattern. Now how the print the loop
  let size = mat.length;
  console.log(size);
  console.log(mat);

  // First we are continue. to create a boundary, now lets move on a roll. It is so devastating for me . now it wa
  let top = 0; // wher we are run on the top row top value will be constant like 0. and left and right value are varry.
  let bottom = size - 1; // when bottome is contant like bottom is 3 in the row on that conditon left and right value are varry.
  let left = 0; // when we try to solve the problem of these code, on that situationleft value will be constat. like 0
  // top and bottom value will be varry
  let right = size - 1; // when right is constant top and bottom value is varried. How i try to create and find the solution.

  // now first condtion we have create a solution of these code
  // when top contant
  let bag = "";

  while (top <= bottom && left <= right) {
    // I write these loop becase the dame line is not printed again and again. that why i put the condiont

    for (let i = left; i <= right; i++) {
      bag += mat[top][i]+" ";
    }
    // after that increment a top++
    top++;

    // now when the right is contant
    // top and bottom varry. and the code runs from top to bottom it means loop will be positive

    for (let i = top; i <= bottom; i++) {
      bag += mat[i][right] +" "; /// right is a column that why i right here
    }
    right--; // we have to decrease the value of the right towards the left , that why we have a need to decrease the code

    // when bottom is constant
    // right moves towards the left. means it is in a oppositve direction. the loop is a negative
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        bag += mat[bottom][i] + " "; // because bottom is the raw that why I write like these. after that we have to decrease the bottom
        // towared the top that why we have to write bottom--
      }
      bottom--;
    }

    // when left is constant
    // top and bottom are varry. On that condition how i write the code
    // code runs from bottom to the top it means it a reverse direction so we have add a
    // negative loop
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        bag += mat[i][left] + " "; // because left is the column that why i write like these
      }
      left++;
    }
  }
  console.log(bag)
}

const array = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

// rowWisePrinting(array)
// columnWisePrinting(array)
// reverseRowWisePrinting(array);
// reverseColumnWisePrinting(array)//
// lastRowPrintFirst(array)
// lastRowPrintFirstButInReverseDirection(array)
// lastColumnPrintFirst(array);
// lastColumnPrintFirstLastValueOfRowPrintFirst(array)
// printZigzagRowWise(array);
// printSshapePatter(array)
// zigZagColumnWise(array);
// printDiagonal(array)
// secondaryDiagonal(array)
// printNShapePatter(array)
// printZshapePatter(array)
// printReverseNShape(array)
// printReverseZShape(array)
printSpiralPattern(array);
