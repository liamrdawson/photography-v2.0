// import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { FunctionComponent } from 'react'
import { typeScale } from '../../utils/typography'

interface IButtonProps {
  readonly theme: {
    colour: {
      [key: string]: string
    }
  }
}

export const Button: FunctionComponent = styled.button`
  box-sizing: border-box;
  padding: 12px 16px;
  border-radius: 2px;
  min-width: 100px;
  max-width: 300px;
  cursor: pointer;
  font-weight: 900;
  font-size: ${typeScale.paragraph};
  transition: background-color 0.2s linear, color 0.2s linear;
  color: ${(props: IButtonProps) => props.theme.colour.tertiary};
`

export const PrimaryButton = styled(Button)`
  background-color: ${(props: IButtonProps) => props.theme.colour.primary};
  color: ${(props: IButtonProps) => props.theme.colour.textOnPrimary};
  border: none;
  text-transform: uppercase;
  &:hover {
    background-color: ${(props: IButtonProps) =>
      props.theme.colour.primaryHover};
  }
  &:active {
    background-color: ${(props: IButtonProps) =>
      props.theme.colour.primaryActive};
  }
  &:disabled {
    background-color: ${(props: IButtonProps) => props.theme.colour.disabled};
    cursor: not-allowed;
  }
`

export const SecondaryButton = styled(Button)`
  background-color: ${(props: IButtonProps) => props.theme.colour.secondary};
  color: ${(props: IButtonProps) => props.theme.colour.primary};
  border: solid 1px ${(props: IButtonProps) => props.theme.colour.primary};
  text-transform: uppercase;
  &:hover {
    border-color: ${(props: IButtonProps) => props.theme.colour.primaryHover};
    color: ${(props: IButtonProps) => props.theme.colour.primaryHover};
  }
  &:active {
    border-color: ${(props: IButtonProps) =>
      props.theme.colour.secondaryActive};
    color: ${(props: IButtonProps) => props.theme.colour.secondaryActive};
  }
  &:disabled {
    border-color: ${(props: IButtonProps) =>
      props.theme.colour.secondaryActive};
    color: ${(props: IButtonProps) => props.theme.colour.disabled};
    cursor: not-allowed;
  }
`

export const TertiaryButton = styled(Button)`
  background-color: ${(props: IButtonProps) => props.theme.colour.secondary};
  color: ${(props: IButtonProps) => props.theme.colour.tertiary};
  border: none;
  &:hover {
    text-decoration: underline;
  }
  &:active {
    color: ${(props: IButtonProps) => props.theme.colour.tertiaryActive};
    text-decoration: underline;
  }
  &:disabled {
    color: ${(props: IButtonProps) => props.theme.colour.disabled};
    cursor: not-allowed;
  }
`
