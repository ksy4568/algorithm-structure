let answer = [];

function getNum(str) {
  	let strArr = str.split(" ");
  
  	answer.push(strArr);
}

getNum("21 Junkyu");
getNum("21 Dohyun");
getNum("20 Sunyoung");

// 메소드 사용하기
function test1() {
  let answer2 = answer.sort((a, b) => {
    return Number(a[0]) - Number(b[0]);
  }, 0)

  return answer2;
}

// 버블정렬 알고리즘
// 순서를 보장하는 것이 관건이었다. 무지성 알고리즘은 순서를 보장하지 못했다..(ex 선택정렬..)
function test2() {
  for(let i = 0; i < answer.length; i++) {
    for(let z = 0; z < answer.length - 1; z++) {
      if(Number(answer[z][0] > Number(answer[z + 1][0]))) {
        [answer[z], answer[z + 1]] = [answer[z + 1], answer[z]];
      }
    }
  }
  
  let returnAnswer = answer.map(el => el.join(' '));
  
  return returnAnswer;
}
