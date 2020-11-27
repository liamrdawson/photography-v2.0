/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { headingStyles, base, IHeadingStyles} from './Heading.styles'
import {ElementType} from 'react'
import {ITheme} from 'src/theme/themes'

export type HeadingProps = {
  children: string
  element: any
}

export const Heading = ({ children, element }: HeadingProps) => {
  const Comp: ElementType = element
  const elementStyleSelector: keyof IHeadingStyles = element
  return <Comp css={[base(), headingStyles[elementStyleSelector]]}>{children}</Comp>
}

export default Heading
