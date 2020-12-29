import '@emotion/react'
import { ITheme } from './src/theme'

declare module '@emotion/react' {
  export interface Theme extends ITheme {
    readonly colour: {
      primary: string
      primaryHover: string
      primaryActive: string
      textOnPrimary: string

      disabled: string

      secondary: string
      secondaryHover: string
      secondaryActive: string

      tertiary: string
      tertiaryHover: string
      tertiaryActive: string

      accent: string

      text: string
      textInverted: string

      formBackground: string
    }
    primaryFont: string
  }
}
