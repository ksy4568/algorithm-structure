function test() {
  let test = [3, 67, 5, 8, 2, 64, 35, 53, 18, 43, 23];

  // 버블 정렬
  function sorting(arr) {
    for(let i = 0; i < arr.length; i++) {
      for(let z = 0; z < arr.length; z++) {
        if(arr[z] > arr[z + 1]) {
          [arr[z], arr[z + 1]] = [arr[z + 1], arr[z]];
        }
      }
    }
    
    return arr;
  }
  sorting(test)

  // 기본적으로 이진트리탐색은 탐색 전 정렬이 되어 있어야 한다.
  function binarySearch(data, search) {
    // 나눈 데이터가 1개남고 그 한개가 searchNum이라면 true
    if(data.length === 1 && data[0] === search) {
      return true;
    }
    
    // 나눈 데이터가 1개 남고 그 한개가 search와 다르면 false
    if(data.length === 1 && data[0] !== search) {
      return false;
    }
    
    // 혹여나 모를 방어 코드
    if(!data.length) {
      return false;
    }
    
    // data array의 중간지점을 기준으로 array를 나누어 탐색하는 작업을 반복한다.
    let middlePoint = Math.floor(data.length / 2);
    
    if(data[middlePoint] <= search) {
      return binarySearch(data.slice(middlePoint), search);
    } else {
      return binarySearch(data.slice(0, middlePoint), search);
    }
  }

  binarySearch(sorting(test), 18);
}