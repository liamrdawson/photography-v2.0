/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core'

import {labelAndForm, labelStyle, input} from './FormInput.styles'

type FormTypes = {
  label: string
  type: string
}


export const TextInput = (props: FormTypes) => {
  const { label, type } = props
  return (
    <div css={labelAndForm}>
      <label css={labelStyle} htmlFor={label}>
        {label}
      </label>
      <input css={input} type={type} id={label} name={label} />
    </div>
  )
}

export const TextArea = (props: FormTypes) => {
  const { label } = props
  return (
    <div css={labelAndForm}>
      <label css={labelStyle} htmlFor={label}>
        {label}
      </label>
      <textarea css={input} id={label} name={label} />
    </div>
  )
}
