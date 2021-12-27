import React from 'react';

import Counter from './Counter';
import Themes from './Themes';

const stores = React.createContext({
  counter: new Counter(),
  themes: new Themes(),
});

export default stores;
