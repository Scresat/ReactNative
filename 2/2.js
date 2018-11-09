// Instances have thing attached to them like methods and properties
// classes have static methods
// method is a function that can be invoked on the instances
// static method doesn't cares about a specific instance, but all 

//example
Date.now()   // static method

const d = new Date()

d.toString() // hear we care about a particular instance, hence a method

// properties which are like methods, but rather than being a function they are values
console.log(d.toString())