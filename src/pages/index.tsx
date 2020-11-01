import { ThemeProvider } from 'emotion-theming'
import PrimaryButton from 'src/components/Button'
import { defaultTheme } from 'src/utils/themes'
import { primaryFont, typeScale } from 'src/utils/typography'

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
            fontSize: typeScale.mediumText,
          }}
        >
          Welcome to Next.js!
        </div>
        <PrimaryButton text="Hello 🌏" />
      </div>
    </ThemeProvider>
  )
}

export default App
