function test1() {
  class Node {
    constructor(data) {
      this.self = {data, left: undefined, right: undefined}
    }
  }
  
  class NodeMgmt {
    insert(data) {
      if(!this.self) {
        this.self = new Node(data).self
        return;
      }
      let point = this.self;

      while (true) {
        if(point.data < data) {
          if(point.right) {
            point = point.right;
          } else {
            point.right = new Node(data).self
            break;
          }
        } else {
          if(point.left) {
            point = point.left;
          } else {
            point.left = new Node(data).self
            break;
          }
        }
      }
    }

    search(data) {
      if(!data) {
        console.log('input data');
        return;
      }
      
      let point = this.self;

      while (point) {
        if(point.data === data) {
          console.log('Have data');
          return;
        } else if (point.data < data) {
          point = point.right;
        } else if (point.data >= data) {
          point = point.left;
        }
      }
      return console.log('No data')
    }
  }
  
  let hello = new NodeMgmt();
  hello.insert(20);
  console.log(hello);
  console.log('-----')
  hello.insert(18);
  console.log(hello); 
  console.log('-----')
  hello.insert(25);
  console.log(hello); 
  console.log('-----')
  hello.insert(19);
  console.log(hello); 
  console.log('-----')
  hello.insert(23);
  console.log(hello); 
  hello.search(19);
}

test1();