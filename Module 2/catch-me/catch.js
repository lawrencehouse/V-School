function sum(x, y){
    if ((typeof x != 'number') || (typeof y != 'number')) {
        throw 'Both inputs must be numbers'
    } else {
        return x + y;
    } 
  }

console.log(sum(1,2))