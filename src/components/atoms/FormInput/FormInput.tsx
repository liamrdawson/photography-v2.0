/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

import { ITheme } from '../../../utils/themes'
import { typeScale } from '../../../utils/typography'
import { SPACING } from '../../../utils/spacing'

type FormTypes = {
  label: string
  type: string
}

const labelAndForm = (theme: ITheme) =>
  css({
    display: 'flex',
    flexDirection: 'column',
    fontFamily: theme.primaryFont
  })

const input = (theme: ITheme) =>
  css({
    fontFamily: theme.primaryFont,
    boxSizing: 'border-box',
    borderRadius: 2,
    borderWidth: SPACING[1],
    padding: SPACING[4],
    fontSize: typeScale.paragraph,
    backgroundColor: theme.colour.formBackground,
    borderColor: theme.colour.primary
  })

const labelStyle = (theme: ITheme) =>
  css({
    fontSize: typeScale.smallText,
    fontWeight: 300,
    marginBottom: SPACING[3]
  })

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
