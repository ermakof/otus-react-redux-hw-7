import React, { FC, memo } from 'react';
import Panel from '@src/layout/Panel';

const AppBottom: FC = () => {
  return (
    <Panel>
      <p role="userCount">Результат</p>
    </Panel>
  );
};

export default memo(AppBottom);
