import { css } from '@emotion/core'
import { ITheme } from '../../utils/themes'
import { typeScale } from '../../utils/typography'

export const base = css({
  boxSizing: 'border-box',
  padding: '12px 16px',
  borderRadius: 2,
  minWidth: 100,
  maxWidth: 300,
  cursor: 'pointer',
  fontWeight: 900,
  fontSize: typeScale.paragraph,
  transition: 'background-color 0.2s linear, color 0.2s linear'
})

export const primary = (theme: ITheme) =>
  css(
    {
      textTransform: 'uppercase',
      backgroundColor: theme.colour.primary,
      color: theme.colour.textOnPrimary,
      border: 'none',
      '&:hover': {
        backgroundColor: theme.colour.primaryHover
      },
      '&:active': {
        backgroundColor: theme.colour.primaryActive
      },
      '&:disabled': {
        backgroundColor: theme.colour.disabled,
        cursor: 'not-allowed'
      }
    },
    base
  )

export const secondary = (theme: ITheme) =>
  css(
    {
      backgroundColor: theme.colour.secondary,
      color: theme.colour.primary,
      border: `solid 1px ${theme.colour.primary}`,
      textTransform: 'uppercase',
      '&:hover': {
        borderColor: theme.colour.primaryHover,
        color: theme.colour.primaryHover
      },
      '&:active': {
        borderColor: theme.colour.secondaryActive,
        color: theme.colour.secondaryActive
      },
      '&:disabled': {
        backgroundColor: theme.colour.disabled,
        colour: theme.colour.disabled,
        cursor: 'not-allowed'
      }
    },
    base
  )

export const tertiary = (theme: ITheme) =>
  css(
    {
      backgroundColor: theme.colour.secondary,
      color: theme.colour.tertiary,
      border: 'none',
      textTransform: 'uppercase',
      '&:hover': {
        textDecoration: 'underline',
        color: theme.colour.tertiaryHover
      },
      '&:active': {
        borderColor: theme.colour.tertiaryActive,
        color: theme.colour.tertiaryActive
      },
      '&:disabled': {
        backgroundColor: theme.colour.disabled,
        colour: theme.colour.disabled,
        cursor: 'not-allowed'
      }
    },
    base
  )
