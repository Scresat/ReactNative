function makeFunctionArray() {
  const arr = []

  for (var i = 0; i < 5; i++) {
    arr.push(function () { console.log(i)})
  }

  //console.log(i)  prints i
  //so 5 gets wrapped in closure so when we invoke at line 15, it prints out 5

  return arr
}

const functionArr = makeFunctionArray()
//console.log(i) //undefined error
functionArr[0]() //expected to print 0

// functionArr[0] contains function() {console.log(i)} and i after returning from function gets value 5 due to closure

//