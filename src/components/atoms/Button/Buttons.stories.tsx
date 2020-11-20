import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

import { PrimaryButton, SecondaryButton, TertiaryButton } from './Buttons'

export default {
  title: 'Atoms/Button',
  component: PrimaryButton,
  parameters: {
    docs: {
      description: {
        component: 'New buttons for new things'
      }
    }
  }
} as Meta

// TODO: [ ] - change args from being implicit any

const PrimaryTemplate = (args) => <PrimaryButton {...args} />
export const Primary = PrimaryTemplate.bind({})
Primary.args = {
  label: 'Primary Button'
}

const SecondaryTemplate = (args) => <SecondaryButton {...args} />
export const Secondary = SecondaryTemplate.bind({})
Secondary.args = {
  label: 'Secondary Button'
}

const TertiaryTemplate = (args) => <TertiaryButton {...args} />
export const Tertiary = TertiaryTemplate.bind({})
Tertiary.args = {
  label: 'Tertiary Button'
}
