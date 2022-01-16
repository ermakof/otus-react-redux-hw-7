import React, { FC } from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { GameField } from '@src/modules/GameField';

export default {
  component: GameField,
  decorators: [withKnobs],
  title: 'Modules/GameField',
};

export const Dynamic: FC = () => {
  return <GameField />;
};
