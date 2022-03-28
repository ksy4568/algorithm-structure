// 피보나치 수는 전형적인 재귀함수 문제이다.
// 규칙성을 파악해보면 num으로 주어진 수는 (num - 1) + (num - 2)의 수이다.
// num - 1과 num - 2는 결국 num - 1의 (num - 1) + (num - 2)이므로 계속 내려가면 0과 1이 나온다)
// 0과 1을 end조건으로 걸고 recursive함수의 인자를 각각 -1, -2로 할당한다.

function recursive(num) {
  if(num === 0) {
    return 0;
  } else if(num === 1) {
    return 1;
  }
  
  return recursive(num - 1) + recursive(num - 2);
}

recursive(10)