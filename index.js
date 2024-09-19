function add() {
  return 5 + 2;
}

function receivesAFunction(add) {
  add()
}

function returnsANamedFunction() {
  const sum = () => {5 + 2}
  return sum
}

function returnsAnAnonymousFunction() {
  return function () {
    5 + 2
  }
}