
# Using input() for single  line input
# variable = input("enter your name : ")
# print( "Hello" , variable)

# converting Input to specific data types 
# by default input() return a string. TO convert in to a specifi c use typecasting funtions like int()
# float() etc/

# age = int(input("Enter your age : "))
# print("mahesh0" , age)


# taking multiple input fields in a single line
# use input().split()  to take multiple inputs separated by spaces . The split()
# funtion splits the string into a list

# x , y = int(input("enter two numbers separated by space: ").split())
# print(f"x = {x}, y = {y}")

# converting inputs to integers
# x , y  = map(int , input().split())
# print(x+y)

numbers = list(map(int , input("enter a number : ").split()))
print(numbers)