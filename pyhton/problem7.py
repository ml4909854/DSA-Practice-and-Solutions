# # if you want to hanle a matrix 
# Read the number of test cases, T.
# For each test case:
# Read the size of the square matrix N (the matrix will be N x N).
# Read the N x N matrix (a 2D list).
# Perform the required operation (e.g., add 1 to each element of the matrix).
# Print the modified matrix.

# step 1 : read the number of test cases
T = int(input())
for _ in range(T):
    # read the size of the sqaure matrix
    N = int(input())  # This is the size of the NXN matrix
    # step 3 : Read the matrix
    matrix = [list(map(int , input().split())) for _ in range(N)]
    # Add 1 to each element inthe matrix 
    for i in range(N):
        for j in range(N):
            matrix[i][j] +=1
    
    # step4 print the modified matrix
    for row in matrix:
        print(row)