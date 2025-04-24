

function fatorial(n){

    if(n<0){
        console.log("factorial not defined for negative numbers")

    }
    let result = 1
    for(let i = 2 ; i<=n ; i++){
        result*=i
    }
    return result
}

console.log(fatorial(5))


// check palindrome

let str = "naman"
let bag = ""
for(let i = str.length-1 ; i>=0; i--){
   bag+=str[i]
}

if(str === bag){
    console.log("Yes it's a palindrome")
}else{
    console.log("Yes it is not a palindrome")
}


function isPrime(n){
    if(n<=1) return false
    for(let i = 2 ; i<n; i++){
        if(n%i===0){
            return false
        }
    }return true

}
if(isPrime(10)){
    console.log("prime number")
}else{
    console.log("Not prime number")
}