/** @jsxRuntime classic */
/** @jsx jsx */
import { FC, ReactElement, ElementType } from 'react'
import { jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import { ITheme } from 'src/theme/themes'
import { ITypeWeight, ITypeScale } from 'src/theme/typography'
import { textStyles } from './Text.styles'

export type TextProps = {
  fontWeight: keyof ITypeWeight
  fontSize: keyof ITypeScale
  element: ElementType
  children: string
}

export const Text: FC<TextProps> = ({
  children = '' as string,
  fontSize = 'normal' as keyof ITypeScale,
  fontWeight = 'light' as keyof ITypeWeight,
  element = '' as string
}): ReactElement => {
  const theme: ITheme = useTheme()
  const base = textStyles(theme)(fontWeight, fontSize)
  const Comp = element
  return <Comp css={base}>{children}</Comp>
}

export default Text
