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

// tree delete 구현
function test2() {
  class Node {
    constructor(value) {
      this.self = {value, left: undefined, right: undefined};
    }
  }
  
  
  class NodeMgmt {
    constructor(head) {
      this.head = head
    }
    
    insert(value) {
      let current_node = this.head;
      
      while (true) {
        if(current_node.value > value) {
          if(current_node.left) {
            current_node = current_node.left;
          } else {
            current_node.left = new Node(value).self;
            break;
          }
        } else {
          if(current_node.right) {
            current_node = current_node.right;
          } else {
            current_node.right = new Node(value).self;
            break;
          }
        }
      }
    }
    
    search(value) {
      let current_node = this.head;
      
      while (current_node) {      
        if(current_node.value === value) {
          console.log('have Data');
          break;
        } else if (current_node.value > value) {
          current_node = current_node.left;
        } else {
          current_node = current_node.right;
        }
      }
      
      console.log('havent Data');
    }
    
    delete(value) {
      let current_node = this.head;
      let parent_node = this.head;
      
      while (current_node) {
        if(current_node.value === value) {
          break;
        } else if (current_node.value > value) {
          parent_node = current_node;
          current_node = current_node.left;
        } else {
          parent_node = current_node;
          current_node = current_node.right;
        }
      }
      
      if(!current_node) {
        console.log('no Data');
        return;
      }
      
      // delete data is leaf data
      if(!current_node.left && !current_node.right) {
        if(parent_node.value > value) {
          parent_node.left = '';
          return;
        } else {
          parent_node.right = '';
          return;
        }
      }
      
  //     // delete data has one child node
      if(!current_node.left && current_node.right) {
        if(parent_node.value > value) {
          parent_node.left = current_node.right;
          return;
        } else {
          parent_node.right = current_node.right;
          return;
        }
      } else {
        if(parent_node.value > value) {
          parent_node.left = current_node.left;
          return;
        } else {
          parent_node.right = current_node.left;
        }
      }
      
      // delete data has two child node
      if(current_node.left && current_node.right) {
        if(parent_node.value > value) {
          let change_node = current_node.right;
          let change_node_parent = current_node.right;
          while(change_node.left) {
            change_node_parent = change_node;
            change_node = change_node.left;
          }
          if(chnage_node.right) {
            change_node_parent.left = change_node.right;
          } else {
            change_node_parent.left = undefined;
          }
          
          parent_node.left = change_node;
          change_node.right = current_node.right;
          change_node.left = current_node.left;
        } else {
          let change_node = current_node.right;
          let change_node_parent = current_node.right;
          while(change_node.left) {
            change_node_parent = change_node;
            change_node = change_node.left;
          }
          if(change_node.right) {
            change_node_parent.left = change_node.right;
          } else {
            change_node_parent.left = undefined;
          }
          
          parent_node.right = change_node;
          change_node.right = current_node.right;
          change_node.left = current_node.left;
        }
      }
      
      
    }
  }
  let node = new Node(10);
  let hello = new NodeMgmt(node.self);
  hello.insert(7)
  hello.insert(15);
  hello.insert(6);
  hello.insert(8);
  hello.insert(13);
  hello.insert(18);
  hello.insert(11);
  hello.insert(14);
  hello.insert(16);
  hello.insert(19);
  hello.insert(17);
  
  hello.delete(15);
  hello  
}