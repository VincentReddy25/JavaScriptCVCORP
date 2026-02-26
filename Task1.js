// Find the lenght of the Array without using .lenght

var arr1 = [123, "hello", "bye", false, 733.2, 543.8, true]
var flag = true
var count = 0
while (flag) {
    if (arr1[count] == undefined) {
        flag = false
        break;
    }
    count++
}
console.log(count);

// Sort the Array
var arr2 = [0, 1, -34, -1234, 1, 34, 523.5, 74.2]
for (let j = 0; j < arr2.length; j++) {
    for (let index = 0; index < arr2.length; index++) {
        if (arr2[index] >= arr2[index + 1]) {
            [arr2[index], arr2[index + 1]] = [arr2[index + 1], arr2[index]]
        }
    }
}
console.log(arr2);

// Find the user-Input Element
var arr3 = [123, "hello", "bye", false, 733.2, 543.8, true]
var userInput = "bye"
var isFound = false
for (let index = 0; index < arr3.length; index++) {
    if(arr3[index] == userInput) {
        isFound = true
        break;
    }
}
if (isFound) console.log("Found");
else console.log("Not Found");


// Find the sum of all numbers in the given Array
var arr4 = [123, "hello", "bye", false, 733.2, 543.8, true]
var sum = 0;

for (let index = 0; index < arr4.length; index++) {
    if (typeof arr4[index] == "number") sum += arr4[index]
}
console.log(sum);
