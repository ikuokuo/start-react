/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Provider } from 'mobx-react';
import stores from './stores';

import Pane from './Pane';

const MobXCLS: React.FC = () => (
  <div>
    <Provider {...stores}>
      <h1>MobX with React.Component</h1>
      <div style={{ display: 'flex' }}>
        <Pane name="Pane 1" style={{ flex: 'auto' }} />
        <Pane name="Pane 2" style={{ flex: 'auto' }} />
      </div>
    </Provider>
  </div>
);

export default MobXCLS;
