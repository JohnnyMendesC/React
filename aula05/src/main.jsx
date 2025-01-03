import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routers } from './routes/index'
import './GlobalStyles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Routers />
  </StrictMode>,
)
