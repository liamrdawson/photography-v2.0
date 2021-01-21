/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { TextInput, TextArea, PrimaryButton } from 'src/components/atoms'
import {
  FormStyle,
  FormFirstNameStyle,
  FormLastNameStyle,
  FormEmailStyle,
  FormSubjectStyle,
  FormMessageStyle
} from './ContactForm.styles'

const formIsValid = () => {
  // TODO: check if the form inputs are all entered with the correct data
  // return boolean value
}

export const ContactForm = () => {
  return (
    <form css={FormStyle}>
      <TextInput
        additionalStyles={FormFirstNameStyle()}
        label="First Name"
        type="text"
      />
      <TextInput
        additionalStyles={FormLastNameStyle()}
        label="Last Name"
        type="text"
      />
      <TextInput
        additionalStyles={FormEmailStyle()}
        label="Email Address"
        type="email"
      />
      <TextInput
        additionalStyles={FormSubjectStyle()}
        label="Subject"
        type="text"
      />
      <TextArea
        additionalStyles={FormMessageStyle()}
        label="Message"
        type="text"
      />
      <PrimaryButton isDisabled={false} label="Send" />
    </form>
  )
}

export default ContactForm
