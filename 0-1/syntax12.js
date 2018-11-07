//console.log(thisIsAConst) //error interpreter reading now and doesnt yet know what that is


const thisIsAConst = 50

//thisIsAConst++ //TypeError

const constObj = {}
constObj.a = 'a' //Allowed since reference to that object is not changed, we just mutated it

let thisIsALet = 51
//let thisIsALet = 50 not ok
thisIsALet = 50 // ok

var thisIsAVar =  50
thisIsAVar = 52
var thisIsAVar = 51 //Strangly, this is ok

console.log(thisIsAVar)

var thisIsAVar = 'new value' // shadowing - new variable with same variable name which shadows the old one

console.log(thisIsAVar)

thisIsAVar = 'totally new value'

console.log(thisIsAVar)

thisIsAVar = 42

console.log(thisIsAVar)
