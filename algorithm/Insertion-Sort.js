let test = [1, 7, 2, 62, 24, 12, 5, 4, 9, 21];

for(let i = 0; i < test.length - 1; i++) {
  for(let z = i + 1; z > 0; z--) {
    if(test[z - 1] > test[z]) {
      [test[z - 1], test[z]] = [test[z], test[z - 1]];
    } else {
      break;
    }
  }
}

test