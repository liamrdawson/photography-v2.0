// Libraries
import { ThemeProvider } from '@emotion/react'
// Utils
import { defaultTheme } from 'src/theme'
// Atomic Components
import {
  Text,
  Heading,
  PrimaryButton,
  SecondaryButton,
  TertiaryButton
} from 'src/components/atoms'
import { Nav } from 'src/components/molecules'

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
        <Nav
          pages={[
            {
              pageName: 'One',
              pathName: '/one'
            },
            {
              pageName: 'Two',
              pathName: '/two'
            }
          ]}
        />
        <Heading element="h1">👋 🌏</Heading>
        <PrimaryButton label="Primary Button" />
        <SecondaryButton label="Secondary Button" />
        <TertiaryButton label="Tertiary Button" />
        <Text element="p" fontWeight="light" fontSize="large">
          I am a text element!
        </Text>
      </div>
    </ThemeProvider>
  )
}

export default App
