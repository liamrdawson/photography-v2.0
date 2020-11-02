// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import React from 'react'
import Button from './Button'

interface ButtonProps {
  background?: string
  label?: string
}

export default {
  title: './Button',
  component: Button,
} as Meta

// We create a “template” of how args map to rendering
const Template: Story<ButtonProps> = (args: any) => <Button {...args}></Button>

// Each story then reuses that template
export const Primary = Template.bind({})
Primary.args = { background: '#ff0', label: 'Button' }

// The template is reused across stories.
// Template.bind({}) makes a copy of the function which reduces code duplication.
// Similarly,...Primary.args makes a copy of the data, reducing data duplication.

export const Secondary = Template.bind({})
Secondary.args = { ...Primary.args, label: '😄👍😍💯' }

export const Tertiary = Template.bind({})
Tertiary.args = { ...Primary.args, label: '📚📕📈🤓' }
