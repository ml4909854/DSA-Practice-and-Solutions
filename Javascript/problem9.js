//
// substrings
// count all the substrings of a string

// input = "abc"
// ountpur = 6

function countSubstring(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      console.log(s.slice(i, j + 1));
      count++;
    }
  }
  console.log(count);
}
// countSubstring("abc")

// find the sum of all subarray elements

function sumOfSubarrays(arr) {
  let totalSum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      const subarray = arr.slice(i, j + 1); // Generate subarray
      const subarraySum = subarray.reduce((sum, num) => sum + num, 0);
      totalSum += subarraySum;
    }
  }
  console.log(totalSum)
}
let arr = [1, 2, 3];
sumOfSubarrays(arr);
