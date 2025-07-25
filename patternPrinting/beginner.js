function solidSquare(mat) {
  let size = mat.length;
  console.log(size);
  console.log(mat);

  // here i doing to practice some time of start type of pattern printing problems
  // now first time i am going to print the start all over the places

  // here In these code i have no need to print all the elements
  // here we have to print all the array thay why i am entering
  // bag in a another section

  for (let i = 0; i < size; i++) {
    let bag = "";
    for (let j = 0; j < size; j++) {
      bag += "* ";
    }
    console.log(bag);
  }
  console.log("solid sqaure type pattern is printed");
}

// Now here i goint to print a hollow sqyare type of printing loops

function hollowSquare(mat) {
  let size = mat.length;
  console.log(size);
  console.log(mat);

  // to draw a struture like howllow sqaure. we have to print first
  // row last row first column and the last column. to draw a hollow like struture

  for (let i = 0; i < size; i++) {
    let bag = "";
    for (let j = 0; j < size; j++) {
      if (i === 0 || i === size - 1 || j === 0 || j === size - 1) {
        bag += "* ";
      } else {
        bag += "  ";
      }
    }
    console.log(bag);
  }
}

function LshapePattern(mat) {
  // here i am going to draw a L shape pattern
  // how i draw a L shape patter.

  for (let i = 0; i < mat.length; i++) {
    let bag = "";
    for (let j = 0; j < mat.length; j++) {
      if (j === 0 || i === mat.length - 1) {
        bag += "* ";
      } else {
        bag += " ";
      }
    }
    console.log(bag);
  }
  console.log("L shape pattern.");
}

function CshapePatter(mat) {
  // C shape pattern
  for (let i = 0; i < mat.length; i++) {
    let bag = " ";
    for (let j = 0; j < mat.length; j++) {
      if (i === 0 || i === mat.length - 1 || j === 0) {
        bag += "* ";
      } else {
        bag += " ";
      }
    }
    console.log(bag);
  }
  console.log("C shaped  pattern");
}

// x shape pattern drwan here
function XshapePatter(mat) {
  // to drawa a X shape pattern we have a need to draw a pattern
  // we have need a diagonal and the secondary diagonal

  let size = mat.length;
  console.log(size);
  console.log(mat);

  for (let i = 0; i < size; i++) {
    let bag = "";
    for (let j = 0; j < size; j++) {
      if (i === j) {
        bag += "* ";
      } else if (i + j === size - 1) {
        bag += "* ";
      } else {
        bag += "  ";
      }
    }
    console.log(bag);
  }
  console.log("X shape is printed");
}

// Here i am goint to print a left aligned tralgle array
function leftAlignedTreangle(mat) {
  let size = mat.length;
  console.log(size);
  console.log(mat);

  // here in these code. when i = 0 ; code means row value is 0 columns value also o menas columsn run o times
  // when i =1 columns runs two times  0 , 1
  // when i = 2  columns runs threee times 0 , 1 , 2
  // when i = 3 columns runs threee times 0 , 1 , 2, 3

  for (let i = 0; i < size; i++) {
    let bag = "";
    for (let j = 0; j <= i; j++) {
      bag += "* ";
    }
    console.log(bag);
  }
}

// problem 4. Right algigned triangle pattern

function rightAlignedTriangle(mat) {
  let size = mat.length;
  console.log(size);
  console.log(mat);

  // In a triagle patter the outer loop i = value equalt to the right value or ranged values

  // three is a last row printed first menas first loop is runs froms top to bottom
  // but inner loop runs right to the left it means inner loop is negative

  // i am goint to try to print column wise printing when column value is 1 row value is one

  for (let i = 0; i < size; i++) {
    let bag = "";
    // her i am only print the last value of the row
    // I have a need to add space before the start
    for (let space = 0; space < size - i - 1; space++) {
      bag += "  ";
      // ize-i-1 why this can take because we can not prdict when i try to print
      // right aligned we have to add a spaces. because we are printing last column of a paricular
      // that why we have add these code.
      //   when i = 0 ; the space loops runs 4-0-1 means 3 times the loops runs
      // space = 0 ; space<3 true it added two spaces in a front of a bag "  "
      // again space =1 spac<3 true it added two spaces in a front of bag "    "
      // space = 2 2<3 true added two spaces in these code. "      "
      // space = 3 3<3 loop will break

      // when  == 1
      // space = size = 4-1 = 3-1 = 2 space loops runs two times means four spaces are added then print stars
      // when = 2 = size = 4-2-1 = 1 means two space are added in front of stars
      // when i = 3 = size = 4-3-1  0 menas loops are break on that condition
    }
    // add stars
    for (let stars = 0; stars <= i; stars++) {
      bag += "* ";
    }

    // when i = 1 "      * " 6 spaces added then print start
    // when i = 2 "    * * " 4 spaces are added spaces runs two times then added start
    // when i = 3 "  * * * " 2 spaces are added loops runs one times and 3 start printed
    // when i = 4 "* * * * " No spaces added loops break
    console.log(bag);
  }
}

