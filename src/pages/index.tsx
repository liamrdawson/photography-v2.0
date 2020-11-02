import { ThemeProvider } from 'emotion-theming'
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from 'src/components/Button'
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
          alignItems: 'center',
        }}
      >
        <div
          style={{
            fontFamily: primaryFont,
          }}
        >
          Welcome to Next.js!
        </div>
        <PrimaryButton>
          {'Hello '}
          <span role="img" aria-label="world">
            🌏
          </span>
        </PrimaryButton>
        <SecondaryButton>
          {'Hello '}
          <span role="img" aria-label="moon">
            🌚
          </span>
        </SecondaryButton>
        <TertiaryButton>
          {'Hello '}
          <span role="img" aria-label="black phillip">
            👹
          </span>
        </TertiaryButton>
      </div>
    </ThemeProvider>
  )
}

export default App
