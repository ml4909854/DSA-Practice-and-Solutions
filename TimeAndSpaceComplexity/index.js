// 1. Simple loop
for (let i = 0; i < n; i++) {
  console.log(i);
}
// Time: O(n)
// Space: O(1)


// 2. Nested loop
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    console.log(i, j);
  }
}
// Time: O(n^2)
// Space: O(1)


// 3. Half inner loop
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n / 2; j++) {
    console.log(i, j);
  }
}
// Time: O(n^2)
// Space: O(1)


// 4. Loop with step of 2
for (let i = 0; i < n; i += 2) {
  console.log(i);
}
// Time: O(n)
// Space: O(1)


// 5. Triangular loop
for (let i = 0; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    console.log("*");
  }
}
// Time: O(n^2)
// Space: O(1)


// 6. Reverse loop
for (let i = n; i > 0; i--) {
  console.log(i);
}
// Time: O(n)
// Space: O(1)


// 7. Loop with fixed inner loop (constant 100)
for (let i = 0; i < n; i++) {
  for (let j = 0; j < 100; j++) {
    console.log(i, j);
  }
}
// Time: O(n)
// Space: O(1)


// 8. Logarithmic loop
for (let i = 1; i < n; i *= 2) {
  console.log(i);
}
// Time: O(log n)
// Space: O(1)


// 9. Two logarithmic loops (not nested)
for (let i = 1; i < n; i *= 2) {
  console.log(i);
}
for (let j = 1; j < n; j *= 2) {
  console.log(j);
}
// Time: O(log n)
// Space: O(1)


// 10. Nested loop with inner loop doubling
for (let i = 0; i < n; i++) {
  for (let j = 1; j < n; j *= 2) {
    console.log(i, j);
  }
}
// Time: O(n log n)
// Space: O(1)


// 11. Loop with recursion
function recursivePrint(n) {
  if (n === 0) return;
  console.log(n);
  recursivePrint(n - 1);
}
// Time: O(n)
// Space: O(n)


// 12. Recursive exponential
function powerSet(n) {
  if (n === 0) return 1;
  return 2 * powerSet(n - 1);
}
// Time: O(n)
// Space: O(n)


// 13. Loop with array usage
let arr = [];
for (let i = 0; i < n; i++) {
  arr.push(i);
}
// Time: O(n)
// Space: O(n)


// 14. 2D Array space usage
let matrix = [];
for (let i = 0; i < n; i++) {
  matrix[i] = [];
  for (let j = 0; j < n; j++) {
    matrix[i][j] = i + j;
  }
}
// Time: O(n^2)
// Space: O(n^2)


// 15. Remove Duplicates - Two Pointer
function remove_duplicates(nums) {
  if (nums.length === 0) return 0;
  let slow = 0;
  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }
  return slow + 1;
}
// Time: O(n)
// Space: O(1)


// 16. Two Sum - Two Pointer with Sorting
function two_sum(arr, target) {
  arr.sort((a, b) => a - b);
  let left = 0;
  let right = arr.length - 1;
  let pairs = [];
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === target) {
      pairs.push([arr[left], arr[right]]);
      left++;
      right--;
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return pairs;
}
// Time: O(n log n) due to sorting + O(n) for two-pointer scan
// Space: O(n) for storing pairs


// 17. Longest Substring Without Repeating Characters
function longest_substring(s) {
  let max_len = 0;
  let start = 0;
  let seen = {};
  for (let end = 0; end < s.length; end++) {
    if (seen[s[end]] !== undefined) {
      start = Math.max(start, seen[s[end]] + 1);
    }
    seen[s[end]] = end;
    max_len = Math.max(max_len, end - start + 1);
  }
  return max_len;
}
// Time: O(n)
// Space: O(k), where k = number of unique characters (at most O(n))
