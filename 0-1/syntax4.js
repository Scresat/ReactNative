//objects are non primitives types

const o = new Object()

o.firstName = "Satyam"
o.lastName = "Dahiwal"

o.isLearning = true

o.greet = function(){
  console.log('hello world')
}

const o2 = {} //new object
o2['lastname'] = 'Dahiwal'

const key = 'isLearning'
o2[key] = true
o2['greet'] = function(){
  console.log('hello world')
}


const o3 = {
  firstName: 'satyam',
  lastName: 'Dahiwal',
  isLearning: true,
  greet : function(){
    console.log('hello world')
  },
  address: {
    street: 's42',
    number: 22,
  },
}

console.log(o3.address.street)