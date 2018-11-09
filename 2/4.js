// constructor

//  Set should maintain a list of unique values and should support add, delete, and inclusion
//  It should also have the ability to get its size

class Set {
  constructor(arr) {
    this.arr = arr
  }
  // when I'm constructed, I expect to have one argument, which is just an array
  // we attach the array to the instance
  // and the only thing I'm going to do when creating this set object is just store an reference to that array
  // in this case, the this keyword is referring to the instance of that object


  // now adding methods
  add(val) {
    if (!this.has(val)) this.arr.push(val)
  }

  delete(val) {
    this.arr = this.arr.filter(x => x !== val)
  } 

  has(val) {
    return this.arr.includes(val) //return true if key is included, false otherwise 
  }

  //we should be able to get size by doing instanc.size
  //JS has a convenient way
  get size() {
    return this.arr.length
  }
  // which is saying when someboyd tries to get at the value or the property.size, actually run this function
}



const s = new Set([1,2,3,4,5])

//trying to add the samw value shouldn't work
s.add(1)
s.add(1)
s.add(1)

console.log('s should have 5 members and actually has : ', s.size)

console.log('s should contain 5:', s.has(5))

s.add(6)
console.log('s should contain 6: ', s.has(6))
console.log('s should have 6 members and actuall has:', s.size)

s.delete(6)
console.log('s should no longer contain 6: ', !s.has(6))
console.log('s should have 5 members and actually has:', s.size)

