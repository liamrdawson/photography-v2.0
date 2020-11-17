/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { headingStyles, base } from './Heading.styles'

type Props = {
  children: string
  element: string
}

/**
 * FIXME:
 *  - [ ]   Type '{ children: string; css: (theme: ITheme) => SerializedStyles; }' is not assignable to type 'IntrinsicAttributes'.
 *          Property 'children' does not exist on type 'IntrinsicAttributes'.
 */

export const Heading = ({ children, element: Element }: Props) => {
  return <Element css={[base(), headingStyles[Element]]}>{children}</Element>
}

export default Heading
