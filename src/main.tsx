import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './locales' // Import i18n config
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
