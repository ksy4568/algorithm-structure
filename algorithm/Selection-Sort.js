let test = [1, 7, 2, 62, 24, 12, 5, 4, 9, 21];

for(let i = 0; i < test.length - 1; i++) {
  let pointIdx = i;

  for(let z = i; z < test.length; z++) {
    test[pointIdx] > test[z] && (pointIdx = z);
  }

  test[i] > test[pointIdx] && ([test[i], test[pointIdx]] = [test[pointIdx], test[i]]);
}

console.log(test);