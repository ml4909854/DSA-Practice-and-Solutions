console.log("Intermediate pattern printing problems");



function numberPyramid(mat){
    console.log("number pyramid")

    let rows = mat.length
    let columns = mat.length
    console.log(rows , columns  , mat)

    // first loop is run on every array
    // second loop is used for the spaces 
    // Now third loop is added a Number

    for(let i = 0 ; i<rows ; i++){
        let bag = " "
        for(let spaces = 0 ; spaces<rows-i-1 ;spaces++){
            bag += " "
        }
        // add number here
        for(let num = 1 ; num<=i+1 ; num++){
            bag += num + " "
        }
      console.log(bag)
    }
}




function triagle(mat){
    let rows = mat.length;
    let columns = mat.length
    console.log(rows , columns , mat)


    for(let i = 0 ; i<columns ; i++){
        let bag = ""
        for(let j = 0 ; j<=i ; j++){
              if((i+j)%2 == 0){
                  bag += "1" + " "
              }else{
                bag+= "0" + " "
              }
        }
        console.log(bag)
    }
}

function paindromicPattern(mat){
    let row = mat.length
    let column = mat.length
    console.log(row , column , mat)

//       1
//     2 1 2
//   3 2 1 2 3
// 4 3 2 1 2 3 4
// this is the output of the code. I want to ry to find the solution of that code of follwoing some important steps

// first loops help to runs the loop on every array
// second loop added a spaces on a each and every array
// thrid loop is used for decreaseing number
// fourth loop is for increasing number

for(let i = 1 ; i<=row ; i++){
    // when i = 0 
    let bag = ""
    for(let spaces = 1 ; spaces<=row-i ;spaces++ ){
        // when i = 1 
        // space rows = 4  , 4-1 = 3 means loop runs three times
        // three spaces in the code
        // when i = 2 ; loop run 2 times means 2 spaces are added in these code
        // when i = 3 ; loop run  1 times 1 spaces are added
        // when i = 4 ; 4<3 loops break no space are added

        bag += "  "
    }

    // decreasing code
    for(let j = i ; j>=1 ; j--){
         bag += j + " "
         // when i = 1 ; code run 1 times 
         // 1 added into a bag 1
         // when i = 2 code run j = 2 ; 2>=1 ; code run two times
         // first 1== 2 2 is added in a bag. Then 1 is added in a bag
         // 2 , 1
         // when i = 3
         // j = 3 ; 3>=1 ; j-- . means loop runs three times first the value is print
         // 3 , 2 ,1 are added in a bag.
         // when  i = 4
         // j = 4 ; 4>=1 ; j-- means loop run fourhh times item 
         // 4 , 3 , 2 ,1 are added in a code
    }

    // increasing code
    for(let k = 2 ; k<=i ; k++){
        bag += k + " "

        // when i = 1 
        // k = 2 ; 2<=1 loop break
        // when = i = 2
        // k = 2  2<=2 means loop runs one time
        // 2 is added in a bag.
        // ehne i = 3
        // k = 2  ; 2<=3 its true loop runs two times 
        // first 2 is added then 3 is added in a bag/
        // the output is 2 , 3
        // when i = 4 it true loop run trhree times 
        // first //// 2 is added 3 , 4
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

// numberPyramid(array)  // ngow how i printing number of pyramid
// triagle(array)
paindromicPattern(array)
