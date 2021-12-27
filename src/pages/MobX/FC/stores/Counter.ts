import { makeAutoObservable } from 'mobx';

class Counter {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increase() {
    this.count += 1;
  }

  decrease() {
    this.count -= 1;
  }
}

export default Counter;
