
# The first line contains N the size of the array
# The next line contains N space separated integers, denoting the elements of the array

N = int(input())

arr = list(map(int , input().split()))

result = [X+1 for X in arr]
print(result)