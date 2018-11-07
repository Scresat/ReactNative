//prototypal inheritance - Process by which more complex objects can have methods and properties


const arr = ['value']

//each object stores a reference to its prototype 
//if we have prototype chain where there are bunch of different mehtods of the same name, whichever most tightly bound to the instance have priority
arr.__proto__  //use in browser . prototype of array 
arr.__proto__.__proto__ //prototype of prototype

//if both above contains toString() method, then toString() method on array prototype is more specific than toString() method on object prototype
console.log(arr.length)
console.log(arr.__proto__.length)