import random
c=0
iterations = input("what the number of interations?")
for number in range(0, int(iterations)):
    x = random.random()
    y = random.random()
    pi = (x * x + y * y)
if pi <= 1:
    c = c + 1
print('pi = ' , (c/float(iterations)*4))