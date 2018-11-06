const o = {
  a: 'a',
  b: 'b',
  obj: {
    key: 'key',
  },
}

const o2 = o   //call by reference
const o3 = Object.assign({}, o)  //shallow copy just grabbing keys and values of and objects and blindly setting those to other objects

o.a = "new value"  
o2.obj.key = 'neew obj value'  
console.log(o.obj.key)

console.log(o2.a)
console.log(o3.a)

