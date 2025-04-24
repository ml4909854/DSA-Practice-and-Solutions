function validatePassword(password) {
  const passwordLength = password.length >= 0;
  const checkNumber = /\d/.test(password);
  const check = /[A-Z]/.test(password);
  return passwordLength && check && checkNumber;
}

const password = "Mahesh123";
if (validatePassword(password)) {
  console.log("correct password");
} else {
  console.log("wrong password");
}

const Day = 1;
switch (Day) {
  case 1:
    console.log("Monday");

    break;
  default:
    console.log("sundaay");
    break;
}

const side1 = 5;
let side2 = 4;
let side3 = 5;

if (side1 === side2 && side1 === side3) {
  console.log("all sides equal");
} else if (side1 === side2 || side1 === side3) {
  console.log("two sides are euqal");
} else {
  console.log("no sides equal");
}

let age = 10;
if (age >= 1 && age <= 12) {
  console.log("child");
} else if (age >= 13 && age <= 19) {
  console.log("teen");
} else if (age >= 20 && age <= 59) {
  console.log("adulet");
} else {
  console.log("seneior");
}


let username = "admin"
let pass = "123"

if(username ==="admin" && pass === "1234"){
    console.log("Acess granted")
}else{
    console.log("Acess denied")
}
