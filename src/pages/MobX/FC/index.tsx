import React from 'react';

import Pane from './Pane';

const MobXFC: React.FC = () => (
  <div>
    <h1>MobX with React.FC</h1>
    <div style={{ display: 'flex' }}>
      <Pane name="Pane A" style={{ flex: 'auto' }} />
      <Pane name="Pane B" style={{ flex: 'auto' }} />
    </div>
  </div>
);

export default MobXFC;
