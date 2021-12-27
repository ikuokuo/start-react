import { makeObservable, observable, action } from 'mobx';

class Counter {
  @observable count = 0;

  constructor() {
    makeObservable(this);
  }

  @action
  increase() {
    this.count += 1;
  }

  @action
  decrease() {
    this.count -= 1;
  }
}

export default Counter;
