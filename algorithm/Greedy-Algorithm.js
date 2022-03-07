function test1() {
  let coin = [100, 500, 1, 50];

  // 텀욕 알고리즘은 순간마다 최선의 선택을 하는 알고리즘이다.
  // 즉, 순간을 놓고 판단하기 때문에 도출하는 값은 최선이 아닌 최선의 근사값에 더 가깝다.
  function greedy(arr, num) {
    // 탐욕 알고리즘에서 중요하다고 생각되는 부분..
    // sorting이 되어 있으면 최선의 값부터 계산할 수 있다.
    coin.sort((a, b) => {
      return b - a;
    });
    
    let remain_price = num;
    let answer = 0;
    
    for(let i of arr) {
      if(remain_price === 0) break;
      
      let using_coin = Math.floor(remain_price / i);
      
      if(using_coin >= 1) {
        answer += using_coin;
        remain_price -= using_coin * i;  
      }
    }
    
    return answer
  }

  greedy(coin, 4720)
}

function test2() {
  let product = [[15, 12], [20, 10], [10, 10], [25, 8], [30, 5]];

  function greedy(product, weight) {
    product.sort((a, b) => {
      return (b[1] / b[0]) - (a[1] / a[0]);
    })
    
    let remain_weight = weight;
    let detail = [];
    
    for(let item of product) {
      if(remain_weight === 0) break;
      
      if(remain_weight - item[0] >= 0) {
        remain_weight -= item[0];
        item.push(1);
        detail.push(item)
      } else {
        let iPercent = remain_weight / item[0];
        remain_weight -= item[0] * iPercent;
        item.push(iPercent);
        detail.push(item);
      }
    }
    
    return detail;
  }

  greedy(product, 30);
}