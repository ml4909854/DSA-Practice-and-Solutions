

// // // javascript objects are fundemend building blocks of javascript used to store collections of data and more compex entitites> this comprehendive guide covers all ovjects concpets and methods 

// // // creating objects in few methods/

// // // 1 . object literal
// // const person = {
// //     name:"mahesh",
// //     age:"23",
// //     IsAdmin:true

// // }
// // // 2.contructior
// // const car = new Object()
// // car.make = "Tyota"
// // // console.log(car)

// // // using object.create
// // const protoObj = {x:1}
// // const newObj = Object.create(protoObj)
// // newObj.name = "anshul"
// // console.log(newObj)

// // const parent = {x:1}
// // const child = Object.create(parent)
// // child.y = 2
// // console.log(child.x)

// // Inheritance 
// function Person(name){
//     this.name = name
// }
// Person.prototype.greet = function(){
//     return `Hello ${this.name}`
// }

// const john = new Person("name")
// console.log(john)

// function greet(greeti)


// call , apply , bind

function greet(greeting , puntuation){
    console.log(`${greeting} , ${this.name}${puntuation}`)
}
const person = {name:"Alice"}
greet.call(person , "Hello" , "!")
greet.apply(person , ["Hi" , "!"])


// bind methods creates a new function and returns a new funtion

const greetAlice = greet.bind(person)
greetAlice("Hey" , ".")
