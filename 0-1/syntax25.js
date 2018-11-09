//First Class Functins - Functions are treated the same way as any other value
// - can be assigned to variables, array values, object values
// - can also be passed as an argument
// - can be returned from functions

//Allows for the creation of higher-order functions
// - either takes one or more functions as arguments or returns a function
// - map(), filter(), reduce() - most famous  high order function
// - map() - operation that can be done to an array, maps any function to every single value in the array, so we get back an array where the values in the array are the result of passing the original array into some function

const x = [0, 1, 2, 3]

function addOne(number) { return number + 1 }
//console.log(addOne(1)) will print 2

console.log(x)

console.log(x.map(addOne))  

console.log(x)

// -filter() high order function function passed in returns true or false and it retains the values that return true and gets rid of false

function isGreaterThatOne(num) { return num > 1}

console.log(x)

console.log(x.filter(isGreaterThatOne))

console.log(x)

// -reduce() takes an array of multiple values and reduce into single value.

function add(x, y) {return x + y}

console.log(x.reduce(add))