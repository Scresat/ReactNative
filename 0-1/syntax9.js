 //JS will automaticaly "box" (wrap) primitive values so you have access to methods
  
 //42.toString();   will give error
 const arr = [42];
 const num = 42
 //num.toString()  //"42"
 num.__proto__   // [Number : 0]
 console.log(arr[0] instanceof Number)  //false since is not a typeof Number it's just boxed aroud that number object
 console.log(typeof num)

 //JS is like - Hey I know 42 is a primitive so I am going to wrap it around a box and add prototypes to it
 //i.e.
 // num.__proto__ exists
 // but
 // 42.__proto__ does not

 //string and number literal are not same as String and Number