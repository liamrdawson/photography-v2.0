import { ThemeProvider } from 'emotion-theming'
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton
} from 'src/components/atoms/Button/Buttons'
import { defaultTheme } from 'src/utils/themes'
import { primaryFont } from 'src/utils/typography'

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '800px',
          height: '400px',
          justifyContent: 'space-around',
          margin: 'auto',
          textAlign: 'center',
          alignItems: 'center'
        }}
      >
        <div
          style={{
            fontFamily: primaryFont
          }}
        >
          Welcome to Next.js!
        </div>
        <PrimaryButton label="Primary Button" />
        <SecondaryButton label="Secondary Button" />
        <TertiaryButton label="Tertiary Button" />
      </div>
    </ThemeProvider>
  )
}

export default App
