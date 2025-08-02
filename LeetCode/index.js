

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

// let x = 550
// isPalindrome(x)

var twoSum = function(nums, target) {
    let bag = ""
    for(let i = 0 ; i<nums.length; i++){
        for(let j = i+1 ; j<nums.length-1 ; j++){
            if(nums[i] + nums[j] === target){
            bag += i+ " " +j
               }
        }
    }
    let result = bag.trim().split(" ").map(Number)
    return(result)

};

// let nums = [2 ,7 , 11 , 10]
// let target = 9
// twoSum(nums , target)



var detectCapitalUse = function(word) {
    for(let i = 0 ; i<word.length ; i++){
           let str = "ABCDEFGHIJKLMNOPQRSTUVXYZ"
       let result = word[i] === word[i].toUpperCase()
       if(!result){
        console.log(false)
        break
       }
    }
    console.log(true)
};
let word = "FlaG"
// detectCapitalUse(word)


// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

var romanToInt = function(s) {
    let obj  = {
        I:1,
        II:2,
        III:3,
        IV:4,
        V:5,
        VI:6,
        Vi


    }
};
let str = "III"
// romanToInt(str)


var longestCommonPrefix = function(strs) {
    console.log(strs)
    for(let i =  0 ; i<strs.length ; i++){
        let bag =  ''
      for(let j = 0 ; j<strs[i].length ; j++){

          bag += strs[i][j]
          
      }
      console.log(bag)
    }
};


// Input: strs = ["flower","flow","flight"]
let strs = ["flower","flow","flight"]
longestCommonPrefix(strs)
// Output: "fl"
