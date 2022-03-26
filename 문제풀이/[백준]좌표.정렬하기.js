// input값을 받는 과정을 생략
// 문제에서 요구하는 정렬에 초점을 맞추고 풀이 진행

// 1. x축을 기준으로 먼저 정렬하기
// 2. x축이 같을 때 y축을 비교하여 정렬하기

// 파이썬의 sort내장 라이브러리는 튜플로 x, y를 구현하면 자동으로 sorting된다는데..
// 지금은 메소드보다 전체적인 정렬 흐름 파악하기 위한 풀이

function sort(arr) {
  let xSorted = arr.sort((a, b) => {
    return a[0] - b[0];
  }, 0);
  
  return xSorted;
}

sort([[3, 4], [1, 1], [1, -1], [2, 2], [3, 3]]);

function ySort(arr) {
  let ySorted = arr;
  
  for(let i = 0; i < ySorted.length; i++) {
    for(let z = i + 1; z < ySorted.length; z++) {
      if(ySorted[i][0] === ySorted[z][0]) {
        if(ySorted[i][1] > ySorted[z][1]) {
          [ySorted[i], ySorted[z]] = [ySorted[z], ySorted[i]];
        }
      }
    }
  }
  
  return ySorted;
}

ySort(sort([[3, 4], [1, 1], [1, -1], [2, 2], [3, 3]]));

// 2번의 정렬로 풀이는 구현했지만... 시간복잡도 O(N^2)... 더 줄일 수는 없을까?
// 필요한 정렳 알고리즘 생각하기..
// 버블, 선택, 삽입 정렬은 대개 O(N^2)일 경우가 다반사
// 퀵, 머지 정렬 선택


// merge 정렬로 구현
function question(arr) {
  // merge는 mergeSlice로 나누어진 left, right를 다시 합치는 함수이다.
  function merge(left, right, axis) {

    // 문제에서는 x축과 y축을 각각 상황에 맞게 sorting해야하기 때문에 축을 인자로 받는다.
    let changedAxis = axis === "x" ? 0 : 1;
    let mergedArr = [];
    let leftPoint = 0;
    let rightPoint = 0;

    // left와 right의 element들이 있다면 while문을 거친다.
    // 여기서 while문은 left와 right로 들어온 인자들을 각각 array의 index순서대로 비교하여
    // 작은 순서대로 mergedArr에 push하는 문이다.
    while (left.length > leftPoint && right.length > rightPoint) {

      // x축을 기준으로 먼저 정렬되고 y축은 동일한 x축일 경우 비교하므로
      // 따로 y축 정렬일 경우 x축의 좌표가 동일한지 확인한다.
      if(axis === "y") {
        if(left[leftPoint][0] === right[rightPoint][0]) {
          if(left[leftPoint][changedAxis] < right[rightPoint][changedAxis]) {
            mergedArr.push(left[leftPoint]);
            leftPoint++;
          } else {
            mergedArr.push(right[rightPoint]);
            rightPoint++;
          }
        }
        else {
          break;
        }
      } else {
        if(left[leftPoint][changedAxis] < right[rightPoint][changedAxis]) {
          mergedArr.push(left[leftPoint]);
          leftPoint++;
        } else {
          mergedArr.push(right[rightPoint]);
          rightPoint++;
        }
      }
    }

    // 각 leftPoint, rightPoint 중 하나만 위의 조건에 충족하지 못한다면
    // 아직 left나 right 안에 있는 요소들이 mergedArr로 push되지 못했다는 것!
    // 추가적인 while문으로 mergedArr에 push해준다.
    while(left.length > leftPoint) {
      mergedArr.push(left[leftPoint]);
      leftPoint++;
    }

    while(right.length > rightPoint) {
      mergedArr.push(right[rightPoint]);
      rightPoint++;
    }

    return mergedArr;
  }

  // mergeSlice는 merge로 보내기 전 left와 right를 먼저 나누는 단계이다.
  // 재귀함수를 통해 element가 1개밖에 없는 array까지 쪼갠 이후 return하여
  // mergeSlice에서 반환하는 값을 계층별로 merge하는 로직이다.
  function mergeSlice(arr, axis) {
    if(arr.length <= 1) {
      return arr;
    }
    let halfPoint = Math.floor(arr.length / 2);
    let left = mergeSlice(arr.slice(0, halfPoint), axis);
    let right = mergeSlice(arr.slice(halfPoint), axis);

    return merge(left, right, axis);
  }

  let xSorted = mergeSlice(arr, "x");
  
  return mergeSlice(xSorted, "y");
}

question([[3, 4], [1, 1], [1, -1], [2, 2], [3, -30], [-2, 9], [3, -10], [1, -4], [0, 0]]);

// 이런 풀이 방법이 도움이 될지는 모르겠지만..
// 아직 제대로 알고리즘 테스트를 진행하는 것보다 알고리즘 동작 방식을 익히는 것이 좋다고 판단했다.
// 물론 이게 더 재미있다🤗 (시간이 많이 걸리는 것은 함정..ㅎ);
