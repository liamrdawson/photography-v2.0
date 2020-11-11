/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { primary, secondary, tertiary } from './Buttons.styles'

type ButtonTypes = {
  label: string
}

export const PrimaryButton: Story = (props: ButtonTypes) => {
  const { label } = props
  return (
    <button type="button" css={primary}>
      {label}
    </button>
  )
}

export const SecondaryButton = (props: ButtonTypes) => {
  const { label } = props
  return (
    <button type="button" css={secondary}>
      {label}
    </button>
  )
}

export const TertiaryButton = (props: ButtonTypes) => {
  const { label } = props
  return (
    <button type="button" css={tertiary}>
      {label}
    </button>
  )
}
