import Counter from './Counter';
import Themes from './Themes';

export interface Stores {
  counter: Counter;
  themes: Themes;
}

const stores : Stores = {
  counter: new Counter(),
  themes: new Themes(),
};

export default stores;
