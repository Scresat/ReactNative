//Execution stack, Browser APIs, Event loop, Function queue
//APIs are setTimeout, or fetch, or any of these other asynchronous functions which gets handled by browser but not necessarily by javascript itsels

function printOne() {
  console.log('one')
}

function printTwo() {
  console.log('two')
}

function printThree() {
  console.log('three')
}

setTimeout(printOne, 1000) //second argumet is time in ms, here 1 second
setTimeout(printTwo, 0)
printThree()

//when this file gets executed three things happen
//line 16 gets on stack, and it is handled by browser, so it gets tossed over API section with timeout of 1s
//So function queue says I executed that line of code, so I'm done
//next is setTimeout of printTwo and that gets tossed to APIs section with timeout of 0s
//next is printThree which immediately gets tossed to stack and gets executed
//so browser says it's been zero seconds then printTwo gets in the function queue
//The 'event loop' continuously looks for things and finds printTwo in function queue
//then printTwo gets in stack and function queue is cleared
//stack immediately executes the printTwo
//Now it has to wait a long 1000 ms for next thing
//After the wait, printOne gets in function queue
//Event loop says stack is empty but function has queue has something, so it puts printTwo in stack
//function queue gets cleared
//printOne gets executed from stack
//stack is cleared



//functions on the stack gets executed in order - from top to bottom i.e. synchronous
//functions in functions are also synchronous

//but APIs are asynchronous and handled by browser