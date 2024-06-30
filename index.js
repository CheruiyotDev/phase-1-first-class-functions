function receivesAFunction (callback) {
  callback();
}

function returnsANamedFunction() {
  function calculation() {
  }
  return calculation;
}

function returnsAnAnonymousFunction() {
  return function() {
  };
  
}

