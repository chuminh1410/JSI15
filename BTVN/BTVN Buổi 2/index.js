// Task 1
arr1 = [1,2,4,5,6]; 
arr2 = [1,6,8,9,0];
console.log(arr1);
console.log(arr2);
const fil = arr1.filter(value => arr2.includes(value));
console.log(fil);

// Task 2
arr = [1,54,6,7];
const newArr = arr.map(arr => {
    return arr + 5;
});
console.log(newArr);

// Task 3
m = [1,2,4,5,6,7]; 
n = [3,5,675,8,96];

grouped_array = n.slice(0,5)
console.log(grouped_array)