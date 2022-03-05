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
    let visited = [];
    let need_visit = [];
    
    need_visit.push(start_node);
    
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