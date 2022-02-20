function test1() {
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
}

function test2 () {
  // 기존에 매개변수로 받는 값이 가변적인 성격을 띄고 있어서 기존 매개 변수를 기억할 수 있는 limit을 설정해주었다.
  let init = 1;

  function recursive1(init, limit) {
    let initNum = init;
    if(init <= limit) {
      return initNum * recursive1(initNum + 1, limit)
    }
    
    return 1
  }

  recursive1(1, 5)

  // 2번
  function recursive2(num) {
    if(num <= 1) {
      return num;
    }
    return num * recursive2(num - 1);
  }

  recursive2(3)
}

function test3() {

  let arr = [4, 11, 3, 2, 13, 5, 6, 7, 49, 32];

  function recursive1(arr) {
    if(arr.length <= 1) {
      return arr[0];
    }

    return arr[0] + recursive1(arr.slice(1))
  }


  function recursive2(str) {
    if(str.length <= 1) {
      return true
    }
    
    if(str[0] === str[str.length - 1]) {
      return recursive2(str.slice(1, str.length - 1));
    } else {
      return false;
    }
  }
  
  recursive2('level')
  recursive2('Dave')
  recursive2('기러기')
}

function test4() {
  // n이 1이될때까지 n이 홀수면 3 * n + 1 짝수면 n / 2를 진행하시오

  function recursive(num) {
    console.log(num)
    if(num === 1) return;
    if(num % 2 === 1) return recursive((num * 3) + 1);
    else if(num % 2 === 0) return recursive(num / 2);
  }
  
  recursive(3)
}