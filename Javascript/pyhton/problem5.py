# Multiple Test cases, such that each test case contains a sentence
# Input Description
# The rst line of the test case contains T , the number of test case
# The next T lines contain a sentence each
# Output Description
# For each test case, print the sentence on a new line, as shown in the sample test case
# Sample Input 1 Copy
# 2
# my name is ankush
# my name is rutwik
# Sample Output 1 Copy
# my name is ankush
# my name is rutwik

# Step 1: Read the number of test cases
T = int(input())

# Step 2: Read and print each sentence for each test case
for _ in range(T):
    sentence = input()
    print(sentence)
