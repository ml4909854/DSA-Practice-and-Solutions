let reverse = "hello";
let bag = [];
for (let i = reverse.length - 1; i >= 0; i--) {
  bag.push(reverse[i]);
}
console.log(bag.join(""));

let palindrome = "A man, a plan, a canal: Panama";
let check = "";
for (let i = palindrome.length - 1; i >= 0; i--) {
  check += palindrome[i];
}
console.log(check);
if (palindrome === check) {
  console.log("yes");
} else {
  console.log("no");
}

function longestWord(str) {
  let split = str.split(" ");

  let longest = "";
  for (let i = 0; i < split.length; i++) {
    if (split[i].length > longest.length) {
      longest = split[i];
    }
  }
  console.log(longest);
}
longestWord("the quick brown forx jumps");

function titlecase(word) {
  let words = word.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  console.log(words.join(" "))
}
titlecase("hello world");
