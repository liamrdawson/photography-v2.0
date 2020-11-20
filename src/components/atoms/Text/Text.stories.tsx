import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

import { Text } from './Text'


export default {
  title: 'Atoms/Text',
  component: Text,
  parameters: {
    docs: {
      description: {
        component:
          'The heading tag is used in HTML to define headings of a page.'
      }
    }
  },
  argTypes: {
    fontSize: {
      control: {
        type: 'select',
        options: ['small', 'normal', 'caption', 'medium', 'large']
      }
    },
    fontWeight: {
      control: {
        type: 'select',
        options: ['light', 'medium', 'bold', 'black']
      }
    }
  }
} as Meta

// TODO: [ ] - change args from being implicit any

const TextTemplate = (args) => <Text {...args} />
export const TextComponent = TextTemplate.bind({})
TextComponent.args = {
  children: 'The quick brown fox jumps over the lazy dog.',
  fontSize: 'normal',
  fontWeight: 'light'
}
