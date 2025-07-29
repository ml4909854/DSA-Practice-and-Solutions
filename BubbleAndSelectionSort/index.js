function printByBubbleSort(N, arr) {
  // the lenght is given
  // the array is given
  // Now How to do a array sort
  // using bubble sort methods is which we are swapping
  // neighbour elements.
  for (let i = 0; i < N - 1; i++) {
    let swapped = false;
    // if array already sorted we are using these particular
    // condition
    // next loop runs each time less than i
    // i loop 4 times so j loop runs only three times
    // j loop where to where
    for (let j = 0; j < N - i - 1; j++) {
      // when i == 0  j is also 0 where the j loo[ run
      // j< 5-1-0 ; 4 times j loops runs j<4 times

      if (arr[j] > arr[j + 1]) {
        // swap the elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        // both the arrays are wapeed

        swapped = true;
      }
      // means no swapped array is already sorted
    }
    if (swapped === false) {
      break;
    }
  }
  console.log(arr.join(" ")); /// Now the array is sorted
}

let N = 5;
let arr = [32, 235, 5, 6, 3];

printByBubbleSort(5, [2, 4, 7, 3, 7]);

function selectionSort(N, arr) {
  for (let i = 0; i < N - 1; i++) {
    let minIndex = i;

    // Find the index of the minimum element in the unsorted part
    for (let j = i + 1; j < N; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the smallest element found with the element at i
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  console.log(arr.join(" "));
}

selectionSort(5, [2, 35, 6, 7, 8]);



function print(size , k , arr){
     // solve these question using bubble sort
    for(let i = 0 ; i<size ; i++){
       for(let j = 0 ; j<size-i-1 ; j++){
         let modA = arr[j]%k
         let modB = arr[j+1]%k
         
         if(modA > modB){
           [arr[j] , arr[j+1]] = [arr[j+1] , arr[j]]
         }
         
       }
    } 
    console.log(arr.join(" "))
    
}


function runProgram(input) {
  // Write code here
  input = input.trim().split("\n")
  let sizeAndK = input[0].trim().split(" ").map(Number)
  let size = sizeAndK[0]
  let k = sizeAndK[1]
  let arr = input[1].trim().split(" ").map(Number)
  print(size , k , arr)
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
    runProgram(read);
    process.exit(0);
  });
}
