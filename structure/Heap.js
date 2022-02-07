function test1 () {
  class Heap {
    constructor(data) {
      this.self = [data];
    }
  }
  
  class HMgmt {
    constructor() {
      this.self = [];
    }
    
    init(data) {
      this.self.length === 0 && this.self.push(data)
    }
    
    insert(data) {
      if(!data) {
        return;
      }
      this.init(data);
      
      this.self.push(data);
      
      let inserted_idx = this.self.length - 1;
      
      while(true) {
        let parent_idx = 0;
        
        if(inserted_idx > 2) {
          parent_idx = inserted_idx % 2 === 1 ? Math.floor(inserted_idx / 2) : (inserted_idx / 2) - 1;  
        }
        
        
        if (this.self[parent_idx] < this.self[inserted_idx]) {
          [this.self[parent_idx], this.self[inserted_idx]] = [this.self[inserted_idx], this.self[parent_idx]];
          
          inserted_idx = parent_idx;
        } else {
          break;
        }
      }
    }
  }
  
  let helo = new HMgmt();
  
  helo.init(15);
  helo.insert(10);
  helo.insert(8);
  helo.insert(5);
  helo.insert(4);
  helo.insert(20);
  helo
}