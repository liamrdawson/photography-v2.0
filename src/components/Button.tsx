import { css } from '@emotion/core'
import styled from 'styled-components'
import { typeScale } from 'src/utils/typography'

const base = ({theme: {}}) => ({
  boxSizing: `border-box`,
  padding: `12px 16px`,
  fontSize: `${typeScale.paragraph}`,
  borderRadius: 2,
  minWidth: 100,
  maxWidth: 300,
  cursor: `pointer`,
  // fontFamily: theme.primaryFont,
  fontWeight: 900,
  transition: `background-color 0.2s linear, color 0.2s linear`,
  '&:focus': {
    // outline: `3px solid ${theme.accentColour}`,
    outlineOffset: 2,
  }
})

// const primary = css
//   background-color: ${(props) => props.theme.primaryColour};
//   color: ${(props) => props.theme.textColourOnPrimary};
//   border: none;
//   text-transform: uppercase;

//   &:hover {
//     background-color: ${(props) => props.theme.primaryColourHover};
//   }
//   &:active {
//     background-color: ${(props) => props.theme.primaryColourActive};
//   }
//   &:disabled {
//     background-color: ${(props) => props.theme.disabled};
//     cursor: not-allowed;
//   }


// export const secondary = 
//   background-color: ${(props) => props.theme.secondaryColour};
//   color: ${(props) => props.theme.primaryColour};
//   border: solid 1px ${(props) => props.theme.primaryColour};
//   text-transform: uppercase;
//   &:hover {
//     border-color: ${(props) => props.theme.primaryColourHover};
//     color: ${(props) => props.theme.primaryColourHover};
//   }
//   &:active {
//     border-color: ${(props) => props.theme.secondaryColourActive};
//     color: ${(props) => props.theme.secondaryColourActive};
//   }
//   &:disabled {
//     border-color: ${(props) => props.theme.secondaryColourActive};
//     color: ${(props) => props.theme.disabled};
//     cursor: not-allowed;
//   }


// const tertiary = css
//   background-color: ${(props) => props.theme.secondaryColour};
//   color: ${(props) => props.theme.tertiaryColour};
//   border: none;
//   &:hover {
//     text-decoration: underline;
//   }
//   &:active {
//     color: ${(props) => props.theme.tertiaryColourActive};
//     text-decoration: underline;
//   }
//   &:disabled {
//     color: ${(props) => props.theme.disabled};
//     cursor: not-allowed;
//   }


export const PrimaryButton = () => (
  <button css={base}>Hi There</button>
)

// export const PrimaryButton = () => (
//   <button css={[base, primary]}>Primary Button</button>
// )

// export const SecondaryButton = () => (
//   <button css={[base, secondary]}>Secondary Button</button>
// )

// export const TertiaryButton = () => (
//   <button css={[base, tertiary]}>Tertiary Button</button>
// )

