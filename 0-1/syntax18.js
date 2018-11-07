//Closures - Functions that refer to variables declared by parent function still have access to those variables
//Possible because of javascript scoping
//Closure - a function that has acess to some variables that might have already left scope

function makeFunctionArray() {
  const arr = []

  for (var i = 0; i < 5; i++) {
    arr.push(function () { console.log(i)})
  }

  return arr
}

const functionArr = makeFunctionArray()

functionArr[0]() //expected to print 0

