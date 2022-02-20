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