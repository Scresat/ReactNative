//arrays are also stored by reference


const o = {
  a: 'a',
  b: 'b',
  obj: {
    key: 'key',
  },
}


const o3 = Object.assign({}, o) 

console.log(o3.obj.key)

o.obj.key = 'new value'

console.log(o3.obj.key)

o4 = deepCopy(o)

o.obj.key = 'new new new value'
console.log(o.obj.key)
//console.log(o4.obj.key)



// deep copy
function deepCopy(obj){  //copying only objects from one object to other
  // check if vals are objects
  // if so, copy that object {deep copy}
  // else return the value
  const keys = Object.keys(obj)  //array of key values in 'keys'

  const newObject = {}

  for (let i = 0; i < keys.length; i++){
    const key = keys[i]
    if (typeof obj[keys[i]] === 'object'){
      newObject[key] = deepCopy(obj[key])
    }
    else{
      newObject[key] = obj[key]
    }

    return newObject
  }

  const o3 = deep
}