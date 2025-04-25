function greet(name) {
  return name;
}
console.log(greet("Alice"));

const multiply = function (a, b = 1) {
  return a * b;
};
console.log(multiply(5));
console.log(multiply(5, 3));

// Arrow funtion

const square = (x) => x * x;
console.log(square(4));

// Higher order function

function operate(a, b, operation) {
  return operation(a, b);
}

const add = (x, y) => x + y;

console.log(operate(5, 3, add));
(function(){
    console.log("I runs immidiately!")
})();


// clousure funtion

function outer(){
    let count  = 0
    return function innter(){
        count++
        console.log(count)
    }
}
const counter = outer()
counter()
counter()


const fetchData = async () => {
    try {
      let response = await fetch("https://api.example.com/users/1");
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
//   fetchData();


function Person(name, age) {
    this.name = name;
    this.age = age;
    this.introduce = function () {
      return `Hello, I am ${this.name}`;
    };
  }
  
  const alice = new Person("Alice", 25);
  console.log(alice.introduce());