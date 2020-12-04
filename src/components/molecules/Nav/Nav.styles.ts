import { css } from '@emotion/core'
import {SPACING, ITheme} from 'src/theme'

export const baseNav = () => css({
  border: 'red solid 1px',
  display: 'flex',
  flexDirection: 'row',
})

export const baseUl = () => css({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  'li': {
    margin: `0 ${SPACING[8]}px`,
  }
})

export const baseLink = () => css({
  textDecoration: 'none',
  cursor: 'pointer',
})

export const dynamicStyle = (theme: ITheme) => css({
  color: theme.colour.tertiary
})