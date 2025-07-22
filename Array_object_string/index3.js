

// // waht is the object
// // An object is a collection of key-value pairs> Think of it real- life dictionary or a 
// // student record


// let studen  = {
//     name:"mahesh",
//     age:"22",
//     course:"full stack developement"
// }

// // name is the key and mahesh is the value
// // age is the key and 22 is the value
// // course is the key and full stack is the value

// // why uses of objects and 


// let user = {name :"mahesh" , age:22}
// console.log(Object.keys(user)) // object.keys means which object keys are you want 
// console.log(Object.values(user))
// console.log(Object.entries(user)) // here both key and value are printed

// // copies propertiese fron one object to another

// let obj1  = {a:1}
// let obj2 = {b:2}

// let result = Object.assign(obj1 , obj2)
// console.log(result) // in the reulte a new object created which have 
// // both object properties

// object. freze (obj)
//// /////////;//;//;//;;///'/'/"//"
// prevent modifications 


// create an objecte called car 

let car = {
    brand:"tesla",
    model:"autonomouse",
    year:2922
}

// user object.key to print all keys

let result = Object.keys(car)
console.log(result)


for(let detail in car){
    console.log(detail , car[detail])
}

// loop throug array of object

let arr = [
    {
        name:"mahesh"
    },
    {
        name:"kumar"
    },
    {
        name:"srikant"
    },{
        name:"lodhi"
    }
]

for(let i = 0 ; i< arr.length ; i++){
    console.log(arr[i].name)
}

