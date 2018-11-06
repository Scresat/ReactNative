thisIsHoisted()
//thisIsNotHoisted() ReferenceError not defined
//thisIsNotHoisted2() ReferenceError not defined
//thisIsHoisted2()  TypeError

console.log(newVar)  //return undefined unlike error in case of const

var newVar = 42

//This is called hoisting
//which means it takes a definition and hoists it to the top of the file
//functions declarations are hoisted, but not lexically scoped initializations but their declarations are hoisted
//declaration of the creation of an empty variable are hoisted
//functions definitions are hoisted as well
//const are not hoisted
//declarations of var are hoisted

function thisIsHoisted() {
  console.log('this is a function declared at the bottom of the file')
}

//above does not work in other cases

const thisIsNotHoisted = function() {  
  console.log('should this be hoisted?')
}//anonymous function (without any name) and assigned with a const

let thisIsNotHoisted2 = function() {  
  console.log('should this be hoisted?')
}//anonymous function (without any name) and assigned with a const

var thisIsHoisted2 = function() {  
  console.log('should this be hoisted?')
}//anonymous function (without any name) and assigned with a const

thisIsNotHoisted()
thisIsNotHoisted2()
thisIsHoisted2()

//thisIsHoisted function made for char gave TypeError because only var declarations are hoisted
//for const and char nothing is hoisted hence ReferenceError undefined
//after assignment all three functions works well
//So on line thisIsHoisted2 exists. It is just equal to undefined so it's function can't be invoked

//This happend because JavaScript Engine

//So is hoisting feature or a bug -- opinion based
//it's not bug it's a feature ¯\_(ツ)_/¯