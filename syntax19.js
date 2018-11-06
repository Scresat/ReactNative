//closure

function makeHelloFunction() {
  const message = 'Hello'

  function sayHello () {
    console.log(message)
  }

  return sayHello
}

const sayHello = makeHelloFunction()
//console.log(message) //error because there is not such thing as message

console.log('typeof message:', typeof message)
console.log(sayHello.toString())

sayHello()
//example of closure
//variable 'message' when sayHello invoked does not exist yet sayHello still has access to message because it was within scope when that function was created
