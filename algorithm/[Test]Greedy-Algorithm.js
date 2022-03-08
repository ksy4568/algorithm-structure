function test1 () {
  // 백준 11399번 ATM
  let arr =[3, 1, 4, 3, 2]

  // arr에 있는 값을 오름차순으로 정렬한다.
  function greedy(people, takeTime) {
      takeTime.sort((a, b) => {
          return a - b;
      })
      
      let weightTime = 0;
      
      for(let i of takeTime) {
        weightTime += i * (people--)
      }
      
      return weightTime;
  }

  greedy(5, arr)

}