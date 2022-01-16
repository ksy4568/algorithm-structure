// 재귀 함수

const RecursiveFunc = (num) => {
  if (num <= 0) console.log("end");

  if (num > 0) {
    console.log(num);
    RecursiveFunc(num - 1);
    console.log(`end recursive ${num}`);
  }
};

RecursiveFunc(4);

// stack LIFO 구현

const Stack_list = [];

const push = (data) => {
  Stack_list[Stack_list.length] = data;
};

const pop = () => {
  if (Stack_list.length === 0) {
    console.log("empty");
    return;
  } else {
    let data = Stack_list[Stack_list.length - 1];
    Stack_list.length = Stack_list.length - 1;
    return data;
  }
};

push(1);
push(2);

console.log(Stack_list);

console.log(pop());

console.log(Stack_list);
console.log(pop());

console.log(Stack_list);
console.log(pop());

console.log(Stack_list);
