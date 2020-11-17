import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

import { Heading } from './Heading'

export default {
  title: 'Example/Heading',
  component: Heading,
  parameters: {
    docs: {
      description: {
        component:
          'The heading tag is used in HTML to define headings of a page.'
      }
    }
  },
  argTypes: {
    element: {
      control: {
        type: 'select',
        options: ['h1', 'h2', 'h3', 'h4']
      }
    }
  }
} as Meta

// TODO: [ ] - change args from being implicit any

const HeadingTemplate = (args) => <Heading {...args} />
export const HeadingLevel = HeadingTemplate.bind({})
HeadingLevel.args = {
  children: 'The quick brown fox jumps over the lazy dog.',
  element: 'h1'
}
