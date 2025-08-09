function mergeSort(arr) {
  // first step to find the length of the array then move on a second part of the code
  let n = arr.length;
  if (n < 2) return; // loops when the each and every element is divide into a single part.
  // second step to find the mid.of the array to find the mid of the array
  let mid = Math.floor(n / 2);

  // now next step we are created a two separate arrays, why these array use in these array we divide our
  // arrya into a each single array

  // Divide and conquire then merge..
  let left = Array(mid); // means 0 to 3
  let right = Array(n - mid); // it from 3 to till the end of the array

  // lets run the loops on the arrys then put all the element of the Main arr into the
  // left and right array

  for (let i = 0; i < mid; i++) {
    // mid or left.length
    // mid 0 means left loop runs from 0 5to from the coditon
    left[i] = arr[i];
  }

  for (let j = 0 ; j < right.length; j++) {
    // means loop runs from 3 to till 5.
    right[j] = arr[mid+j];
    // means 0 index of the codee arr[3]
    // mid is 3 means 3+1 means 3+0 means 3 index element is added into a right array
  }

  // Now here the recursion works Now move on the next two three steps;
  mergeSort(left);
  mergeSort(right); // these two runs when the each array is divide into a single subarrya
  // means
  //  [5 ,2 ,3 4, 1 ,6 ,9]
  //  [5 ,2 ,3]  [ 4, 1 ,6 ,9]
  //  [5 ] [2 ,3]  [ 4, 1] [ ,6 ,9]
  //  [5 ], [2 ], [3], [ 4], [1], [6], [9],
  // after that we run the loop that funtion
  // that thelps to sort the array after sort the arry merge into a new arrya


  merge(left , right , arr)
}
function merge(left , right , arr){
    
    // lets create a conditon
    let nleft = left.length
    let nright = right.length

    let i = 0 ;
    let j = 0 ; 
    let k = 0 ; // kis used a per the indexing purpose
    
    // now assume that value of i j and k is 0 
    // when the loops runs the value are increment according to the condition 
    // now the loop runs from leght of the subaray
    // let length is 3 means loops runs from o to 3
    // the loops urn in a revese lenght

    while(i<nleft && j<nright){
        if(left[i] < right[j]){
            arr[k] = left[i]
            i++
            k++
        }else{
           arr[k] = right[j]
            j++
            k++
        }
    }

    // Now some remaining element are left we have to run the loop on a particular remaining elements
    while(i<nleft){
        arr[k] = left[i]
        i++
        k++
    }
    
    while(j<nright){
        arr[k] = right[j]
        j++
        k++
    }

  return arr
}



let arr = [5, 2, 3, 4, 1, 6, 9];
mergeSort(arr);
console.log(arr)


