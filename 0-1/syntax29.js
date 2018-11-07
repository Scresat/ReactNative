//asyonchronous functions

function printOne() {
  console.log('one')
}

function printTwo() {
  console.log('two')
}

function printThree() {
  console.log('three')
}

setTimeout(printOne, 1000)
setTimeout(printTwo, 0)
printThree()


//prints three then two then one asynchronous