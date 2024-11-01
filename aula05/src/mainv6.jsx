import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Routers } from './routesv6'
import './GlobalStyles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Routers}/>
  </StrictMode>,
)