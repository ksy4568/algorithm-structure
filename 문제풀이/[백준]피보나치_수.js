// 피보나치 수는 전형적인 재귀함수 문제이다.
// 규칙성을 파악해보면 num으로 주어진 수는 (num - 1) + (num - 2)의 수이다.
// num - 1과 num - 2는 결국 num - 1의 (num - 1) + (num - 2)이므로 계속 내려가면 0과 1이 나온다)
// 0과 1을 end조건으로 걸고 recursive함수의 인자를 각각 -1, -2로 할당한다.
// 하지만 이 문제는 정답은 맞을지언정 백준에서 시간초과로 인한 오답을 출력하게 된다.
// 하나의 num당 재귀의 맨 마지막인 0과 1까지 도달하기 때문에 시간복잡도는 O(2^n)이 되기 때문이다.

function recursive(num) {
  if(num === 0) {
    return 0;
  } else if(num === 1) {
    return 1;
  }
  
  return recursive(num - 1) + recursive(num - 2);
}

recursive(10)

// 그래서 이런 방식으로 푼다.
// 아래의 방식은 while문 하나이기 때문에 O(N)의 시간복잡도를 가지고 있다.
function fibonacci(n) {
  let a = 0;
  let b = 1;

  while(n > 0) {
    let prevA = a;

    a = b;
    b = prevA + b;
    n -= 1;
  }

  return a;
}

fibonacci(10);