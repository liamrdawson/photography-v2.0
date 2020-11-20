import { css } from '@emotion/core'
import { ITheme } from '../../../theme/themes'
import { typeScale, typeWeight } from '../../../theme/typography'

export const textStyles = (theme: ITheme) => (weight: string = 'light', size: string = 'normal') => css({
  fontFamily: theme.primaryFont,
  color: theme.colour.primary,
  fontWeight: typeWeight[weight],
  fontSize: typeScale[size]
})