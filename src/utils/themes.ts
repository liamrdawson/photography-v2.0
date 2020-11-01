import { BLACK, NEUTRAL, RED, BLUE } from './colours'
import { primaryFont } from './typography'

export const defaultTheme = {
  colour: {
    primary: BLACK[500],
    primaryHover: BLACK[400],
    primaryActive: BLACK[300],
    textOnPrimary: NEUTRAL[100],

    disabled: NEUTRAL[400],

    secondary: NEUTRAL[100],
    secondaryHover: NEUTRAL[200],
    secondaryActive: BLACK[300],

    tertiary: RED[200],
    tertiaryHover: RED[200],
    tertiaryActive: BLACK[300],

    accent: BLUE[200],

    text: BLACK[500],
    textInverted: NEUTRAL[100],
  },
  primaryFont,
}

export const darkTheme = {
  primaryColour: NEUTRAL[100],
  primaryColourHover: BLACK[400],
  primaryColourActive: BLACK[300],
  textColourOnPrimary: BLACK[500],

  disabled: NEUTRAL[400],

  secondaryColour: BLACK[500],
  secondaryColourHover: NEUTRAL[200],
  secondaryColourActive: BLACK[300],

  tertiaryColour: RED[200],
  tertiaryColourHover: RED[200],
  tertiaryColourActive: BLACK[300],

  accentColour: BLUE[200],

  textColour: NEUTRAL[100],
  textColourInverted: BLACK[500],
  primaryFont,
}
