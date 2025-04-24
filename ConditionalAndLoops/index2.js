for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);

let table = 5
for (let i = 1; i <= 10; i++) {
    console.log(`5 * ${i} = ${5*i}`)
}


let count = 0
for(let i =1; i<=50; i++){
    if(i%2===0){
        count++
    }
}
console.log(count)


let reverse = "hello"
for(let i = reverse.length ; i>=0; i--){
    console.log(reverse[i])
}