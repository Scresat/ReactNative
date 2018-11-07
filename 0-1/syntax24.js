function makeFunctionArray() 
{
  const arr = []

  for (var i = 0; i < 5; i++)
  {
    arr.push((function(x){ //return a function 
      return function() {console.log(x)}
    })(i))
  }
  //above creates an immediately invoked function expression for each array element
  //i is passed and it is taken in as x


  return arr
}

const functionArr = makeFunctionArray()

functionArr[0]()
functionArr[1]()