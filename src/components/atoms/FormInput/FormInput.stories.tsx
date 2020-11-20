import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

import { TextInput, TextArea } from './FormInput'

export default {
  title: 'Atoms/FormInput',
  component: TextInput,
  parameters: {
    docs: {
      description: {
        component: 'An input for inputting things'
      }
    }
  }
} as Meta

// TODO: [ ] - change args from being implicit any

const TextInputTemplate = (args) => <TextInput {...args} />
export const FormInput = TextInputTemplate.bind({})
FormInput.args = {
  label: 'I am a label',
  type: 'text'
}

const TextAreaTemplate = (args) => <TextArea {...args} />
export const TextAreaInput = TextAreaTemplate.bind({})
TextAreaInput.args = {
  label: 'I am a label'
}
