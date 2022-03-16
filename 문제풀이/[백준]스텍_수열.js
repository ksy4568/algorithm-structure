// 백준 스택 수열 문제

// 문제에서는 수열을 array로 받지 않고 정수 하나씩 받지만, 편의상 array로 대체하였다.

// 1. 

function question(n, arr) {
  // arr에 있는 값들 중에 얼마만큼 숫자를 stack에 push했는지 memorize하기 위해 생성
  let limitNum = 0;

  // arr의 index 순서에 맞게 push나 pop할 수 있는 공간
  let stack = [];

  // push나 pop을 할 때 결과적으로 return 해야하는 +, -의 집합 공간
  let answer = [];
  
  // n은 결국 여기서 arr의 length와 같다. arr의 length만큼 arr.index를 limitNum과 비교하여 조건부 처리
  for(let i = 0; i < n; i++) {

    // limitNum이 arr[i]보다 작으면 그만큼 stack에 limitNum과 arr[i] 사이만큼 push를 해야한다.
    if(limitNum < arr[i]) {
      for(let z = limitNum + 1; z <= arr[i]; z++) {
        stack.push(z);
        answer.push('+');
      }

      // push를 마치면 limitNum에 arr[i]까지 숫자가 들어왔다는 것을 기억하기 위해 갱신한다.
      limitNum = arr[i];
      stack.pop();
      answer.push('-');

      // limitNum이 arr[i]보다 크거나 같다면 이미 stack에 arr[i]까지 push되어 있다는 것
    } else {

      // 바로 pop을 했을 때, stack의 끝과 arr[i]값이 같다면 문제없이 pop진행
      if(arr[i] === stack[stack.length - 1]) {
        stack.pop();
        answer.push('-');

        // 하지만 아니라면 수열이 성립이 되지 않으므로 'NO'를 return 한다.
      } else {
        console.log('NO');
        return;
      }
    }
  }
  
  return answer;
}

question(8, [4, 3, 6, 8, 7, 5, 2, 1])
question(5, [1, 2, 5, 3, 4])

