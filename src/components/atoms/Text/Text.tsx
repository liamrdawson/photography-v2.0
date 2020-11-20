/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core'
import {useTheme} from 'emotion-theming'
import { textStyles } from './Text.styles'

type Props = {
  children: string
  fontWeight: string
  fontSize: string
}

/**
 * FIXME:
 *  - [ ]   Type '{ children: string; css: (theme: ITheme) => SerializedStyles; }' is not assignable to type 'IntrinsicAttributes'.
 *          Property 'children' does not exist on type 'IntrinsicAttributes'.
 */


export const Text = ({ children, fontSize, fontWeight, caption }: Props) => {
  const theme = useTheme()
  const base = textStyles(theme)(fontWeight, fontSize)
  return <p css={base}>{children}</p>
}

export default Text
