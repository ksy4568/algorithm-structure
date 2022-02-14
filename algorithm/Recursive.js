
function factorial(n) {
  if(n > 1) return n * factorial(n - 1);
  else return n;
}

function factorial2(n) {
  if(n <= 1) return n;

  return n * factorial2(n - 1);
}

for(let i = 0; i < 10; i++) {
  console.log(factorial(i) === factorial2(i))
}