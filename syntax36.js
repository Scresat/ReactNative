function doSomethingAsync(callback) {
  setTimeout(function() {callback(1)}, 1000)   
}

doSomethingAsync(console.log)  //prints 1 after 1 seconds