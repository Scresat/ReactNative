//stack overflow

function recurse() {
  console.log('recursion!')
  return recurse()
}

recurse()