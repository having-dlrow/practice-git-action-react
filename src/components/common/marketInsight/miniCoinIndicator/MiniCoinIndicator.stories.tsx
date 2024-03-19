import { Story, Meta } from '@storybook/react';
import MiniCoinIndicator from './MiniCoinIndicator';
import './miniCoinIndicator.module.scss';

export default {
  title: 'Components/MiniCoinIndicator',
  component: MiniCoinIndicator,
} as Meta;

const Template: Story<{ code: string }> = (args) => <MiniCoinIndicator {...args} />;

export const Default = Template.bind({});
Default.args = {
  code: 'BTC',
};
