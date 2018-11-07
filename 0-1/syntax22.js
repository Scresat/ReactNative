//Immediately invoke function expression (fe) - a funtion expression that gets invoked immediately 
//creates closure

//nameless function that gets invoked immediately 

//benefit - doesn't add to or modify the global object since they are immediately invoked

//goal - to hav a sayHello() function with variable message which prints out message with closure

const sayHello = (function() { //anonymous which just gets invoked immediately
  var message = 'hello'

  function sayHello() {
    console.log(message)
  }

  return sayHello
})()

console.log('typeof message:', typeof message)
console.log(sayHello.toString())

sayHello()

