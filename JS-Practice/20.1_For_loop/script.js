// for loop contains 3 expressions. Initialisation, condition and final expression.

for (let i = 0; i < 5; i++) {
      console.log(i); // Output: 0, 1, 2, 3, 4
    }

// using lrngth property gor reverse number iteration. 
    for (let i = 5; i > 0; i--) {
      console.log(i); // Output: 5, 4, 3, 2, 1
    }    

// iterating through an Array.
const fruits = ["apple", "banana", "cherry"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// for in loop
const data = {Name: "Yash", age: 28, height : 186, city: "hyd" }
for (let key in data) {
    console.log(key + ":" + data[key]);
}


// Arrow function 
//Arrow function without arguments
const sayHello = () => "Hello, World!";
console.log(sayHello());
// Output will be : Hello World!

// Arrow function with one argument 
const square = x => x * x;
console.log(square(23)); 