function invertedLeftTriangle(mat) {
  let rows = mat.length;
  let columns = mat.length;
  console.log(rows);
  console.log(columns);
  console.log(mat);

  // here in these  pattern look like
  // * * * *
  // * * *
  // * *
  // *
  //pattern look like that.
  // according to the pattern we have to print first row
  // then we have to print second row with i and again we have to print the
  // third row

  for (let i = 0; i < rows; i++) {
    let bag = "";
    // In a first row print all the columns
    // all the columns are printed. we not that but on the ohter
    // case whe the rows are increased
    // when i = 0 ; column printed 4
    // when i = 1 ; columns printed 3
    // when i = 2 columns prined 2
    // when i = 0 column printed 1

    // we assume that when i run on the first iteration
    // first row is printed and
    // the inner loop columns runs 4 times
    // after that we have a need columns run only three times
    // we have to columns--
    for (let j = 0; j < columns; j++) {
      bag += "* ";
    }
    columns--;
    console.log(bag);
  }
}

function invertedRightTriangle(mat) {
  let rows = mat.length;
  let columns = mat.length;
  console.log(rows, columns, mat);

  // * * * *
  // space * * *
  // space space * *
  // space space space *

  // first loop we are printed all the row.
  // when i = 0 No space added
  // when i = 1 one space added
  // when i =2 two space added
  // when i = 3 three space added
  // the space is increment each time.

  for (let i = 0; i < rows; i++) {
    let bag = "";

    // here i am going to added a space
    // first time space is equal to i
    // when  i = 1 space added when i = 2 two space added when 1 = 3 three space added

    for (let space = i; space > 0; space--) {
      //  first time when i = 0
      // space = 0 ; 0>0 loop failed. means no space added
      // when i = 1
      // space 1 ; i>0 ; one  space is added
      // space 2 ; 2.0 loops runs two times two space added
      bag += "  ";
    }

    for (let stars = 0; stars < columns; stars++) {
      bag += "* ";
      // when i = 0
      // no space added
      // stars 0 stars 0<4 times means loop run 4 times
      // after that i have to decrease column by 1  column = 3
      //  when i =2
      // one space added in front of bag
      // stars 0 stars run three times
    }
    columns--
    console.log(bag)
  }
}


function practice(mat){
  let rows = mat.length 
  let column = mat.length
    console.log(rows , column , mat)
  

  // // left alined triangle
  // for(let i = 0 ; i<rows ; i++){     // *
  //   let bag = " "                    ///* *
  //   for(let j = 0 ; j<=i ; j++){     ///* * * 
  //     bag += "* "                    ///* * * *
  //   }
  //   console.log(bag)
  // }
  // right alined triangle

  // for(let i = 0 ; i<rows ; i++){
  //   let bag = ""
  //   for(let space = 0 ; space<rows-i-1 ; space++){
  //     bag += "  "
  //   }
  //   for(let star = 0 ; star<=i ; star++){
  //     bag += "* "
  //   }
  //   console.log(bag)
  // }

 
  // inverted left triangel
  // * * * * 
  // * * * 
  // * * 
  // *

  // for(let i = 0 ; i<rows; i++){
  //   let bag = ""
  //   for(let stars = 0 ; stars<column ; stars++){
  //       bag += "* "
  //   }
  //   column--
  //   console.log(bag)
  // }

  // inverted Right aligned triangle
  // * * * * 
  //   * * *
  //     * * 
  //       *

  for(let i = 0 ; i<rows ; i++){
    let bag = ""
    for(let space = 0 ; space< i ; space++){
      bag += "  "
    }
    
    for(let stars = 0 ; stars<column ; stars++){
      bag += "* "
    }
   column--
    console.log(bag)
  }

}



function pyramid(mat){
/// here i am going to draw a pyramid pattern

//     * 
//    * *
//   * * *
//  * * * * 
// * * * * *

// let draw a pyramid patter 
// Now here how i draw a pyramid pattern here.
 let rows = mat.length
 let column = mat.length
// now in we have to print the stars in the odd fashion
// to show a pyaramid we have to print a multiple start
// the  strucure of the code is top to bottom means we have
// to increase the space and also increase the stars as well 
// whenever i increase after a some time 
// intially space ocuuring most place after a some time start occuring a most place 
// no space left.

for(let i = 0 ; i<rows ; i++){
  let bag = ""
  // let create a space
  for(let space = 0 ; space<rows-i-1 ; space++){
    bag += "  "
  }
  // now creae a start 
  // when i = o 1 star is created 
  // when i = 1 3 star is creatd 
  // when i = 2 5 star is created 
  // when i = 3 7 star is created

  for(let star = 0 ; star<2*i+1 ;star++ ){
    bag +="* "
  }
// now the pyramid pattern is printed
  console.log(bag)
}
console.log("Pyramid pattern is printed")

}


function InvertedPyramid(mat){
  let rows = mat.length
  let column = mat.length
  // we have to created a invereted pyramid
  for(let i = 0 ; i<rows ; i++){
    let bag = ""
    // when i =0 no space is there 
    // when i = 1 space is created 
    // when  i = 2 2 space is created 
    // when i = 3 space is created

     for(let spaces = i ; spaces>0 ; spaces--){
      // no  space is created first time
      bag += "  "
     }
     // first time we can not right i 

     for(let stars = 0 ; stars<2 * column - 1 ; stars++){
      bag += " *"
     }
    column--
     console.log(bag)
    }
    console.log("Inverted pyramid printed")
}
const array = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

// Herer I am going to create a beginner lever patterns printing
// these help you get comfortable with rows and columns and nested loops

// solidSquare(array)
// hollowSquare(array)
// LshapePattern(array)
// CshapePatter(array)
// XshapePatter(array)
// leftAlignedTreangle(array)
// rightAlignedTriangle(array);
// invertedLeftTriangle(array)
// invertedRightTriangle(array);
// practice(array)
// pyramid(array)
InvertedPyramid(array)

