import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PublicationsProvider } from './context/PublicationsContext'
import { AuthProvider } from './context/AuthContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <PublicationsProvider>
        <App />
      </PublicationsProvider>
    </AuthProvider>
  </StrictMode>,
)