
# Array with multiple cases

T = int(input())
for _ in range(T):
    n = int(input())
    arr = list(map(int , input().split()))
    result = [x+1 for x in arr]
    print(result)



# To handle multiple test cases with arrays where each etst case involves an array of intergers you can follow these stepls 
# reAD THE number of test case T
# for each test casse
# Read the sixe of the array althoug yo can directly read the array withour using the size in many cases
# read the array of integers

# peroflem any required operations (in this case, we just need to print the array for each test case)
# hers is the python code for handling multiple test cases with arrays

# t = int(input()) : Reads the numbers of test cases
# for _ t in range(T) : Loops throught each test case 
# n = int(inptu) : reades the size of the array , althrough it's not necessary for the solution here
# arr list reads the space separated integers as a list of integers
# print(arr) : prints the array elements, separated by spaces