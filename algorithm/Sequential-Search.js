function test() {
  let arr = [2, 5, 1, 6, 34, 52, 26, 73, 12];

  function sequentialSearch(arr, search) {
    // 반복문을 통해 순차적으로 search값과 비교
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] === search) {
        return i;
      }
    }

    // 값이 없을 경우 -1 return
    return -1;
  }
}