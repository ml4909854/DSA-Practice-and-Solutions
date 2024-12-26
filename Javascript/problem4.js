
      let n = 5;
for (let i = 1; i <= n; i++) {
  let bag = ""; // Initialize an empty string for each row

  // Add spaces to bag
  for (let j = 1; j <= n - i; j++) {
    bag += "  "; 
  }


  for (let j = 1; j <= 2 * i - 1; j++) {
    bag += "* "; // Add "* " for the stars
  }

  console.log(bag); // Print the complete row
}
