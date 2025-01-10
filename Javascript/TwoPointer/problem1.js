// chicking the pairs exits with a givesn sum

let arr = [1 ,  4 ,5 , 6 , 3 ,2]
let target = 11

// first step to sort the array
arr.sort()
// we are find a two pointer 
let left = 0
let right = arr.length-1

while(left<right){
    let sum = arr[left] + arr[right]
    if(sum === target){
        return [left , right]
    }
    if(sum>target){
        right--
    }
    if(sum<target){
        left++
    }
}