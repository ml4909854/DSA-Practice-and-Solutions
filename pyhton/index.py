x = 10
# print(x)


 Taking a string Input

name = input("enter your name : ")
print("Hello , " + name)

taking an interger Input

age  = int(input("enter your age : "))
print("Your age is " , age)


taking a float input
height = float(input("enter your height in numbers : "))
print("your hight is " , height , "meters")

Takind Multiple Inputs

taking a multiple inputs as Integers
x , y ,z = map(int , input("enter a intergers separated by spaces :").split())
print("sum:" , x+y+z)


taking a list as input
to takse a list of numbers you can use spilit() and map()

numbers = list(map(int , input("enter a number : ").split()))
print(numbers)

Taking a boolean input
for bolean input you can comepare the input string
is_happy = input("Are you happy? (yes/no)").lower() == "yes"
print("Your answer" , is_happy)

name = input("Enter your name (default: John): ") or "John"
print("Hello,", name)



jump = 10
while(jump>0):
    print("Hello World !")
    jump = jump-5



for i in range(10):
    if(i==4):
        continue
    print(i)
bag = ""
for i in range(2):
    for j in range(3):
       bag = bag + str(j)  # Convert j to string before concatenating
       print(bag)
