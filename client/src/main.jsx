import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from '@material-tailwind/react'
import { AuthProvider } from './common/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider>
      <AuthProvider> 
        <App />
      </AuthProvider>
    </ThemeProvider>
)
