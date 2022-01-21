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

// Hash의 충돌을 Linear Probling 기법을 활용하여 막는 방법 구현
function test3() {
  class Hash {
    constructor() {
      this.hash_allow = 8;
      this.hash_table = new Array(this.hash_allow);
    }
    
    get_key(data) {
      let key = '';
      for(let i = 0; i < data.length; i++) {
        key = `${key}${data[i].charCodeAt()}`;
      }
      return Number(key);
    }
    
    hash_function(data) {
      return data % this.hash_allow;
    }
    
    save_data(data, value) {
      let index_key = this.get_key(data);
      let hash_address = this.hash_function(index_key);
      
      if(!this.hash_table[hash_address]) {
        this.hash_table[hash_address] = [index_key, value];
      } else {
          for(let i = hash_address; i < this.hash_table.length; i++) {
            if(!this.hash_table[i]) {
              this.hash_table[i] = [index_key, value];
              return;
            } else if (this.hash_table[i][0] === index_key) {
              this.hash_table[i] = [index_key, value];
              return;
            }
            if(i === this.hash_table.length - 1) {
              console.log('havent storage');
            }
        }
      }
    }
    
    read_data(data) {
      let index_key = this.get_key(data);
      let hash_address = this.hash_function(index_key);
      
      if(!this.hash_table[hash_address]) {
        console.log('No data');
        return;
      }
      
      if(this.hash_table[hash_address][0] === index_key) {
        return this.hash_table[hash_address][1];
      } else {
        for(let i = hash_address; i < this.hash_table.length; i++) {
          if(this.hash_table[i][0] === index_key) {
            return this.hash_table[i][1];
          } else if (i === this.hash_table.length - 1){
            console.log('No data');
          }
        }
      }
    }
  }
  
  let hash = new Hash();
  
  hash.save_data('angy', '0101123')
  hash.save_data('rnaw', '92324')
  hash.save_data('tony', 'werja')
  hash.save_data('angy', '444444')
  hash.save_data('fq', '55555')
  hash.save_data('r', '66666')
  hash.save_data('t', 77777);
  hash.save_data('u', '3441')
  hash.save_data('v', 'wrsdfnnnn')
  
  hash.read_data('angy');
  hash.read_data('r');
  hash.read_data('v');
  hash.read_data('suyeon');
}