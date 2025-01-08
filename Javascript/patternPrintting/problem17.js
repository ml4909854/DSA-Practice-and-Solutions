let array = [
    [1 ,2, 3],
    [4, 5 ,6],
    [7 ,8 ,9]
]

let N = array.length

for(let i = 0 ; i<N; i++){
    let row = ""
    for(let j = N-1 ; j>=0 ; j--){
        row+=array[j][i]
    }
    console.log(row)
}