import React, { FC } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Cell from '../index';
import { withKnobs, number, boolean } from '@storybook/addon-knobs';

export default {
  component: Cell,
  decorators: [withKnobs],
  title: 'Modules/Cell',
} as ComponentMeta<typeof Cell>;

const Template: ComponentStory<typeof Cell> = (args) => <Cell {...args} />;

export const Static = Template.bind({});

Static.args = {
  num: number('num', 3),
  status: number('status', 1),
  isRight: boolean('isRight', true),
  isBottom: boolean('isBottom', true),
  isLeft: boolean('isLeft', true),
};

export const Dynamic: FC = () => {
  const status = number('status', 1);
  const num = number('num', 3);

  return (
    <Cell
      num={num}
      status={status}
      isRight={boolean('isRight', true)}
      isBottom={boolean('isBottom', true)}
      isLeft={boolean('isLeft', true)}
    />
  );
};
