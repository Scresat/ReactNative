//ES6 arrow notation

//ES6 arrow notation will bind 'this' to be whatever this is at the time that we declare the function, rather then at the time we invoke the function

const person = {
  name : 'satyam',
  greet : () => { console.log('hello ' + this.name)},
}

// on line 7, when we write this.name, it is undefined
// so ES6 the arrow notation will actually bind this to the whatever the value is at the time of writing
person.greet
