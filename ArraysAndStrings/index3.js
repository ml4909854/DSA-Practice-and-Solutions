let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4];

function arrayIntersection(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    if(arr2.includes(arr1[i]) && !result.includes(arr1[i])){
        result.push(arr[i])
    }
  }
  return result
}
let array = arrayIntersection()
console.log(array)
