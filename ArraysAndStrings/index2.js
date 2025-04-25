

// find the maximaum value//

let findmax = [5 , 2 , 9 , 1]

let max = 0
for(let i = 0 ; i<findmax.length; i++){
    if(findmax[i]>max){
        max = findmax[i]
    }
}

console.log(max)

// remove duplicatses

let remove = [1 ,2 , 2,5 ,5, 3 ,4 ,4]

let orignal = remove.filter((item , index)=>remove.indexOf(item)===index)
console.log(orignal)