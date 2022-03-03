
// 백준 수 찾기 문제
function test1() {
  let N_list = [4, 1, 5, 2, 3];
  let M_list = [1, 3, 7, 9, 5];

  // Quick 정렬을 이용한 배열 sorting
  // 이진탐색 알고리즘은 탐색할 array가 정렬되어 있어야 한다.
  function quickSort(arr) {
    if(arr.length <= 1) {
      return arr;
    }
    
    let point = arr[0];
    
    let left = arr.filter(el => el < point);
    let right = arr.filter(el => el > point);
    
    return [...quickSort(left), point, ...quickSort(right)];
  }

  function binarySearch(arr, search) {
    if(arr.length === 1 && arr[0] === search) {
      return true;
    }
    if(arr.length === 1 && arr[0] !== search) {
      return false;
    }
    if(arr.length <= 0) {
      return false;
    }
    
    let middlePoint = Math.floor(arr.length / 2);
    
    if(arr[middlePoint] > search) {
      return binarySearch(arr.slice(0, middlePoint), search);
    } else {
      return binarySearch(arr.slice(middlePoint), search);
    }
  }

  
  let sortedArr = quickSort(N_list);

  for(let i of M_list) {
    if(binarySearch(sortedArr, i)) {
      console.log(1);
    } else {
      console.log(0)
    }
  }
}