const queue_list = [];

const enqueue = (data) => {
  queue_list.push(data);
};

const dequeue = () => {
  queue_list.shift();
};

for (let i = 0; i < 10; i++) {
  enqueue(i);
}

console.log("enqueue", queue_list);

dequeue();
dequeue();

console.log("dequeue", queue_list);
