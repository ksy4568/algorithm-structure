function test1() {
  let arr = [5, 2, 3, 1, 8, 5];

  function merge(left, right) {
    let merged = [];
    let left_point = 0;
    let right_point = 0;

    while(left.length > left_point && right.length > right_point) {
      if(left[left_point] > right[right_point]) {
        merged.push(right[right_point]);
        right_point += 1;
      } else {
        merged.push(left[left_point]);
        left_point += 1;
      }
    }

    while (left.length > left_point) {
      merged.push(left[left_point]);
      left_point += 1;
    }

    while (right.length > right_point) {
      merged.push(right[right_point]);
      right_point += 1;
    }

    return merged;
  }


  // 먼저 array의 element들을 잘게 쪼개는 함수
  function mergeSlice(arr) {
    if(arr.length <= 1) return arr;

    let point = Math.floor(arr.length / 2);
    let left = mergeSlice(arr.slice(0, point));
    let right = mergeSlice(arr.slice(point));

    return merge(left, right);
  }

  mergeSlice(arr) 
}