function test() {
  let mygraph = {
    'A': {'B': 8, 'C': 1, 'D': 2},
    'B': {},
    'C': {'B': 5, 'D': 2},
    'D': {'E': 3, 'F': 5},
    'E': {'F': 1},
    'F': {'A': 5}
}

  class Heap {
    heapq = [];
    
    heappush(arr) {
      this.heapq = this.heapq.concat(arr)
      
      this.heapq.sort((a, b) => {
        return a[0] - b[0];
      })
    }
    
    heappop() {
      return this.heapq.shift();
    }
  }

  // 최단 경로를 구하기 위해 우선순위 큐를 먼저 구현했다.
  // -> 시작 노드에서부터 각 노드마다의 거리를 구할 때 한단계 이동 후 BFS알고리즘처럼 이동된 노드로부터
  // -> 연결되어 있는 노드 값을 먼저 구하기 위해 사용한다.

  function dijkstra(graph, start) {
    let heapq = new Heap();
    let distances = {};
    for(let i in graph) {
      distances[i] = Number.MAX_SAFE_INTEGER;
    }
    distances[start] = 0;
    heapq.heappush([[distances[start], start]])

    while (heapq.heapq.length > 0) {
      let [current_distance, current_node] = heapq.heappop();
      
      if (distances[current_node] < current_distance) {
        continue;
      }
      
      for (let adjacent in graph[current_node]) {
        let weight = graph[current_node][adjacent];
        let distance = current_distance + weight;
        
        if(distance < distances[adjacent]) {
          distances[adjacent] = distance;
          heapq.heappush([[distance, adjacent]]);
        }
      }
    }
    
    return distances;
  }


  dijkstra(mygraph, "A")
}