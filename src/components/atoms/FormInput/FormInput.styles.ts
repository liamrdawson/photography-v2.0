import { css } from '@emotion/core'

import { ITheme } from '../../../theme/themes'
import { typeScale, typeWeight } from '../../../theme/typography'
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
    fontSize: typeScale.normal,
    backgroundColor: theme.colour.formBackground,
    borderColor: theme.colour.primary
  })

export const labelStyle = () =>
  css({
    fontSize: typeScale.small,
    fontWeight: typeWeight.light,
    marginBottom: SPACING[3]
  })
