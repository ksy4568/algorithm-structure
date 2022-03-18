// 처음에 무지성으로 푼 방법
// 커서의 위치를 기억하는 변수를 두고 위치에 따라 문자를 splice로 add, delete하는 방법
// 시간복잡도 상으로는 O(N)이지만 코드가 복잡하고 비효율적이다. 오로지 for문만 사용...

function question(password){
  let passwordArr = [];
  
  // password 문자열을 배열로 바꿨다.
  // string은 유사배열객체임으로 splice가 적용될 줄 알았는데 지원X => splice method를 가진 array로 변환
  for(let i of password) {
    passwordArr.push(i);
  }
  
  let cursor = 0;
  let answer = [];
  

  // for문을 통해 >일 때는 cursor를 1더하고 <일 때는 -1한다.
  // => 문자열이 나오면 해당하는 cursor를 index처럼 사용하여 splice하기 위해
  for(let i = 0; i < passwordArr.length; i++) {
    switch (passwordArr[i]) {
      case '>':
        if(cursor < answer.length) {
          cursor += 1;
        }
        continue;
      case '<':
        if(cursor) {
          cursor -= 1;  
        }     
        continue;
      case '-':
        answer.splice(cursor - 1, 1);
        cursor -= 1;
        continue;
      default:
        answer.splice(cursor, 0, passwordArr[i]);
        cursor += 1;
    }
	}
  
  // 문자열의 집합체 answer를 join으로 합치고 return;
  return answer.join('');
}


// stack 자료구조를 사용하는 힌트를 얻고 구현한 방법
// 훨씬 가독성도 좋고 간단하다..
function useStack(password) {

  // left와 right stack를 둔다. left, right의 경계는 cursor이다.
  // cursor가 <로 가면 leftStack에 있는 요소를 rightStack에 옮긴다. (반대도 마찬가지)
  // delete면 leftStack 요소를 pop한다.
  let leftStack = [];
  let rightStack = [];
  
  for(let i = 0; i < password.length; i++) {
    switch (password[i]) {
      case '>':
        rightStack.push(leftStack.pop());
        continue;
      case '<':
        leftStack.push(rightStack.pop());
        continue;
      case '-':
        rightStack.pop();
        continue;
      default:
        rightStack.push(password[i]);  	
    }
  }
  
  return rightStack.concat(leftStack).join('');
}

useStack('<<BP<A>>Cd-');
useStack('ThIsIsS3Cr3t');

question('<<BP<A>>Cd-');
question('ThisIsS3Cr3t');

// for문으로 구현이 가능했지만 다양한 자료구조, 알고리즘을 이용하면 훨씬 효율적인 코드를 구현할 수 있다.
// 문제를 풀 때, 어떤 자료구조와 알고리즘을 사용할 수 있을지 파악하는 것이 중요하다고 느꼈다.