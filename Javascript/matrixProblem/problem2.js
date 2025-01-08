function ticTacToe(matrix) {
    let N = matrix.length;
    
    // Check rows for winner
    for (let i = 0; i < N; i++) {
      if (matrix[i][0] === matrix[i][1] && matrix[i][1] === matrix[i][2]) {
        console.log(matrix[i][0]);  // Winner is matrix[i][0]
        return;
      }
    }
    
    // Check columns for winner
    for (let i = 0; i < N; i++) {
      if (matrix[0][i] === matrix[1][i] && matrix[1][i] === matrix[2][i]) {
        console.log(matrix[0][i]);  // Winner is matrix[0][i]
        return;
      }
    }
    
    // Check diagonal (top-left to bottom-right)
    if (matrix[0][0] === matrix[1][1] && matrix[1][1] === matrix[2][2]) {
      console.log(matrix[0][0]);  // Winner is matrix[0][0]
      return;
    }
    
    // Check diagonal (top-right to bottom-left)
    if (matrix[0][2] === matrix[1][1] && matrix[1][1] === matrix[2][0]) {
      console.log(matrix[0][2]);  // Winner is matrix[0][2]
      return;
    }
    
    // If no winner, it's a tie
    console.log("Tie");
  }
  
  // Sample Input
  let matrix = [
    ['x', 'o', 'x'],
    ['o', 'x', 'x'],
    ['o', 'o', 'o']
  ];
  
  ticTacToe(matrix);
  