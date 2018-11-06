// When I ask someone to go somewhere with me and they say wait 5 hours
// Then I just don't sit and wait for 5 hours to pass
// I do other stuff and when 5 hours are done I say 'oh my friend is ready'

// Callsbacks
// - Control flow with asynchronous calls
// - Execute function once asynchronous call returns value
// - - program doesn't have to halt and wait for value

function doSomething(callback) {
  callback(1)  //callback must be something if it is getting invoked
}
// doSomething is basically higher order function whih takes as an argument one function then invokes it with 1
doSomething(console.log) //expected is console.log(1)

