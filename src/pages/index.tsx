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
        <Heading element="h1">My dope site!</Heading>
        <PrimaryButton label="Primary Button" />
        <SecondaryButton label="Secondary Button" />
        <TertiaryButton label="Tertiary Button" />
        <Heading element="p">Hello World!</Heading>
      </div>
    </ThemeProvider>
  )
}

export default App
