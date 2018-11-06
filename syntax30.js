//stack - last one on top, topmost to out

function addOne(num) {
  return num + 1
}

function getNum() {
  return addOne(10)
}

function c() {
  console.log(getNum() + getNum())
}

c()

//closures still exists but once out, memory gets erased