function test1 () {
  // 피보나치 수열 == 동적계획법
  function fibonacci(num) {
    if(num <= 1) return num;
    
    return fibonacci(num - 1) + fibonacci(num - 2);
  }

  function fibonacci2(num) {
    let cache = [];
    cache[0] = 0;
    cache[1] = 1;

    for(let i = 2; i <= num; i++) {
      cache[i] = cache[i - 1] + cache[i - 2];
    }

    return cache[num]
  }

}

// 백준 2*n 직사각형 채우기 문제
function test2() {
  function question1(n) {
    if(n === 1) return 1;
    if(n === 2) return 2;

    if(n > 2) return question1(n - 2) + question1(n - 1);
  }

  function question2(n) {
    let arr = [];
    arr[0] = 0;
    arr[1] = 1;
    arr[2] = 2;

    for(let i = 3; i < 1001; i++) {
      arr[i] = arr[i - 1] + arr[i - 2];
    }

    return arr[n];
  }
}

// 백준 파도반 수열 문제
function test3() {
  function question(n) {
    if(n <= 3) return 1;
    if(n <= 5) return 2;

    return question(n - 3) + question(n - 2);
  }

  question(2);
  question(6);
  question(12);
}

// 백준 01타일
function test4() {
  function question(n) {
    if(n === 1) return 1;
    if(n === 2) return 2;

    return question(n - 2) + question(n - 1);
  }
}