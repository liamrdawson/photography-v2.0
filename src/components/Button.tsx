import styled from 'styled-components'
import { typeScale } from 'src/utils/typography'

const Button = styled.button`
  box-sizing: border-box;
  padding: 12px 16px;
  font-size: ${typeScale.paragraph};
  border-radius: 2px;
  min-width: 100px;
  max-width: 300px;
  cursor: pointer;
  font-family: ${(props) => props.theme.primaryFont};
  font-weight: 900;
  transition: background-color 0.2s linear, color 0.2s linear;
  &:focus {
    outline: 3px solid ${(props) => props.theme.accentColour};
    outline-offset: 2px;
  }
`

export const PrimaryButton = styled(Button)`
  background-color: ${(props) => props.theme.primaryColour};
  color: ${(props) => props.theme.textColourOnPrimary};
  border: none;
  text-transform: uppercase;

  &:hover {
    background-color: ${(props) => props.theme.primaryColourHover};
  }
  &:active {
    background-color: ${(props) => props.theme.primaryColourActive};
  }
  &:disabled {
    background-color: ${(props) => props.theme.disabled};
    cursor: not-allowed;
  }
`

export const SecondaryButton = styled(Button)`
  background-color: ${(props) => props.theme.secondaryColour};
  color: ${(props) => props.theme.primaryColour};
  border: solid 1px ${(props) => props.theme.primaryColour};
  text-transform: uppercase;
  &:hover {
    border-color: ${(props) => props.theme.primaryColourHover};
    color: ${(props) => props.theme.primaryColourHover};
  }
  &:active {
    border-color: ${(props) => props.theme.secondaryColourActive};
    color: ${(props) => props.theme.secondaryColourActive};
  }
  &:disabled {
    border-color: ${(props) => props.theme.secondaryColourActive};
    color: ${(props) => props.theme.disabled};
    cursor: not-allowed;
  }
`

export const TertiaryButton = styled(Button)`
  background-color: ${(props) => props.theme.secondaryColour};
  color: ${(props) => props.theme.tertiaryColour};
  border: none;
  &:hover {
    text-decoration: underline;
  }
  &:active {
    color: ${(props) => props.theme.tertiaryColourActive};
    text-decoration: underline;
  }
  &:disabled {
    color: ${(props) => props.theme.disabled};
    cursor: not-allowed;
  }
`
