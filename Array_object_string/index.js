// array in detail

// 1. push()
// add one or more element to the end of the array

// let arr = [1 ,2 ]
// arr.push(1 , 3 )
// console.log(arr)

// 2.pop() //
// removes the last element from the array

let arr = [1, 3, 4];
arr.pop();
console.log(arr);

// shirf() method remove the first elment from the array

let shiftArr = [1, 3, 5, 5];
shiftArr.shift();
console.log(shiftArr); // here remove the first element

// unshift() .. add element to the beginging of the array
let ushiftArr = [1, 3, 4, 5];
ushiftArr.unshift(1, 3, 4, 5);
console.log(ushiftArr); // add the element before the array

// length() return the lenght of the arr
let lengtharr = [1, 3, 4];
console.log(lengtharr.length);

// includes
// check if a values exists in the array (return true or fals)
let includesArr = [1, 3, 4, 6];
console.log(includesArr.includes(53));

//join()
// joins array elements into a string
let joinArr = ["a", "b", "c"];
console.log(joinArr.join("-"));

// reverse() is used to reverse a array
let reversearr = [1, 4, 2, 5, 6];
console.log(reversearr.reverse());

// sort methods is used to sort a array sort()
let sortedArr = [2, 4, 4, 46];
console.log(sortedArr.sort());

// slice returns part of the darry (does not chnage the original array)
let sliceArr = [10, 20, 30, 40];
console.log(sliceArr.slice(0, 3)); // it starts from 1 to end to 3

// splice(start  , deletecount , newItem) change
// original arrray be removing or adding elements

let spliceArr = [1, 2, 3];
spliceArr.splice(1, 1, 99); // remove item 1 and also delete one and with the placd
// of 1 99 will be placed 1 is the index of the element. second value is the number of dlelete
// third value is the newItem.
console.log(spliceArr);

// map() map returns a new  array by transforming each element
let mapArr = [1, 2, 3];
let newMapArr = mapArr.map((num) => num * 2);
console.log(newMapArr);

// filter()
// returns a new array with elements that pass a condition

let filterArr = [1, 2, 3, 4];
let even = filterArr.filter((num) => num % 2 === 0);
console.log(even);

// reduce() reduce a array into a single value

let reduceArr = [1, 2, 3, 4, 5];
let sum = reduceArr.reduce((acc, value) => acc + value, 0);
console.log(sum);

//foreach() method
// loops through each lelemetn (no return arra)
let foreachArr = [1, 3, 4, 5];
foreachArr.forEach((num) => console.log(num));

// flat() / flat method is used to flattens a nested arrays
let flatArr = [1, [3, [3]], 4];
console.log(flatArr.flat(2));

// find and the findIndex
let newArr = [10, 20, 30];
let find = newArr.find((x) => x > 10);
console.log(find); // returns a next value. if value is present inside this it return a next value
let findIndex = newArr.findIndex((x) => x === 10);
console.log(findIndex);

//problem 1 takes an array of numbers
for (let i = 0; i < 20; i++) {
  console.log(i);
}

//problem 2 filters out only even numbers

let evenArr = [1, 2, 3, 4, 5, 6, 7];
let filteredArr = evenArr.filter((x) => x % 2 === 0);
console.log(filteredArr);

// problem 3 return a new array with those even number multplied by 2
// nested higher order funtions method
let newArrr = [1, 3, 4, 6, 8, 11, 12, 15, 16];
let result = newArrr.filter((x)=>x%2===0).map((x)=>x*2)
console.log(result)