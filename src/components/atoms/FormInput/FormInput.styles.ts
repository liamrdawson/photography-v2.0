import { css } from '@emotion/core'

import { ITheme } from '../../../theme/themes'
import { typeScale } from '../../../theme/typography'
import { SPACING } from '../../../theme/spacing'

export const labelAndForm = (theme: ITheme) =>
  css({
    display: 'flex',
    flexDirection: 'column',
    fontFamily: theme.primaryFont
  })

export const input = (theme: ITheme) =>
  css({
    fontFamily: theme.primaryFont,
    boxSizing: 'border-box',
    borderRadius: 2,
    borderWidth: SPACING[1],
    padding: SPACING[4],
    fontSize: typeScale.paragraph,
    backgroundColor: theme.colour.formBackground,
    borderColor: theme.colour.primary
  })

export const labelStyle = (theme: ITheme) =>
  css({
    fontSize: typeScale.smallText,
    fontWeight: 300,
    marginBottom: SPACING[3]
  })
