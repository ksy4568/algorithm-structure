// 백준 프린터 큐 문제
// 문제를 파악하는 것이 아직 어색하다. m과 n등 문제에서 실질적으로 구하라고 하는 값에 초점을 맞춰서 읽어야겠다.

// 편의상 문제의 중요도는 arr로 바로 변환하여 구현했다.

function printerQueue(m, n, arr) {
  let docSize = n;
  let queue = [];
  

  // 문제에서 구하고자 하는 답은 특정 index를 가진 값이 몇번째 출력되는지 파악하는 문제
  // 중요도와 함께 처음 index 순서를 기억하기 위해 [중요도, 첫인덱스]의 array를 생성
  for(let i = 0; i < docSize; i++) {
    queue.push([arr[i], i]);
  }
  

  // Javascript에서 array는 참조형 객체이므로, array를 할당하면 그 주솟값과 같은 주솟값의 array를 할당받을 수 있다.
  let findDoc = queue[m];

  // 가장 중요도가 높은 index 순으로 shift된다.
  // => shift가 된다는 것은 곧 인쇄된다는 뜻으로 구하고자 하는 index가 출력할 때까지 +1한다.
  let printCount = 0;


  while(queue.length > 0) {

    // shift가 된 이후에 남은 숫자들 중에 제일 높은 중요도를 가진 수를 갱신하기 위해
    let maxNum = 0;
    for(let i = 0; i < queue.length; i++) {
      if(maxNum < queue[i][0]) {
        maxNum = queue[i][0];
      }  
    }
    
    // 중복되는 중요도가 있을 수 있으므로 중요도를 기준으로 shift진행
    if(maxNum === queue[0][0]) {
      printCount += 1;
      

      // 앞서 선언했던 findDoc과 해당 index가 일치할 때 함수 종료
      // 아니라면 shift 진행
      if(queue[0] === findDoc) {
        return printCount;
      } else {
        queue.shift();
      }

      // 중요도도 낮고 구하고자 하는 index가 아니라면 queue의 제일 뒤로 보낸다.
    } else {
      queue.push(queue.shift());
    }
  }
}

printerQueue(0, 1, [5])
printerQueue(2, 4, [1, 2, 3, 4])
printerQueue(0, 6, [1, 1, 9, 1, 1, 1])