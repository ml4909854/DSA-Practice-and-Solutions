// // console.log("index2")
// // common string methods in javasxript

// const { isContext } = require("vm");

// // 1 . length // return thes number of characters in a strng
// let lengthStr = "hello";
// console.log(lengthStr.length);

// // toUpperCase() // converst all the string to uppercase
// let upperStr = "hello";
// console.log(upperStr.toUpperCase());

// // 3 toLowerCase() converst the stting into the lowercase
// let lowerStr = "HELLO";
// console.log(lowerStr.toLowerCase());

// // trim() // methods is used for removes spaces from both ends
// let trimStr = "  mahesh   ";
// console.log(trimStr);
// console.log(trimStr.trim());

// // includes(inside these put substring)
// // checks if a substring exits in a string
// let includeStr = "javaScript";
// console.log(includeStr.includes("Script")); // the output in a form of true and the false

// // 6 startsWith
// let startStr = "hello";
// console.log(startStr.startsWith("he")); // the output in the form of true or false

// // 7. endswith .
// // checks if a string ends with a given subsstring
// console.log("hello".endsWith("lo")); // it is also gives the output
// // in the form of the true or false

// // 8. indexOf() returns the position of the first occurence of a value
// console.log("banana".indexOf("n")); // it return the first index of the elemeent occur
// // this times it give output is 2 it means first time the n is in the second positio

// //9. lastIndexof() // returns the last occurent of the value
// console.log("banana".lastIndexOf("a")); // the output is 5 it means the last occurent of the
// // a is the index of 5

// // 10.charAt(index) // means where is the character present
// // returns the charet at a  specific index
// // whenever i put whatever index it returns the ouput if the index
// // is preseent in the valrable
// console.log("hello".charAt(2)); // it returs a l is the output

// // substirng(start , end)
// // extracts a position of the string between the given indices
// console.log("hello".substring(1, 4)); // "ell"
// // now extracts a position of the string in a following range.

// // 12.slice is means cut into a pieces means string can divided into a pieice
// // slice(start , end)
// // similar to substring , but can accept neagtive values
// console.log("hello".slice(1, 3)); // "el"
// console.log("hello".slice(-2)); // "lo"

// // 13. replace is used to replace a string into a newString
// console.log("hello world".replace("world", "js"));
// // with the help of replace we can replace the string

// // split(separator)
// // splits the string into an arrya by a given separator
// console.log("a-b-c".split("-")); // ["a" , "b" , "c"]

// // repeat(n)
// // repeat the string into a n times
// console.log("ha".repeat("5"))

// // concat() joins tow or more strings
// let a = "hello";
// let b = "world";
// console.log(a.concat(" " ,b)) // the output is hello world

// // match(regex)
// // searches for matches usign regular expressions

// // problem1 couter the number of vowoels in a string
// let vowels = "aeiouAEIOU"
// let str = "mahesh"
//  let count = 0
// for(let i = 0 ; i<str.length; i++){
//     if(vowels.includes(str[i])){
//         count+=1
//     }
// }
// console.log(count)

// // problem 2 check if a tring is a palindrom

// let newStr = "naman"
// let bag = ""
// for(let i = newStr.length-1 ; i>=0; i--){
//     bag +=str[i]
// }
// console.log(bag)
// if(bag == newStr){
//     console.log("It is a palindrome string")
// }else{
//     console.log("It is not a palindrome string")
// }

// // find the first non repeating character

// // find the first now reapaeating character

// let str = "suraj";
// let character = "No character present";

// for (let i = 0; i < str.length; i++) {
//   for (let j = i + 1; j < str.length; j++) {
//     if (str[i] === str[j]) {
//       character = str[i];
//       break;
//     }
//   }
//   if (character !== "No character present") {
//     break;
//   }
// }

// // console.log(character)

// // let str
// let reverseStr = "mahesh";
// let bag = "";
// for (let i = reverseStr.length - 1; i >= 0; i--) {
//   bag += reverseStr[i];
// }
// console.log(bag);

// // problem 5.replaces all spaces with spaces
// // a traform with the help of the masai
// let newStr = "A transformation with the help of masai";
// let update = newStr.split(" ");
// let newArr = [];
// for (let i = 0; i < update.length; i++) {
    
// //   if ( i !== update.length -1) {
// //     newArr.push(update[i] +="-");
// //   }else{
// //     newArr.push(update[i])
// //   }
// // }
// // console.log(newArr.join(""));

// // capatilize the first letter of each world

// let str = "tumhara nam kya hai"
// let splitStr = str.split(" ")
// let bag = []
// for(let i = 0 ; i<splitStr.length ; i++){
//     for(let j = 0 ; j<splitStr[i].length ; j++){
//         if(j === 0){
//             bag += splitStr[i][j].toUpperCase()
//         }else if(j === splitStr[i].length-1){
//            bag += splitStr[i][j]+ " "
//         }
//         else{
//            bag += splitStr[i][j]
//         }
//     }
// }
// console.log(bag)

// 7 count how many times a word appears in a sentence

// let str = "This is a sentence and this sentence is simple"
// let wordToFind = "sentence"
// // now split the string and converted it into the array

// str = str.split(" ")
// console.log(str)
// let count = 0
// for(let i = 0; i<str.length ; i++){
//     if(str[i] === wordToFind){
// count++
//     }
// }
// console.log(count)


// how find the frequesncy of the characters 

// let str = "sentence"
// let frequecy ={}
// for(let i = 0 ; i<str.length; i++){
//     let char =  str[i]
//     if(frequecy[char]){
//         frequecy[char]++
//     }else{
//         frequecy[char] = 1
//     }
// }
// console.log(frequecy)

// // how i remove duplicate from arrya

// let arr = [2 ,1, 3,4 ,5,3 ,3,2 ,1]
// // Step 1: Sort the array
// let sortedArr = arr.sort((a, b) => a - b);
// // run a loop on a array
// // create a new array. where is now occurence of the item
// let newArr = []
// for(let i = 0 ; i<arr.length ; i++){
//      if(sortedArr[i] !== sortedArr[i+1]){
//         newArr.push(sortedArr[i])
//      }
//     }
//     console.log(newArr)
//     // run on a next arr


// now here i am going to find the occurence of the array elements

// let arr = [1 , 2,3,4,4,4,5,5,3,2,3,4]
// let frequency = {}
// for(let i = 0 ; i<arr.length; i++){
//     let num = arr[i]
//     if(frequency[num]){
//         frequency[num]++
//     }else{
//         frequency[num] = 1
//     }
// }
// console.log(frequency)


// let str1 = "listen"
// let str2 = "silent"

// // now split both the string
// let splitStr1 = str1.split("")
// let splitStr2 = str2.split("")

// console.log(splitStr1 , splitStr2)
// let sortStr1 = splitStr1.sort()
// let sortStr2 = splitStr2.sort()

// let joinStr1 = sortStr1.join("")
// let joinStr2 = sortStr2.join("")

// if(joinStr1 === joinStr2){
// console.log("It is a anagrams")
// }else{
//     console.log("Not")
// }


// trunucate a string if it;s longer than a certain lenght

let str = "My name is lakhan sajno ka sajna"
let bag = ""
for(let i = 0; i<str.length; i++){
    if(i === 10){
        console.log(str[i])
       bag += str[i] + "..."
       break
    }else{
       bag += str[i]
    }
}
console.log(bag)

// this is how i trunucate the string properly. Now move on a next thing.
