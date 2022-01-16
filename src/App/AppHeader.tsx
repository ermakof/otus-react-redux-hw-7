import React, { FC, memo } from 'react';
import Panel from '@src/layout/Panel';

const AppHeader: FC = () => {
  return (
    <Panel>
      <p>Game of Life</p>
    </Panel>
  );
};

export default memo(AppHeader);
