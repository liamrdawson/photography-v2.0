import { css } from '@emotion/core'
import { defaultTheme, ITheme } from 'src/theme/themes'
import { typeScale } from 'src/theme/typography'

export const base = (theme: ITheme = defaultTheme) =>
  css({
    fontFamily: theme.primaryFont,
    color: theme.colour.primary
  })

export const componentStyles = () => ({
  h1: {
    fontWeight: 900,
    fontSize: typeScale.heading1
  },
  h2: {
    fontWeight: 500,
    fontSize: typeScale.heading2
  },
  h3: {
    fontWeight: 800,
    fontSize: typeScale.heading3
  },
  h4: {
    fontWeight: 800,
    fontSize: typeScale.heading4
  }
})

export interface IHeadingStyles {
  readonly h1: string
  readonly h2: string
  readonly h3: string
  readonly h4: string
}

export const headingStyles = componentStyles()
