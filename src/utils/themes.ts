import { DefaultTheme } from 'styled-components'

import { BLACK, NEUTRAL, RED, BLUE } from './colours'
import { primaryFont } from './typography'

export const defaultTheme: DefaultTheme = {
  primaryColour: BLACK[500],
  primaryColourHover: BLACK[400],
  primaryColourActive: BLACK[300],
  textColourOnPrimary: NEUTRAL[100],

  disabled: NEUTRAL[400],

  secondaryColour: NEUTRAL[100],
  secondaryColourHover: NEUTRAL[200],
  secondaryColourActive: BLACK[300],

  tertiaryColour: RED[200],
  tertiaryColourHover: RED[200],
  tertiaryColourActive: BLACK[300],

  accentColour: BLUE[200],

  textColour: BLACK[500],
  textColourInverted: NEUTRAL[100],
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
