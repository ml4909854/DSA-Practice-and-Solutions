let array = [
    [1 ,2, 3],
    [4, 5 ,6],
    [7 ,8 ,9]
]

let N = array.length

for(let i = N+1; i>0 ; i--){
    let bag = ""
    for(let j = 0 ; j<i; j++){
        bag+="* "
    }
    console.log(bag)
}