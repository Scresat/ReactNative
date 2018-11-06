//Closures

//behavior whereby functions that refer to variables declared by parent function still exists
//possible because of scoping

function makeFunctionArray() {//creates an array filled with functions and then invokes them
  const arr = [] //declare an empty array

  for (var i = 0; i < 5; i++) {
    arr.push(function() {console.log(i)})
  }

  return arr
}

const arr = makeFunctionArray()

arr[0]()

//whoa
//That is why js programmers hate closures, but is as expected