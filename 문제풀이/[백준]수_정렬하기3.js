// 단순히 정렬하는 문제로 생각하고 알고 있던 알고리즘 중 빠른 시간 복잡도를 가지고 있는
// merge정렬 알고리즘을 사용해서 구현해보았다.

function question(arr) {
	let sortedArr = [];
  
  for(let i of arr) {
    sortedArr.push(i);
  }
  
  function merge(left, right) {
    let mergeArr = [];
    let leftPoint = 0;
    let rightPoint = 0;
    
    while(left.length > leftPoint && right.length > rightPoint) {
      if(left[leftPoint] > right[rightPoint]) {
        mergeArr.push(right[rightPoint]);
        rightPoint++;
      } else {
        mergeArr.push(left[leftPoint]);
        leftPoint++;
      }
    }
    
    while(left.length > leftPoint) {
      mergeArr.push(left[leftPoint]);
      leftPoint++;
    }
    
    while(right.length > rightPoint) {
      mergeArr.push(right[rightPoint]);
      rightPoint++;
    }
    
    return mergeArr;
  }
  
  function mergeSlice(arr) {
    if(arr.length <= 1) {
      return arr;
    }
    
    let halfPoint = Math.floor(arr.length / 2);
    let left = mergeSlice(arr.slice(0, halfPoint));
    let right = mergeSlice(arr.slice(halfPoint));
    
    return merge(left, right);
  }
  
  return mergeSlice(sortedArr);
}

let arr = [5, 2, 3, 1, 4, 2, 3, 5, 1, 7];

question(arr)



// 여기서 추가적으로 구현한 알고리즘은 계수 정렬!
// 계수정렬은 정렬할 요소의 최대값에 따라 시간복잡도가 결정되는 알고리즘이다.
// 그 예로 10개의 요소를 정렬하는데 요소 중에 100이 있으면 시간복잡도는 O(n^2)가 되는 것..
// 각 요소의 index로 요소들의 반복 수를 파악하기 때문에 조심해서 사용할 것!
// 백준 문제의 예시들은 0 ~9 사이의 예제여서 적용할 수 있었다.

function countingSort(arr, k) {
	let sortedArr = [];
  let returnArr = [];
  
  // 요소의 max숫자를 파악해서 미리 arr를 만든다. arr의 크기에 따라 시간복잡도가 결정된다.
  let maxNum = 0;
  
	for(let i = 0; i <= arr.length; i++) {
		if(arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  
  for(let i = 0; i <= maxNum; i++) {
    sortedArr[i] = 0;
  }
  
  for(let i = 0; i < arr.length; i++) {
      sortedArr[arr[i]] += 1;
  }
  
  for(let i = 0; i < sortedArr.length; i++) {
    if(sortedArr[i]) {
      for(let z = 0; z < sortedArr[i]; z++) {
        returnArr.push(i);
      }
    }
  }
  
  return returnArr;
}
let arr2 = [5, 2, 3, 1, 4, 2, 3, 5, 1, 7];
countingSort(arr2);