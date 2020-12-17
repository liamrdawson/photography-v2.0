/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, SerializedStyles } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import { FC, ReactElement, ElementType } from 'react'
import { ITheme, ITypeWeight, ITypeScale } from 'src/theme'
import { textStyles } from './Text.styles'

export type TextProps = {
  fontWeight: keyof ITypeWeight
  fontSize: keyof ITypeScale
  element: ElementType
  children: string
  css?: object
  additionalStyles: SerializedStyles
}

export const Text: FC<TextProps> = ({
  additionalStyles,
  children,
  fontSize,
  fontWeight,
  element,
  css
}): ReactElement => {
  const theme: ITheme = useTheme()
  const base = textStyles(theme)(fontWeight, fontSize)
  const Comp = element
  const styles = [css, base, additionalStyles]

  return <Comp css={styles}>{children}</Comp>
}

export default Text
