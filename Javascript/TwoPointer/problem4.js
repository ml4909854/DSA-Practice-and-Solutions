function MaxArea(N,A) {
    let max = 0
     for(let i = 0 ; i<N-1 ; i++){
       for(let j =i+1; j<N; j++){
         let area = Math.min(A[i] , A[j])*(j-i)
         max = Math.max(area, max)
       }
     }
     console.log(max)
  }
MaxArea()  