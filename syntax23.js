// we want to have class counter and want to keep track of some number that is incrementing and we can get that number
// also that number shouldn't be accessible globally

const counter = (function() {
  let count = 0

  return { //object
    inc: function() { count = count + 1 }, //return if incremented
    get: function() { console.log(count) }, //return if get
  }
})()

counter.get() 
counter.inc()
counter.get()
counter.inc()

//count varialbe is not accessible in the global scope

//function expression to solve closure problems as seen earlier