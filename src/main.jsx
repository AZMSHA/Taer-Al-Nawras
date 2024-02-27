import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import {
  ChakraBaseProvider,
  theme
} from '@chakra-ui/react'

delete theme.styles.global;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraBaseProvider theme={theme} resetCSS={false} disableGlobalStyle={true} >
      <App />
    </ChakraBaseProvider>
  </React.StrictMode>,
)
