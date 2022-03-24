// 이중 for문을 사용하지만 주어진 배열의 element요소가 많지 않아서 시간복잡도 측면으로
// 큰 로드를 가질 것 같지 않다.
function sort(num) {
  let numArr = String(num).split('');
  let answer = [];
  
	for(let i = 9; i >= 0; i--) {
  	for(let z of numArr) {
      if(Number(z) === i) {
        answer.push(z);
      }
    }	  
  }
  
  return Number(answer.join(''));
}


// 처음에 각 요소들을 어떻게 하면 빠른 시간복잡도를 가진 로직을 구현할 수 있을까 고민하여 구현한 Quicksort
// function sort(num) {
// 	let stringNum = String(num);
  
//   let stringArr = [];
  
//   for(let i of stringNum) {
//     stringArr.push(i);
//   }
  
//   function quickSort(arr) {  
//     if(arr.length <= 1) {
//       return arr;
//     }
    
//     let halfPoint = Math.floor(arr.length / 2);
//     let left = [];
//     let right = [];
//     let middle = [];
    
//     for(let i = 0; i < arr.length; i++) {
//       if(arr[i] < arr[halfPoint]) {
//         left.push(arr[i]);
//       } else if(arr[i] > arr[halfPoint]) {
//         right.push(arr[i]);
//       } else {
//         middle.push(arr[i]);
//       }
//     }
    
//     return [...quickSort(right), ...middle, ...quickSort(left)];
//   }
  
//   return Number(quickSort(stringArr).join(''));
// }

// method를 사용하여 쉽게 구현한 sort
// function sort(num) {
//   let stringNum = String(num);
  
//   let stringArr = [];
  
//   for(let i of stringNum) {
//   	stringArr.push(i);  
//   }
  
//  	stringArr.sort((a, b) => {
//     return b - a;
//   }, 0); 
  
//   return Number(stringArr.join(''));
// }

sort(2143)
sort(999998999);
sort(61423);
sort(500613009);