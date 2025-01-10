

let arr = [ 1 ,1 ,1 ,2, 3, 4 ,4 ,5]

let left = 0
let right = left+1

let temp = []

for(let i = 0 ; i<arr.length; i++){
    if(arr[left] !== arr[right]){
        temp.push(arr[left])
    }
}