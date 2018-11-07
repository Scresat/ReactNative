// Setting 'this' manualy
// bind(), cal(), apply()

const person = {
  name :  'satyam', 
  greet : function() { console.log('hello ' + this.name)},
}

const greet = person.greet.bind({name : 'this is a bound object'})  //return a new object

greet() 

//call and apply, rather than returning a new function, call and apply immediately invoke that function

person.greet.call({name : 'this is call'})  //Calls a method of an object, substituting another object for the current object.
person.greet.apply({name : 'this is apply'})