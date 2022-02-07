class Node {
  constructor(data, next = undefined) {
    this.head = { data, next };
  }

  add(data) {
    let head = this.head;

    if (!head.data) {
      this.head = { data, next: undefined };
      console.log("새로운 노드가 생성되었습니다.");
    }

    while (head) {
      if (head.next) {
        head = head.next;
      }
      if (!head.next) {
        head.next = { data, next: undefined };
        break;
      }
    }
  }

  // 경우는 3가지 1. head가 삭제될 때, 중간에 삭제될 때, 끝에 삭제될 때
  delete(data) {
    if (!this.head.data) {
      console.log("해당 노드가 존재하지 않습니다.");
      return;
    }

    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    } else {
      let node = this.head;

      while (node.next) {
        if (node.next.data === data) {
          let temp = node.next;
          node.next = node.next.next;
          temp = undefined;
          break;
        } else {
          node = node.next;
        }
      }
    }
  }
}

// head 노드가 없었을 시에 add 함수 호출 시 노드 자동 생성
// let hello = new Node();
// hello.add(1);
// hello.head

// 노드와 노드를 Linked List로 연결하기
let hello2 = new Node(2);
let hello = new Node(1, hello2.head);

console.log(hello.head);

hello.add(3);

console.log(hello.head);

// linked_list 앞 노드 삭제
hello.delete(1);
console.log(hello.head);

hello.add(4);
hello.add(5);

console.log(hello.head);
hello.delete(4);
console.log(hello.head);
hello.delete(5);
console.log(hello.head);

// Double Linkted_List 구현

class Node {
  constructor(data, prev = undefined, next = undefined) {
    this.self = { data, prev: prev, next: next };
  }
}

class NodeMgmt {
  __init__(data) {
    let node = new Node(data).self;
    this.self = node;
    this.head = node;
    this.tail = node;
  }

  insert(data) {
    let temp = this.self;

    while (temp) {
      if (temp.next) {
        temp = temp.next;
      } else {
        let newData = new Node(data).self;
        temp.next = newData;
        temp.next.prev = temp;
        this.tail = newData;
        break;
      }
    }
  }

  desc() {
    let temp = this.self;

    while (this.self) {
      console.log(temp.data);
      temp = temp.next;

      if (!temp.next) {
        console.log(temp.data);
        break;
      }
    }
  }

  insert_before(beforeData, addData) {
    let temp = this.self;

    while (temp) {
      if (temp.next.data !== beforeData) {
        temp = temp.next;
      } else {
        let addObj = { data: addData, next: temp.next, prev: temp };
        temp.next.prev = addObj;
        temp.next = addObj;
        break;
      }
    }
  }

  insert_after(afterData, addData) {
    let temp = this.self;

    while (temp) {
      if (temp.data !== afterData) {
        temp = temp.next;
      } else {
        let addObj = { data: addData, next: temp.next, prev: temp };

        temp.next.prev = addObj;
        temp.next = addObj;
        break;
      }
    }
  }
}

let hello = new NodeMgmt();

hello.__init__(1);
hello.insert(2);
hello.insert(3);
hello.insert(4);

hello.insert_before(2, 1.5);
hello.insert_after(3, 3.5);

hello.insert(5);
