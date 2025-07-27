// function MostWaterContainer(arr, n) {
//   // console.log(arr , len)
//   // now here there is  height is given in these array. I want to find out how much water filled in a container
//   // with the help of the array
//   // now we have to find the area of the container like how much water it takes.
//   // how i find the area in the container the formula of area is length * widht
//   // area = length * width

//   // first I try to solve the problme with the help of brute force method
//   let max = -Infinity;
//   // how the code works we have to taken a loop and  that is runs from all the element of the array
//   for (let i = 0; i < n-1; i++) {
//     // now all the height are printed . Now we have to compare two height suppose 1 to 3 1 to 23
//     // so In that case we have only taken lowest height not the height because the water will overflow
//     // from the containter .
//     // Runs the inner next height of the container
//     for (let j = i + 1; j < n; j++) {
//       let height = Math.min(arr[i] , arr[j]);
//       let width = j - i;
//       let area = height * width;
//       if (area > max) {
//         max = area;
//       }
//     }
//   }
//   console.log(max);
// }

// let arr = [1, 8 , 4 ,10]; // These is the container wher we are going to find outer the how much water filled in a contiane
// let len = arr.length;
// // so the time complexity of these particular code is n**2 so that why space complextiy is 1 with the help of the two pointer method
// // we are easinly do the sortout of the code

function MostWaterContainer(arr){
    // first step is to create a two pointer
    let left = 0 
    let right = arr.length - 1
    let max = -Infinity

    // wher is loop run when i < j where loop is not reverse a
    while(left<right){
        let height = Math.min(arr[left] , arr[right])
        let width = right-left
     
        // Now lets calculate area
        let area = height*width
        
        // let put the value of the area into the max variable
        if(area > max)(
            max = area
        )
      // let us find the value 
      if(arr[left] < arr[right]){
        left ++
      }else{
        right--
      }
    }
    console.log(max)
}
let arr = [1 , 2 ,11,5 ,6 , 8 , 9 , 11]
// MostWaterContainer(arr);
