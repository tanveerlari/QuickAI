import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/react'

const PUBBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

createRoot(document.getElementById('root')).render(
   <ClerkProvider publishableKey={PUBBLISHABLE_KEY} afterSignInUrl='/'>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ClerkProvider>
)
