//implementing map

function map(arr, fn) {
  const newArr = []

  //forEach loop function - higher order function that allows to pass in a function and it will invoke the function on each of those value
  //unlike map, instead of returning new array of those values it just invokes that function on those values without taking the return of function and putting it in array

  arr.forEach(function(arr) {
    newArr.push(fn(arr))
  })
  return newArr
}

function addOne(num) { return num +  1}

const x = [0, 1, 2, 3]

console.log(map(x, addOne))
console.log(x)