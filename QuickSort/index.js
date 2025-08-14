
function swap(arr , j , i){
  // swap the values
  [arr[j] , arr[i]] = [arr[i] , arr[j]]
}

function partition(arr ,low , high){
 
 // first step to select pivot element
 let pivot = arr[high] // we select last element is the pivot element
 // Now after that i want give the postion of the smellest element
//  these postion i give inside the loopg
// let runs the loops  
  let j = low-1
  for(let i = low ; i<high ; i++){
    // skip the pivot element means loop runs form low to high skip pivoyt leement
    if(arr[i] <= pivot){
        // means incraese the value of the pivot
        // lets understand how the code works right now 
        j++
        swap(arr , j , i) // is ther is any smaller elemnt we have swap the code.
    }
  }
  // after that swap the pivot element to the after the lastest smalles number
  swap(arr , j+1 , high )  
  return j+1 // now we return here the pivot index
}
// now lets write a quick sort methods
function quickSort(arr , low , high){
    if(low<high){

        // now let solve the question first 
      // in quicksort funtion we have need of a piotIndex
      let pivotIndex = partition(arr , low , high)
    
      quickSort(arr , low , pivotIndex-1)  // these is the recusive funtionality when the pivoyt element choose
      // it runs from the left and the right portion of the array
      quickSort(arr , pivotIndex+1 , high) // these run for the right arry.
    }
}


let arr = [10 , 7 , 8 ,9 , 1, 5]
console.log(arr)
let low = 0 
let high = arr.length-1
quickSort(arr , low , high)
console.log(arr , "sorted arrya")

