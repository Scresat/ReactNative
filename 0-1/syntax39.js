// this
// Refers to an object that at the cretion of a new execution context (funcition invocation)
// In the global execution context, refers to global object
// If the function is called as a method of an object, 'this' is bound to the object the method is called on
// A method is basically a key where the function is value of the key

const person  = {
  name : 'satyam',
  greet: function() { console.log('hello ' + this.name) },
}

person.greet()

const greet = person.greet

greet()  //prints hello undefined 
//function gets defined on line 14 but gets invoked on line 16
//so value of this is the global object, and name is not actually a key on global object
//so if we try to de-reference that doesn't exist on object, we get undefined 

const friend = {
  name : 'Malcolm',
}

friend.greet = person.greet

friend.greet() 
//greet in this case gets invoked on above line and it is getting invoked on friend object, so this is pointing to friend object


//but for line 16, to point this to object person, we can do it by writing this.name = 'something' before invoking it

this.name = 'satyam'
greet() //it wouldn't work in when we execute a file in node, but it would work when we do it in node REPL or browser console
