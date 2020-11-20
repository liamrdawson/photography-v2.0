// Libraries
import { ThemeProvider } from 'emotion-theming'
// Utils
import { defaultTheme } from 'src/theme/themes'
// Components
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton
} from 'src/components/atoms/Button'
import { Heading } from 'src/components/atoms/Heading'
import {Text} from 'src/components/atoms/Text'

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
        <Heading element="h1">👋 🌏</Heading>
        <PrimaryButton label="Primary Button" />
        <SecondaryButton label="Secondary Button" />
        <TertiaryButton label="Tertiary Button" />
        <Text fontWeight='light' fontSize='large'>I am a text element!</Text>
      </div>
    </ThemeProvider>
  )
}

export default App
