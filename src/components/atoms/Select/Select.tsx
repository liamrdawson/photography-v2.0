/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from '@emotion/react'
import { SPACING, typeScale, ITheme } from 'src/theme'

import ArrowDown from './arrow-down.svg'

export type FormTypes = {
  label: string
  id: string
  options: Array<object>
}

const selectStyles = (theme: ITheme) =>
  css({
    fontFamily: theme.primaryFont,
    boxSizing: 'border-box',
    borderRadius: 4,
    borderWidth: SPACING[1],
    padding: SPACING[5],
    fontSize: typeScale.small,
    backgroundColor: theme.colour.formBackground,
    borderColor: theme.colour.primary,
    height: '100%',
    paddingRight: '50px',
    appearance: 'none'
  })

const arrowDownStyles = css({
  position: 'absolute',
  zIndex: 999,
  top: SPACING[5],
  right: SPACING[5]
})

const selectContainerStyles = css({
  position: 'relative'
})

export const Select = () => {
  return (
    <div css={selectContainerStyles}>
      <select css={selectStyles}>
        <option>A4 / 8.3 x 11.7 inch</option>
        <option>A3 / 8.3 x 11.7 inch</option>
        <option>A2 / 8.3 x 11.7 inch</option>
      </select>
      <ArrowDown css={arrowDownStyles} />
    </div>
  )
}
