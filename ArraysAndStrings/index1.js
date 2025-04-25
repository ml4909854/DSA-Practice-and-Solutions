

let arr = [1 ,2 ,3 ,4]

let sum = arr.reduce((acc , num)=>acc+num , 0)
console.log(sum)

// foreach methods 
// foreach methods excuetes a fuction for each element

arr.forEach((num)=>console.log(num))
// map methods creates a new array with tranformed elements
let mapArr = arr.map((num)=>num*5)
console.log(mapArr)


// filter methods creates a new array with element that pass a test 
let filterarr = arr.filter((num)=>num%2===0)
console.log(filterarr)

// reduce methods reduces array to a single value

let sumarr = num.reduce((acc , num)=>acc+num , 0)
console.log(sumarr)