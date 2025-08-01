

var isPalindrome = function(x) {
     let str = String(x)
     let bag  = ""
    for(let i = str.length-1 ; i>=0; i--){
          console.log(str[i])
          bag+=str[i]
    }
    bag = Number(bag)
    if(bag === x){
        console.log("It is palindrome")
    }
    else{
        console.log("Not palindrome")
    }
};

let x = 550
isPalindrome(x)