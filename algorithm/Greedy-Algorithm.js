function test1() {
  let coin = [100, 500, 1, 50];

  function greedy(arr, num) {
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