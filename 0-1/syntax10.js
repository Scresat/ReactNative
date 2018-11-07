const num = 42

console.log(num.toString())

//

Number.prototype.toString = function() { return "100" }

//

const other = 42

console.log(other.toString())

//changing the prototype is very dangerous and not recommended