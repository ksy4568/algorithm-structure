// 친구 네트워크는 각 친구의 집합을 합친 합집합에 대한 문제이다.
// 1. 연결되어 있는 친구들의 부모를 정하고 연결되어 있는 친구의 합을 할당한다.

function test1() {

  // find 함수는 인자로 들어온 사람과 연결되어 있는 부모 노드의 친구를 구하는 함수이다.
	function find(x) {
    if(x === parent[x]) {
      return x
    } else {

      // 부모 노드의 친구에게 또 부모가 있을 수 있는 것을 가정하여 재귀 함수 사용
      let p = find(parent[x]);
      parent[x] = p;

      // 결국 재귀 함수로 타고타고 넘어가 제일 상위의 부모 노드에 도착하면 return한다.
      return parent[x];
    }
	}

  // union 함수는 인자로 들어온 두 사람값의 최상위 부모노드를 구하고 부모노드를 이어주는 함수
  function union(x, y) {
    x = find(x);
    y = find(y);


    // 부모노드가 같지 않다면 한 최상위 부모노드를 다른 친구의 부모노드로 연결
    if(x !== y) {
      parent[y] = x;

      // 이때 각 친구가 가지고 있는 집합인 친구들의 숫자 number의 프로퍼티들을 더한다.
      number[x] += number[y]
    }
  }

  let parent = {};
  let number = {};

  // 만약 부모 노드를 가지고 있지 않다면 자기 자신을 부모노드로 만든다.
  // 부모노드를 가지고 있다면 union 함수를 호출한다.
  function question(x, y) {
    if(!parent[x]) {
      parent[x] = x;
      number[x] = 1;
    }

    if(!parent[y]) {
      parent[y] = y;
      number[y] = 1;
    }

    union(x, y);

    // 결국 합집합의 수는 number의 최상위 부모 노드의 값으로 저정되니 find로 최상위 부모 return하여 number의 값을 찾는다.
    console.log(number[find(x)]);
  }

  question("Fred", "Barney")
  question("Barney", "Betty");
  question("Betty", "Wilma");  
}

function test2() {
	function find(x) {
    if(x === parent[x]) {
      return x
    } else {
      let p = find(parent[x]);
      parent[x] = p;
      return parent[x];
    }
	}

  function union(x, y) {
    x = find(x);
    y = find(y);

    if(x !== y) {
      parent[y] = x;
      number[x] += number[y]
    }
  }

  let parent = {};
  let number = {};

  function question(x, y) {
    if(!parent[x]) {
      parent[x] = x;
      number[x] = 1;
    }

    if(!parent[y]) {
      parent[y] = y;
      number[y] = 1;
    }

    union(x, y);

    console.log(number[find(x)]);
  }

  question("Fred", "Barney")
  question("Wilma", "Betty");
  question("Barney", "Wilma");  
}

test2()