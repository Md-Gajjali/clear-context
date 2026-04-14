import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContext from './Context/UserContext.jsx'
import ThemeContext from './Context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeContext>
      <UserContext>
      <App />
      </UserContext>
    </ThemeContext>
  </StrictMode>,
)
