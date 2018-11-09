//extends, super
//JS actually has a set class

//extends is the JS way of saying hey, i want to start with the base class and add to it
//super - when we are writing that class we can refer to the original class using this keyword


// We can also extend the native implementation of Set if we wanted to do somehting
// like log on addition or create new methods
// super used to reference methods on original
class MySet extends Set {
  constructor(arr) {
    super(arr)  // running original sets constructor
    this.originalArray = arr  // this.originalArray is the array that passed in
  }

  add(val) {
    super.add(val)  // super refers to the class we are extending
    console.log('added ${val} to the set!')
  }

  toArray() {  // basically saying, hey I actually want the array, so we can return Array.from(this)
    return Array.from(this)
  }

  reset() {
    return new MySet(this.originalArray)
  }
}
