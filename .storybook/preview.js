import { ThemeProvider } from '@emotion/react'
import { defaultTheme } from '../src/theme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
}

export const decorators = [
  (Story) => 
    <ThemeProvider theme={defaultTheme}>
      <Story />
    </ThemeProvider>
  
]
