let test = [1, 5, 3, 7, 4, 2, 8, 9, 34, 20];
let length = test.length;
let countChanged = 0;
let isChanged = false;

while(length !== 0) {
  for(let i = 0; i < length - 1; i++) {
    if(test[i] > test[i + 1]) {
      [test[i], test[i + 1]] = [test[i + 1], test[i]];
      countChanged += 1;
    }
  }
  
  if(countChanged === 0) {
    break;
  }
  
  countChanged = 0;
  length -= 1;
}

console.log(test);