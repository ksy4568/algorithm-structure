// test1은 O(n2) 시간복잡도를 가지고 있는 이중 반복문만 사용한 풀이법
// timelimit이 있다면 통과하지 못할 것이다..

function test1() {
  function question(arr, arr2) {
    let answer = 0;
    
    for(let i = 0; i < arr.length; i++) {
      for(let z = 0; z < arr2.length; z++) {
        if(arr2[i] === arr[z]) {
          answer = 1;
          break;
        }
      }
      
      console.log(answer);
      answer = 0;
    }
  }

  question([4, 1, 5, 2, 3], [1, 3, 7, 9, 5])
}


// test2는 하나의 array를 object 형태로 전환한 이후, arr2의 프로퍼티들이 object로 변환한 arr의 key로 있는지에 대한 여부로 판단
// 시간복잡도 측면으로는 O(n)
function test2() {
  function question(arr, arr2) {
    let arrObject = {};
    
    for(let i = 0; i < arr.length; i++) {
      arrObject[arr[i]] = true;
    }
    
    for(let z = 0; z < arr2.length; z++){
      if(arrObject[arr2[z]]) {
        console.log(1);
      } else {
        console.log(0);
      }
    }
  }
  
  question([4, 1, 5, 2, 3], [1, 3, 7, 9, 5])
}


// Set 자료구조의 has를 이용하여 구현한 풀이법
// object와 같이 시간복잡도는 O(n)이지만 가독성이 뛰어나다.
function test3() {
  function question(arr, arr2) {
    let setStructure = new Set(arr);
    
    for(let z of arr2) {
      if(setStructure.has(z)) {
        console.log(1);
      } else {
        console.log(0);
      }
    }
  }
  
  question([4, 1, 5, 2, 3], [1, 3, 7, 9, 5])
}
