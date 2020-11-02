// import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { typeScale } from 'src/utils/typography'

//  TO DO - Revisit suing proptypes of any here
//        - is there a better way to implement Typescript here?

export const Button = styled.button`
  box-sizing: border-box;
  padding: 12px 16px;
  border-radius: 2px;
  min-width: 100px;
  max-width: 300px;
  cursor: pointer;
  font-weight: 900;
  font-size: ${typeScale.paragraph};
  transition: background-color 0.2s linear, color 0.2s linear;
  color: ${(props: any) => props.theme.colour.tertiary};
`

export const PrimaryButton = styled(Button)`
  background-color: ${(props: any) => props.theme.colour.primary};
  color: ${(props: any) => props.theme.colour.textOnPrimary};
  border: none;
  text-transform: uppercase;
  &:hover {
    background-color: ${(props: any) => props.theme.colour.primaryHover};
  }
  &:active {
    background-color: ${(props: any) => props.theme.colour.primaryActive};
  }
  &:disabled {
    background-color: ${(props: any) => props.theme.colour.disabled};
    cursor: not-allowed;
  }
`

export const SecondaryButton = styled(Button)`
  background-color: ${(props: any) => props.theme.colour.secondary};
  color: ${(props: any) => props.theme.colour.primary};
  border: solid 1px ${(props: any) => props.theme.colour.primary};
  text-transform: uppercase;
  &:hover {
    border-color: ${(props: any) => props.theme.colour.primaryHover};
    color: ${(props: any) => props.theme.colour.primaryHover};
  }
  &:active {
    border-color: ${(props: any) => props.theme.colour.secondaryActive};
    color: ${(props: any) => props.theme.colour.secondaryActive};
  }
  &:disabled {
    border-color: ${(props: any) => props.theme.colour.secondaryActive};
    color: ${(props: any) => props.theme.colour.disabled};
    cursor: not-allowed;
  }
`

export const TertiaryButton = styled(Button)`
  background-color: ${(props: any) => props.theme.colour.secondary};
  color: ${(props: any) => props.theme.colour.tertiary};
  border: none;
  &:hover {
    text-decoration: underline;
  }
  &:active {
    color: ${(props: any) => props.theme.colour.tertiaryActive};
    text-decoration: underline;
  }
  &:disabled {
    color: ${(props: any) => props.theme.colour.disabled};
    cursor: not-allowed;
  }
`
