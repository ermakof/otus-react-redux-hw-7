import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import AppBody from '@src/App/AppBody';

export default {
  component: AppBody,
  decorators: [withKnobs],
  title: 'Application/AppBody',
} as ComponentMeta<typeof AppBody>;

const Template: ComponentStory<typeof AppBody> = (args) => <AppBody {...args} />;

export const Static = Template.bind({});

Static.args = {};
