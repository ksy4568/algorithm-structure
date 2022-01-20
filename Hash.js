function test1() {
  let dataNum = 4;

  let hash_table = Array();

  function hashFunc(key) {
    return key % dataNum;
  }

  let data1 = 'Andy';
  let data2 = 'Suzy';
  let data3 = 'Hyojung';

  // data1[0].charCodeAt();
  // data2[0].charCodeAt();
  // data3[0].charCodeAt();

  function storage_data(data, value) {
    let key = data[0].charCodeAt();
    let hash_address = hashFunc(key);
    hash_table[hash_address] = value;
  }

  storage_data(data1, 'father')
  storage_data(data3, 'mother')
  storage_data(data2, 'wife')

  hash_table
}

// Hash 테이블의 충돌을 방지하기 위해 Linked_List와 결합한 자료구조
function test2() {
  class Hash {
    allow_length = 8;
    hash_table = new Array(this.allow_length);
    
    get_key(data) {
      let key = '';
      for(let i = 0; i < data.length; i++) {
        key = `${key}${data[i].charCodeAt()}`
      }
      return Number(key);
    }
    
    hash_function(key) {
      return key % this.allow_length;
    }
    
    save_data(data, value) {
      let index_key = this.get_key(data);
      let hash_address = this.hash_function(index_key);
      
      if(!this.hash_table[hash_address]) {
        this.hash_table[hash_address] = [[index_key, value]];
      } else {
        this.hash_table[hash_address].forEach(el => {
          if(el[0] === index_key) {
            el[1] = value;
            return;
          } else {
            this.hash_table[hash_address].push([index_key, value]);   
          }
        })
      }
    }
  }

  let test = new Hash();

  test.save_data('Adny', '01098683362')
  test.save_data('ndrew', '12142')
  test.save_data('cello', '134412344')
  test.save_data('eell', '44444444')

  console.log(test.hash_table);

  // -> class 정보 은닉 스터디 필요..
}