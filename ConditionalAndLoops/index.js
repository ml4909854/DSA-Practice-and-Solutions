

const num = 10
if(num%2===0){
    console.log("event")
}else{
    console.log("odd")
}


let num1 = 10
let num2 =11
if(num1 > num2 ){
    console.log("num1 is greater")

}else if(num1<num2){
    console.log("num 2 is greater")
}else{
    console.log("Both are equal")
}


let year = 2004;
console.log(
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 
    ? "Leap year" 
    : "Not a leap year"
);


let vowel = "B"

if(vowel.toLocaleLowerCase() === "a" || vowel.toLocaleLowerCase() === "e" ||vowel.toLocaleLowerCase() === "i" || vowel.toLocaleLowerCase() === "o" ||vowel.toLocaleLowerCase() === "u" ){
console.log("It is a vowel")
}else{
    console.log("it is not a vowel")
}


let marks = 86

if(marks >=90){
    console.log("A")
}
else if (marks >= 80 && marks < 90) {
    console.log("B");
  }
else{
    console.log("C")
}