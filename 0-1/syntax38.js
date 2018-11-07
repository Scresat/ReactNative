// promises - you tell someone you are gonna do something eventually

//js has promise object
// - Alleviate 'callback hell' (callback within a callback within a callback .....)
// - Allows to write code that assumes a value is returned within a success function
// - Only needs a single error handler

// fetch returns a promise

const url = ''

fetch(url)   //fetch returns a promise, so eventually it's gonna return a url
//we can start to write a function to start handling the response

  .then(function(res) {//takes a callback    
      //handle error? in catch
      return recurse.json()
  })
  .then(function(json) {//takes a callback  
      return ({
        importantData : json.importantData,
      }) 
  })
  .then(function(data) {//takes a callback   
      console.log(data)
  })
  .catch(function(err){
    //handles any error that gets thrown in any of the preceding then statements
  })