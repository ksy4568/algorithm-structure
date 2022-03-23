// 자바스크립트 기본 내장 함수 sort 사용
//   function sortMethod() {
//   let answer = [];

//   function sorting(n) {
//     answer.push(n)
//     answer = answer.sort((a, b) => a - b);
//   }

//   sorting(1)
//   sorting(2)
//   sorting(3)
//   sorting(4)
//   sorting(5)

//   for(let i of answer) {
//       console.log(i);
//   }
// }


// 이중 for문 사용
// function doubleFor() {
//   let answer = [];

//   function sorting(n) {
//     answer.push(n);

//     if(answer.length > 1) {
//       for(let i = 0; i < answer.length; i++) {
//         for(let z = i + 1; z < answer.length; z++) {
//           if(answer[i] > answer[z]) {
//             [answer[i], answer[z]] = [answer[z], answer[i]];
//           }
//         }
//       }
//     }
//   }

//   sorting(1)
//   sorting(2)
//   sorting(3)
//   sorting(4)
//   sorting(5)

//   for(let i of answer) {
//     console.log(i);
//   }
// }


// Quick Sort 구현
// function quickSorting() {
//   let answer = [];

//   function sorting(n) {  
//     answer.push(n);

//     answer = quickSort(answer);

//     function quickSort(arr) {  
//       if(arr.length <= 1) {
//         return arr;
//       }

//       let halfPoint = Math.floor(arr.length / 2);
//       let left = [];
//       let right = [];

//       for(let i = 0; i < arr.length; i++) {
//         if(arr[i] < arr[halfPoint]) {
//           left.push(arr[i]);
//         } else if (arr[i] > arr[halfPoint]) {
//           right.push(arr[i]);
//         }
//       }

//       return [...quickSort(left), arr[halfPoint], ...quickSort(right)];
//     }
//   }


//   sorting(5)
//   sorting(4);
//   sorting(3);
//   sorting(2);
//   sorting(1);

//   for(let i of answer) {
//     console.log(i);
//   }
// }


// Selection sorting 사용
// function question() {
//   let answer = [];
  
//   function inputValue(n) {
//     answer.push(n);
    
//     selectionSort(answer);
//   }
  
//   inputValue(5);
//   inputValue(4);
//   inputValue(3);
//   inputValue(2);
//   inputValue(1);
  
//   for(let i of answer) {
//     console.log(i);
//   }
  
//   function selectionSort(answer) {
//     for(let i = 0; i < answer.length; i++) {
//       let minNum = answer[i];
//       let minIndex = i;
      
//       for(let z = i + 1; z < answer.length; z++) {
//         if(answer[z] < minNum) {
//           minNum = answer[z];
//           minIndex = z;
//         }  
//       }
      
//       [answer[i], answer[minIndex]] = [answer[minIndex], answer[i]];
//     }
//   }
// }