import React from 'react';
import { Story, Meta } from '@storybook/react';
import RateDisplay from './RateDisplay';
import './rateDisplay.module.scss';

export default {
    title: 'Components/RateDisplay',
    component: RateDisplay,
    argTypes: {
        rate: {
            control: 'number',
            description: 'Rate value to display',
            defaultValue: 0, // 기본값 설정
        },
    },
} as Meta;

// Template 함수를 사용하여 스토리를 정의합니다.
const Template: Story<{ rate: number }> = (args) => <RateDisplay {...args} />;

// 기본 스토리
export const Default = Template.bind({});
Default.args = {
    rate: 0,
};

// 양수 비율 스토리
export const PositiveRate = Template.bind({});
PositiveRate.args = {
    rate: 5.34,
};

// 음수 비율 스토리
export const NegativeRate = Template.bind({});
NegativeRate.args = {
    rate: -2.76,
};
