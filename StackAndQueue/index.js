/// stack
// A stack is a liner data structure that follows the principle
// lifo // last in first out
// that means the last element added to the stack is the firstOne to be removed

// real life analogy of stack;
// stack of plates in a kittchen
// you place plates one by one on top
// when you need a plate you take the top one first (nt the bootom one)
// Undo freatures in apppes
// bakc button i a browsser
// each visited page is pushed into a stack
// when you hit back, the last visited page is opened.

// Basic stack operations
// 1. push(element) :- Add an element at the top
// let stack = [] // stack is nothing but it is a array
// stack.push(10)
// stack.push(10)
// stack.push(120)
// console.log(stack)

// removes the top element
// let stack = [10 , 20]
// let removed = stack.pop() // removed the element from the stack
// console.log(removed)
// console.log(stack) // remove topmost book from a pile

// peek() or top() see the top element without removing it.
// let stack = [10 , 20]
// console.log(stack[stack.length-1]) // it is the top level element of the stack

// let stack = [
// this is the plate stack empty
// ]
// let len = stack.length === 0
// if(len){
//     console.log("stack is empty!")
// }else{
//     console.log(stack.length)
// }

// 5 size() -> Number of elements in the stack

// let stack = [10 , 20 ,30]
// console.log(stack.length) // this is the size of the stack

// stack Implementaition (using javaScrit Array);
function stackImplementation() {
  let stack = [];
  // push
  stack.push(1);
  stack.push(2);
  console.log(stack);
  // peek
  console.log(stack[stack.length - 1]);

  // pop
  if (stack.length > 0) {
    let removed = stack.pop();
    console.log(removed);
  } else {
    console.log("stack is empty");
  }

  //Ismepty
  console.log(stack.length === 0 ? "Empty" : "Not empty");

  // size
  console.log(stack.length);
}

// stackImplementation()

// lets start 10 very basic problem based on Stack

function problem1() {
  // push 5 number to a stack and pop them one by one . show output each step

  let stack = [];
  stack.push(10);
  stack.push(20);
  stack.push(30);
  stack.push(40);
  stack.push(50);
  stack.push(60);

  console.log(stack); // we can see that last element added at the at when I popped it Ite removes first int hese code
  let removed = "";
  for (let i = stack.length - 1; i >= 0; i--) {
    removed += stack.pop() + " ";
    console.log(removed);
  }
  console.log(removed);

  // when the push item 10 is pussed in the array
  //[10]
  // again 20 push [10 , 20]
  // again 30 push [10 , 20 , 30]
  // again 40 push [10 , 20 , 30  , 40 ]
  // again 50 push [10 , 20 , 30, 40 ,50]

  // when i pop the last element with removed
  // first 50 is popped out the stack will be [10 , 20  , 30 , 40]
  // then 40 is popped out the stack will be [10 , 20 , 30]
  // then 30 is popped out the stack will be [10 , 20]
  // then 20 will be popped out the stack will be [10 , 20]
}

function problem2() {
  // push 3 elements to a stack and print the top element using peek
  // without removing it
  let stack = [];
  stack.push(100);
  stack.push(200);
  stack.push(300);

  let peek = stack[stack.length - 1];
  console.log(peek); // Here is the top element will be print
}

function problem3() {
  // create a  emptystack, check if it's a empty, push an element and check again
  let stack = [];
  let isEmpty = stack.length === 0;

  console.log("stack is empty", stack.length === 0);
  stack.push(500);
  console.log("Is stack empty now?", stack.length === 0);
}

function problem4() {
  // push 4 elements into a tack and findout how many elements are there using the size operation

  let stack = [];
  stack.push(100);
  stack.push(100);
  stack.push(100);
  stack.push(100);

  let size = stack.length;
  console.log(size);
}

function problem5() {
  // print stack from Top to bottom
  let stack = [];
  stack.push(100);
  stack.push(200);
  stack.push(300);
  stack.push(400);

  for (let i = stack.length - 1; i >= 0; i--) {
    console.log(stack[i]);

    // stack means those elements are added last. that are
    // pooped out and print first
  }
}

function problem6(arr) {
  // reverse an array using a stack
  // here i am going to reverse a array using a stack 
  // we have to push the last item in to the stack first
  let stack = []
  for(let i = 0; i<arr.length ; i++){
    stack.push(arr[i]) // means it added first 2 , 
    // then added 2 , 4, 
    // then next iteration 1 , 4, 6 
    // then next iteration 2, 4, 5, 6 , 8
    // push all the elements into the stack
  }

  // pop all the element out of the stack
  let removed = []
for(let i = stack.length-1 ; i>=0 ;i--){
     removed.push(stack.pop())
}  
console.log(removed)
}


function problem7(){
    // remove all the elements from the stack 

    let stack = []
    // push some elements into the satck
    stack.push(100)
    stack.push(200)
    stack.push(300)
    stack.push(400)

    console.log(stack)
    // now remove the element one by one
  
    while(stack.length >0){
        let removed = stack.pop()
        console.log("removed" , removed)
    }
    
}


function problem8(){
     /// check the top elements after some push and the pop
     let stack = []
     stack.push(1)
     stack.push(2)
     stack.push(3)
     stack.push(4)

     // pop the elemts 
     stack.pop()
     stack.pop()

     // Now get the top elemean or peak elements

     let peek = stack[stack.length-1]
     console.log(peek) // Now 2 is the peek element of the code

}


function problem9(){
    // problem statements 
    // push 5 elements into a stack and print all the elements afro top to bottom without removing them (stack should reamin unchanged)

    let stack = []
    stack.push(1)
    stack.push(2)
    stack.push(3)
    stack.push(4)

    for(let i = stack.length-1 ; i>=0 ; i--){
        console.log(stack[i])
    }
}

function checkPalindromUsingStack(){
    let str = "MaDam"
    // check palindrom by using a stack
    let stack = []
    // now run the loop on the stack
    for(let i = 0 ; i<str.length ; i++){
        stack.push(str[i].toLowerCase())
    }
    // Now push all the elemenst into the stack
    // console.log(stack.length)
    // Now pop the elemenst of the stack
    let removed = ""
    while(stack.length>0){
        removed += stack.pop()
    }
    // console.log(removed) // Now we are try to find the stack using string

    if(removed === str.toLowerCase()){
        console.log("palindrome!")

    }else{
        console.log("not palindrome!")
    }
}


function problem10(arr){
    // given an array, for each element, find the next greater element to its right 
    // if no greater elemenst exits return -1
    console.log(arr)
    // we have to next next element is grater or not the first element
    let stack  = []
    let result = new Array(arr.length).fill(-1)
    console.log(result)
    // Now wer are fille the array with -1
    // now lets run the loop on each element of the array
    for(let i = 0 ; i<arr.length ; i++){
        console.log(arr[i])
        
    }
}
// problem1()
// problem2()
// problem3()
// problem4()
// problem5()
// problem6([2,4,6,8,10]);
// problem7()
// problem8()
// problem9()
// checkPalindromUsingStack()
problem10([4 , 5, 2 , 25])

