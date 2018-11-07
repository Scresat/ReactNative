function addOne(num) {
  throw new Error('oh no, a error!')
}

function getNum() {
  return addOne(10)
}

function c() {
  console.log(getNum() + getNum())
}

c()

//we can see the stack history in node cli