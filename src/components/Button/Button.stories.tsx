import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import {
  Button,
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  IButtonProps
} from './Buttons'

export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          'Buttons allow users to take actions, and make choices, with a single tap.'
      }
    }
  }
} as Meta

const PrimaryTemplate = (args) => <PrimaryButton {...args} />

export const Primary = PrimaryTemplate.bind({})
Primary.args = {
  title: 'string'
}

export const Secondary: Story<IButtonProps> = () => (
  <SecondaryButton label="secondary">Seconndary Button</SecondaryButton>
)

export const Tertiary: Story<IButtonProps> = () => (
  <TertiaryButton label="tertiary">Tertiary Button</TertiaryButton>
)
