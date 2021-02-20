import {
  Heading,
} from 'verso-ui'

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '800px',
        justifyContent: 'space-around',
        margin: 'auto',
        textAlign: 'center',
        alignItems: 'center'
      }}
    >
      <Heading element="h4">Hi there</Heading>

    </div>
  )
}

export default App
