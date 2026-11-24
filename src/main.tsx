import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'/*
import { Flex } from './Components/flex'
import { Grid } from './Components/Grind'*/
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
   {/* <Flex/>
    <Grid/>*/}
  </StrictMode>,
)
