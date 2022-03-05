function test1 () {
  let graph = {};

  graph['A'] = ['B', 'C']
  graph['B'] = ['A', 'D']
  graph['C'] = ['A', 'G', 'H', 'I']
  graph['D'] = ['B', 'E', 'F']
  graph['E'] = ['D']
  graph['F'] = ['D']
  graph['G'] = ['C']
  graph['H'] = ['C']
  graph['I'] = ['C', 'J']
  graph['J'] = ['I']


  function BFS(graph, start_node) {
    // 각각 필요한 node를 저장할 수 있는 Queue를 만든다.

    // visited는 최종적으로 순차적으로 모아놓을 노드를 담는 Queue이다.
    let visited = [];

    // need_visit은 graph를 탐색해서 visited에 순차적으로 담기 위해 거치는 Queue이다.
    let need_visit = [];
    
    need_visit.push(start_node);
    

    // 1. start_node가 할당되었으면 need_visit의 index 0값을 shift한다.
    // 2. need_visit에서 visited으로 넘기기 전 visited에 이미 need_visit의 index 0 요소가 있는지
    //    검사한다. (indexOf)
    // 3. 검사한 후 있으면 패스, 없으면 graph에서 need_visit의 index 0에 연결되어 있는 array를 가져와 need_visit과 합친다.(concat)
    // 4. 반복 후 need_visit에 visit으로 보낼 element들이 없으면 visited를 return한다.
    while(need_visit.length > 0) {
      node = need_visit.shift();
      
      if(visited.indexOf(node) === -1) {
        visited.push(node);
        need_visit = need_visit.concat(graph[node]);
      }
    }
    
    return visited;
  }

  BFS(graph, "A")
}