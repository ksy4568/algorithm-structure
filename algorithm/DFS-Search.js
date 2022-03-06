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

// 깊이 우선 탐색은 BFS와 차이점이 한개 존재한다.

// BFS는 need_visit가 Queue구조이기 때문에 같은 depth의 값들이 먼저 나오는 방식이다.

// DFS는 이와 다르게 Stack 구조로 되어 있어 같은 depth의 값들이 빠져나오기 전에
// 각 노드마다 아래로 연결되어 있는 값들이 먼저 나오는 방식이다.

function DFS(graph, start_node) {
  let visitied = [];
  let need_visit = [];
  
  need_visit.push(start_node);
  
  while(need_visit.length > 0) {
    // BFS는 Queue구조로 shift를(FIFO), DFS는 Stack구조로 pop을 사용했다.(FILO)
    node = need_visit.pop();
    
    if(visitied.indexOf(node) === -1) {
      visitied.push(node);
      need_visit = need_visit.concat(graph[node]);
    }
  }
  
  return visitied;
}

DFS(graph, "A")