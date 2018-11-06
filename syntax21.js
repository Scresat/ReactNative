//scope of let - until the end of code block so i ends at line 7
function makeFunctionArray() {
  const arr = []

  for (let i = 0; i < 5; i++) {
    arr.push(function () { console.log(i)})
  }

  //console.log(i) //ReferenceError i is not defined

  return arr
}

const functionArr = makeFunctionArray()

functionArr[0]() 

//closure works as expected here because of difference in scoping
//scope of var is until function end and for const and let it is until next } is encountered
