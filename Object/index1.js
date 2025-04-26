

// basic object creation

const Book = {
    title:"Ramayan",
    year:"5000",
    author:"Valmiki",
    getSummary:function(){
  return `${this.title} , ${this.year} , ${this.author}`
    }
}
console.log(Book.getSummary())


//  object merging
const obj1 = {a:1 , b:2}
const obj2 = {b:3 , c:4
}

const merged = {...obj1 , ...obj2}
console.log(merged)


// // 
// const person={
//     name:"mahesh",
//     age:22,
//    status:"unemployed"
// }

// for(let key in person){
//     console.log(key , person[key])
// }