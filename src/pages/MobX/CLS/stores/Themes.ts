import { makeObservable, observable, action } from 'mobx';

class Themes {
  @observable themes = ['dark', 'light'];

  @observable currentTheme = 'dark';

  constructor() {
    makeObservable(this);
  }

  @action
  setTheme(theme: string): void {
    this.currentTheme = theme;
  }
}

export default Themes;
