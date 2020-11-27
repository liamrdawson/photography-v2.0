/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import {useTheme} from 'emotion-theming'
import {ITheme} from 'src/theme/themes'
import { textStyles } from './Text.styles'
import {FC, ReactElement} from 'react'
import {ITypeWeight, ITypeScale} from 'src/theme/typography'
import {ElementType} from 'react'

export type TextProps = {
  fontWeight: keyof ITypeWeight
  fontSize: keyof ITypeScale
  element: ElementType
  children: string
}

export const Text: FC<TextProps> =  ({ children, fontSize, fontWeight, element }): ReactElement => {
  const theme: ITheme = useTheme()
  const base = textStyles(theme)(fontWeight, fontSize)
  const Comp = element
  return (<Comp css={base} >{children}</Comp>)
}

export default Text
