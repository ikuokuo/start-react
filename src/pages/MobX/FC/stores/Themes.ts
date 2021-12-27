import { makeAutoObservable } from 'mobx';

class Themes {
  themes = ['dark', 'light'];

  currentTheme = 'dark';

  constructor() {
    makeAutoObservable(this);
  }

  setTheme(theme: string): void {
    this.currentTheme = theme;
  }
}

export default Themes;
