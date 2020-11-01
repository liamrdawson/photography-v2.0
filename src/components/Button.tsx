import { css } from '@emotion/core'

const base = css`
  box-sizing: border-box;
  padding: 12px 16px;
  border-radius: 2px;
  min-width: 100px;
  max-width: 300px;
  cursor: pointer;
  font-weight: 900px;
  transition: background-color 0.2s linear, color 0.2s linear;
`

interface ButtonProps {
  text: string
}

const PrimaryButton = (props: ButtonProps) => {
  const { text } = props
  return (
    <button type="button" css={[base]}>
      {text}
    </button>
  )
}

export default PrimaryButton
