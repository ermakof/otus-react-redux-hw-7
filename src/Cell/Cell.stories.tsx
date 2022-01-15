import React, { useState, FC } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Cell } from './Cell';
import { withKnobs, number, boolean } from '@storybook/addon-knobs';

export default {
  component: Cell,
  decorators: [withKnobs],
  title: 'Example/Cell',
} as ComponentMeta<typeof Cell>;

const Template: ComponentStory<typeof Cell> = (args) => <Cell {...args} />;

export const Static = Template.bind({});

Static.args = {
  num: number('num', 3),
  alive: boolean('alive', true),
  onClick: action('clicked'),
  isRight: boolean('isRight', true),
  isBottom: boolean('isBottom', true),
  isLeft: boolean('isLeft', true),
};

export const Dynamic: FC = () => {
  const [alive, setAlive] = useState(true);
  const num = number('num', 3);
  const onClick = () => {
    setAlive(!alive);
  };

  return (
    <Cell
      num={num}
      alive={alive}
      onClick={onClick}
      isRight={boolean('isRight', true)}
      isBottom={boolean('isBottom', true)}
      isLeft={boolean('isLeft', true)}
    />
  );
};
