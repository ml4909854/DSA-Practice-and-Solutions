
// print number form 1 to 1- using for loop

for(let i = 1 ; i<=10 ;i++){
    console.log(i)
}


// print even numbers from 1 to 2- using a while loop

let i = 1
while(i>=20){
    if(i % 2 === 0){
        console.log(i)
    }
    i++
}

// find the sum of numbers from 1 to n 
let n = 10
let sum = 0
for(let i = 0 ; i<=10 ; i++){
    sum+=i
}
console.log(sum)


/// check if a number is positive or negative or zero

let number = 10
if(number>0){
    console.log("number is positive")
}else if(number <0){
    console.log("number is negative")
}else{
    console.log("number is zero")
}

// check if a number is even or odd

let num = 20
if(num%2 === 0){
    console.log("number is even")
}else{
    console.log("number is odd")
}

// print the multication table of a given number

let table = 5
for(let i = 1 ; i<=10 ; i++){
    console.log(table * i)
}

// find the lagerst among three numbers

let arr = [3 ,5 , 6]
let max = -Infinity
for(let i = 0 ; i<arr.length ; i++){
    if(arr[i] > max){
        max = arr[i]
    }
}
console.log(max)

// reverse a number

let reverse = 123
reverse = String(reverse)
let bag  = ""
for(let i = reverse.length-1 ; i>= 0; i--){
    bag+=reverse[i]
}
console.log(Number(bag))


// print the element using the for of loop
let  narr = ["apple"  , "mango" , "santara"]
for(let x of narr){
    console.log(x)
}