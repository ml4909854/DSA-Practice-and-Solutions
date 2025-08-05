function problem1() {
  function print(commands) {
    let stack = []; // create a empty stack !
    for (let i = 0; i < commands.length; i++) {
      console.log(commands[i]);
      // means in the 0 index the operations is given thats
      // why we are going to take commansa[o] beacsause On thtat
      // index the commads is given

      if (commands[0] === 1) {
        stack.push(commands[1]); // means added a next elements
      } else if (commands[0] === 2) {
        if (stack.length === 0) {
          console.log("Empty!"); // if stack is emptu we cannot pop the element
        } else {
          stack.pop(); // if condition mataches two means we are pop the elements
        }
      } else if (commands[0] === 3) {
        console.log(stack[stack.length - 1]); // means return the top most element of the stack
      }
    }
  }

  function runProgram(input) {
    // console.log(input)
    // what is the  question is given according to you
    // 1. is theser means push x to the stack
    // when 2 is pop thel element from the top  of the stack
    // when the stack is empu do nothing
    // 3 print the top element of the

    input = input.trim().split("\n");
    let size = +input[0];
    // let finds the commands first
    for (let i = 1; i < size; i++) {
      let commands = input[i].trim().split(" ").map(Number);
      // Now we get all of the commands and out output of the question
      // we get already.
      print(commands);
    }
  }
  if (process.env.USER === "") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      process.exit(0);
    });
  }
}

function problem2() {
  let queue = [];
  function print(commands) {
    // each time fuction is created that why the que is empty again and again
    if (commands[0] === "E") {
      // add the element in the front of the array
      // let the add the element in the last of the array
      // because in the quque evry person who want to register
      // a ticket iis is rn afater by the line
      queue.push(Number(commands[1]));
    } else if (commands[0] === "D") {
      if (queue.length === 0) {
        console.log("Empty");
      } else {
        console.log(queue.shift()); // first according
        // to me 2 is removed then 3 is removed// removes first element in the array
      }
    }
  }

  function runProgram(input) {
    input = input.trim().split("\n");
    let size = +input[0];
    for (let i = 1; i <= size; i++) {
      let commands = input[i].trim().split(" ");
      print(commands);
    }
  }
  if (process.env.USER === "") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      process.exit(0);
    });
  }
}

function problem3(str) {
  // remove adjacent duplicates means You are given a string s consisting of lowercase English letters. A duplicate removal
  // consists of choosing two adjacent and equal letters and removing them.
  // We repeatedly make duplicate removals on s until we no longer can.
  // Print the nal string after all such duplicate removals have been made. It can be proven
  // that the answer is unique
  // 1.  step we have to decalre our stack in the form of the array
  let stack = [];

  // 2. we have to run the loop on the string

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    // first step we have to push the element into the stack
    if (stack.length > 0 && stack[stack.length - 1] === char) {
      // pop the top element
      stack.pop();
      // Now our we drun run these code and see what happen in the code
      // str = "abbaca"
      // when i = 0 ; char = str[i] ==> means char = "a"
      // so in the first interation stack is empty because there is no char inside the element
      // so if loop is falied because stack.length === 0  , stack[stack.length-1] means it is a top level element on the stak
      // suppose our stack is [1 ,2 ,3 ,4] == four is the top element
      // so there is no element is present in the stack obiousely there is no top level element.
      // stack[stack.length -1] = stack[0-1] = stack[-1] loop failes
      // if(0>0 )
      // loop goes on a else conditon
      //stack = []
      // when i = 1 ; char = str[i] ; char = b is the char
      // goest into the if loop if(stack.length>0 && stack[stack.lenght-1] === char)
      // so recently when i = 0 our stack = [a] and stack.length= 1 so top element is a
      // stack[stack.lenght-1 ] = stack[1-1] = stack[0] means a is the top char of ur stack
      // if(1>0 && "a" === "b") char = b loops failes it go to the else condition
      // when i = 2 our stack looks = ["a" , "b"] stack.lenght = 2
      //  let str[i] = str[2] ; char = b
      //    if(2>0  && our top level element is now b === and our char is alosob b)
      // loops are true
      // the top char is popped into the stack
      // let stack = [a , b] , now element remove stack looks like = [a]

      // when  i = 3 ; now stack = [a] now stack.lenght = 1
      // char = str[i] ; char = [str[3]] ; char = a
      // and our top level element in our stack is [a]
      // 1>0 its true and a === a both the condition are true means
      // char popped out from the stack n
      // Now stack = [a] , after popping = stack[] stack is empyt
      // when i = 4 our stack.elnght = 0 because stack is empty now and our char  = c
      // if(0>0 and there is no char === char)
      // loops berak noone element is popped from the stack
      // whebn i = 5 stack.lenght = 1 and  ;str[i] = star[5]  means our char = a
      // if(1>0 it true and top char = "c" === and our char = a)
      // means loops break char is pushed into the stakc
    } else {
      //
      // when i = 0 what is our char
      // str [i] = char = char = a
      // a is pussed on the stack
      // when i = 1 what is our char
      // str[i] == char = char = b
      // b is pushed on the stack
      // when i  = 2 if condition is true top element popped from the stack
      // when i = 3 if conditon is true char is popped our
      // when i = 4 if condtion is false char is added into a stack
      // when i = 5 if condition is falce char is added into a stack

      stack.push(char);
      // when i = 0 our stack looks; stack = ["a"] = stack.lenghth = 1
      // when i = 1 our stack looks; stack = ["a" , "b"] = stack.length = 2
      // when i = 2 our stack looks; stack = ["a"]  = stack.length = 1
      // when i = 3 our stack looks; stack = [] = stack.length = 0
      // when i = 4 our stack looks; stack = ["c"] = stack.length = 1
      // when i = 5 our stack looks; stack = ["c" , "a"] = stack.lenght = 2
      // Input = "abbaca"
      // output = ["c" , "a"]
    }
  }
  console.log(stack.join(""));
}
// problem1()
// problem2()
// problem3("abbaca")

=
