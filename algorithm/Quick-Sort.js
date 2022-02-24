function test1(){
  let arr = [4, 1, 2, 39, 12, 32, 24, 18, 19, 13, 9];

  function quick(list) {
    if (list.length <= 1) return list;
    
    let left = [];
    let right = [];
    let pivot = list[0];
    
    for(let i = 1; i < list.length; i++) {
      if(pivot > list[i]) {
        left.push(list[i])
      } else {
        right.push(list[i])
      }
    }
    
    return [...quick(left), pivot, ...quick(right)];
  }

  quick(arr)

  function quick2(list) {
    if (list.length <= 1) return list;
    
    let left = [];
    let right = [];
    let pivot = list[0];
    
    left = list.filter(el => pivot > el)
    right = list.filter(el => pivot <= el)
    
    return [...quick(left), pivot, ...quick(right)];
  }


  quick2(arr)

}