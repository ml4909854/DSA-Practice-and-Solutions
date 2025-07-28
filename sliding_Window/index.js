

function print(size , k , arr){
  // Now let deep dive into a sliding widndow. Now these techniques
  // we are taking a subarrya and slide a widow
  // In thes code first element of the array will remove 
  // and last element in the array will be added . No I wnat to 
  // add In IN these question we have to find the maxisum of the subarrya
  // the and the size of the subaaray is 3/ No In first condition i am goind to run a 
  /// loog[ on a first sub array]
  
  let window_sum = 0 
  for(let i =  0 ; i<k ; i++){
    window_sum+= arr[i]
  }
  // console.log(window_sum) // Now these code i have to find out
  // a output of first three subarray let us array is give 
  // -1 -1 -2 1 -2 4 1 9 3 9 so the output of the array is
  // - + -1 + -2 = -4 the sum of the first subarray is -4 
  // No we have to find thd maximaum value of the subarray 
  let max = window_sum // we have stored the value in a form of 
  // max = windowm_sum = let max = -4 now next step is removed
  // first in the window and added next element to the sliding windown
  // now in tehse question i want there is a output -3 is give
  // wi have to remove -1 to -4 the so the ouput is three
  // -3and we have added a next element 1 = output is -2 
  // on a next sliding window techniquer so the output is 
  // the next sliding window in when on a next iteration 
  // -1 -2 1  =   -2 is the output of the next subarray.
  
  // let runs the loop on a subarray
  for(let i = k ; i < size ; i++){
    // reassing the window sum value
    window_sum = window_sum - arr[i-k] + arr[i]
    // -4  = -4 - 1 + 1 = output is -3
    // arr[i-k] means the value of the is i ==  3 
    // arr[i-k] == arr[3-3] = arr[0] = what is the value of the array
    // remove -1 and added arr[i] = arr[3] means the anwewr is 3 
     max = Math.max(window_sum , max)
  }
  // why i = k because we want to start a new loop on a next string 
  // so In that question 
  console.log(max) // Now here time complexity of the code
  // N
}






let size = 10 
let k = 3
let arr = [-1 ,-1, -2, 1, -2, 4, 1, 9, 3, 9]
print(size , k , arr)



